"""Gemini Vision AI Engine for Wine Cellar Manager using google-genai."""
from __future__ import annotations

import json
import logging
from typing import Any

from homeassistant.core import HomeAssistant
from pydantic import BaseModel, Field

from .const import DEFAULT_GEMINI_MODEL, OPTION_GEMINI_API_KEY, OPTION_GEMINI_MODEL
from .storage import _detect_image_mime, async_get_store
from .websocket_api import _loaded_entry_data, _normalize_label_suggestion

_LOGGER = logging.getLogger(__name__)

# Reading a label takes a few seconds. Without a limit the SDK waits forever
# on a stalled request, holding an executor thread.
GEMINI_TIMEOUT_MS = 60_000

# Définition des schémas de sortie stricts via Pydantic pour forcer Gemini à renvoyer un JSON parfait
class WineAnalysisSchema(BaseModel):
    wine_name: str | None = Field(None, description="Full commercial name or specific cuvée name of the wine (exclude volume like 750ml).")
    producer: str | None = Field(None, description="The specific winery, chateau, domain, or vineyard producer company.")
    region: str | None = Field(None, description="The wine region (e.g., Bordeaux, Tuscany, Napa Valley). Exclude regulatory suffixes like AOC or DOCG.")
    country: str | None = Field(None, description="The origin country (e.g., France, Italy, Canada).")
    varietal: str | None = Field(None, description="The grape variety or varieties (e.g., Cabernet-Sauvignon, or Chardonnay).")
    vintage: int | None = Field(None, description="Year of harvest as an integer.")
    wine_type: str | None = Field(None, description='Must be exactly one of these strings: "red", "white", "rosé", "sparkling", "orange", "sweet", or "other".')
    price: float | None = Field(None, description="The current retail price, in the currency given in the instructions, as a float number (e.g., 24.95).")
    serving_temp: float | None = Field(None, description="Recommended serving temperature in Celsius as a float or integer, if guessable.")
    alcohol_pct: float | None = Field(None, description="The explicit alcohol level percentage extracted from the label as a float number (e.g., 13.5).")
    aging_start_year: int | None = Field(None, description="Estimated starting year when this specific vintage enters its optimal drinking window.")
    aging_end_year: int | None = Field(None, description="Estimated final year of its peak drinking window.")
    notes: str | None = Field(None, description="Brief sensory description, aging potential comment, or food pairing suggestion.")
    saq_url: str | None = Field(None, description="The official SAQ.com URL string for this product web page (e.g., https://saq.com).")

class BarcodeSchema(BaseModel):
    barcode: str | None = Field(None, description="The text string of the numeric barcode digits found, or null if no barcode is visible.")


PROMPT_LABEL_ANALYSIS = """
You are an expert sommelier and wine label scanner. Carefully analyze this image of a wine label.
CRITICAL DIRECTIONS:
1. Do NOT confuse the 'producer' (the company, chateau, winery, estate, or maison who made it) with the 'wine_name' (the specific cuvée, brand name, or grape designation).
2. Look closely at the fine print on the neck, back, or bottom edges of the label to find the alcohol level percentage.
3. If this wine is sold in Canada/Quebec, search your knowledge base to provide its official SAQ.com product page URL in 'saq_url'.
4. Provide its current retail price in {currency} in 'price'. If the currency is CAD and the wine is sold at the SAQ, use the SAQ price.
"""


def _label_prompt(hass: HomeAssistant) -> str:
    return PROMPT_LABEL_ANALYSIS.format(currency=hass.config.currency or "CAD")

PROMPT_BARCODE_EXTRACTION = """
Analyze this image. Find the barcode on the bottle (especially look for a 14-digit SAQ barcode if applicable).
"""

def _make_client(api_key: str) -> Any:
    """Create a Gemini client. It loads certificates, so it runs in the executor."""
    from google import genai
    from google.genai import types

    return genai.Client(
        api_key=api_key, http_options=types.HttpOptions(timeout=GEMINI_TIMEOUT_MS)
    )


async def _async_get_client_and_model(hass: HomeAssistant) -> tuple[Any, str]:
    """Return the loaded entry's Gemini client and model name.

    The options are read here, in the event loop. The client is made once per
    loaded entry and closed when it unloads; changing the options reloads the
    entry, so the key never changes under a client.
    """
    entry_data = _loaded_entry_data(hass)
    if entry_data is None:
        raise ValueError("Wine Cellar Manager is not loaded.")
    options = entry_data["entry"].options
    api_key = options.get(OPTION_GEMINI_API_KEY, "")
    model_name = options.get(OPTION_GEMINI_MODEL, DEFAULT_GEMINI_MODEL)
    if not api_key:
        raise ValueError("Gemini API key is not configured in integration options.")

    client = entry_data.get("gemini_client")
    if client is None:
        new_client = await hass.async_add_executor_job(_make_client, api_key)
        # Two first requests at once each made one: keep one, close the other.
        client = entry_data.setdefault("gemini_client", new_client)
        if client is not new_client:
            await hass.async_add_executor_job(new_client.close)
    return client, model_name


async def _async_label_file(hass: HomeAssistant, image_path: str) -> str:
    """Return the label's path on disk.

    Only images under <config>/www/wine_labels are read, so a crafted path can
    never send another file (secrets.yaml, say) to Gemini.
    """
    local_path = await async_get_store(hass).async_label_file(image_path)
    if not local_path:
        raise ValueError("Only uploaded label images can be analyzed.")
    return local_path


def _load_image_bytes_and_mime(local_path: str) -> tuple[bytes, str]:
    """Read a label image and detect its MIME type from its magic bytes."""
    with open(local_path, "rb") as f:
        data = f.read()
    return data, _detect_image_mime(data) or "image/jpeg"


def _image_part(local_path: str) -> Any:
    """Return a label image as a Gemini content part (executor: reads the file)."""
    from google.genai import types

    image_bytes, mime_type = _load_image_bytes_and_mime(local_path)
    return types.Part.from_bytes(data=image_bytes, mime_type=mime_type)


def _generate(client: Any, model_name: str, contents: Any, schema: Any) -> dict[str, Any]:
    """Ask Gemini for a JSON answer in the given schema (executor: blocking I/O)."""
    from google.genai import types

    response = client.models.generate_content(
        model=model_name,
        contents=contents,
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            response_schema=schema,
        ),
    )
    text = getattr(response, "text", None)
    if not text:
        # No candidates: the request was blocked, or the model said nothing.
        raise ValueError("Gemini returned no answer.")
    answer = json.loads(text)
    if not isinstance(answer, dict):
        raise ValueError("Gemini returned an unexpected answer.")
    return answer


async def _async_ask(hass: HomeAssistant, what: str, job: Any) -> dict[str, Any]:
    """Run a Gemini request in the executor.

    Any failure becomes a ValueError, whose message the card shows (an invalid
    key, an exhausted quota).
    """
    try:
        return await hass.async_add_executor_job(job)
    except Exception as err:
        _LOGGER.error("Gemini %s failed: %r", what, err)
        raise ValueError(f"Gemini API call failed: {err!s}") from err


async def async_analyze_wine_with_gemini(
    hass: HomeAssistant,
    barcode: str | None = None,
    image_path: str | None = None,
) -> dict[str, Any]:
    """Analyze a wine using its barcode or label image via Gemini Vision."""
    client, model_name = await _async_get_client_and_model(hass)
    prompt = _label_prompt(hass)

    if barcode and not image_path:
        contents = f"Provide detailed sommelier data for wine with barcode: {barcode}. Instructions: {prompt}"
        suggestion_raw = await _async_ask(
            hass,
            "barcode lookup",
            lambda: _generate(client, model_name, contents, WineAnalysisSchema),
        )
        return {"suggestion": _normalize_label_suggestion(suggestion_raw, "")}

    if not image_path:
        raise ValueError("An image path is required for vision analysis.")
    local_path = await _async_label_file(hass, image_path)

    raw_json = await _async_ask(
        hass,
        "vision generation",
        lambda: _generate(
            client, model_name, [_image_part(local_path), prompt], WineAnalysisSchema
        ),
    )
    return {
        "suggestion": _normalize_label_suggestion(raw_json, image_path),
        "official_image_url": None,
    }


async def async_extract_barcode_from_image(
    hass: HomeAssistant,
    image_path: str,
) -> dict[str, Any]:
    """Scan an uploaded image to detect and extract numeric barcode strings using Gemini."""
    local_path = await _async_label_file(hass, image_path)
    client, model_name = await _async_get_client_and_model(hass)

    raw_json = await _async_ask(
        hass,
        "barcode scanning",
        lambda: _generate(
            client,
            model_name,
            [_image_part(local_path), PROMPT_BARCODE_EXTRACTION],
            BarcodeSchema,
        ),
    )
    return {"barcode": raw_json.get("barcode")}
