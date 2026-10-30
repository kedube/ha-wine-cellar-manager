"""Websockets API for Wine Cellar Manager."""
from __future__ import annotations

import logging
import re
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.importlib import async_import_module

from .const import (
    DOMAIN,
    WINE_TYPES,
    WS_TYPE_CONSUME_BOTTLE,
    WS_TYPE_DELETE_BOTTLE,
    WS_TYPE_DELETE_CELLAR,
    WS_TYPE_GET_DATA,
    WS_TYPE_MOVE_BOTTLE,
    WS_TYPE_RESTORE_BOTTLE,
    WS_TYPE_SAVE_BOTTLE,
    WS_TYPE_SAVE_CELLAR,
    WS_TYPE_SWAP_BOTTLES,
    WS_TYPE_UNIFIED_ANALYZE,
    WS_TYPE_UPLOAD_LABEL_IMAGE,
)
from .storage import WineCellarStore, async_get_store

_LOGGER = logging.getLogger(__name__)


def _safe_str(val: Any) -> str:
    """Safely convert a value to string."""
    if val is None:
        return ""
    return str(val)


def _safe_int(val: Any) -> int | None:
    """Safely convert a value to integer."""
    if val is None or val == "":
        return None
    try:
        return int(val)
    except (ValueError, TypeError):
        return None


def _safe_float(val: Any) -> float | None:
    """Safely convert a value to float."""
    if val is None or val == "":
        return None
    try:
        return float(val)
    except (ValueError, TypeError):
        return None


def _get_store(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> WineCellarStore | None:
    """Return the loaded entry's store, or answer the message with an error."""
    domain_data = hass.data.get(DOMAIN, {})
    for entry in hass.config_entries.async_entries(DOMAIN):
        if entry_data := domain_data.get(entry.entry_id):
            return entry_data["store"]
    connection.send_error(msg["id"], "no_entry", "Wine Cellar Manager is not loaded.")
    return None


def _get_config_entry_options(hass: HomeAssistant) -> dict[str, Any]:
    """Get config entry options."""
    entries = hass.config_entries.async_entries(DOMAIN)
    if not entries:
        return {}
    return dict(entries[0].options) if isinstance(entries, list) else dict(entries.options)


def _normalize_wine_type(val: Any) -> str:
    """Normalize wine type string."""
    t = _safe_str(val).strip().lower()
    return t if t in WINE_TYPES else "other"


def _normalize_label_suggestion(payload: dict[str, Any], image_path: str) -> dict[str, Any]:
    """Clean up and format the raw AI json payload for the wine database."""
    wine_name = _safe_str(payload.get("wine_name")).strip()

    # Éradication automatique des formats de bouteilles (ex: 750ml, 750 ml, 1.5L) à la fin du nom
    wine_name = re.sub(r'\s*[-\(]?\s*\d+(?:\.\d+)?\s*(?:ml|l|cl|ML|L|CL)\s*\)?\s*$', '', wine_name).strip()

    producer = _safe_str(payload.get("producer")).strip()
    region = _safe_str(payload.get("region")).strip()

    for suffix in ("docg", "doc", "aoc", "dop", "igp", "vdp"):
        if region.lower().endswith(f" {suffix}"):
            region = region[:-len(suffix)].strip()
        elif region.lower().endswith(f"({suffix})"):
            region = region[:-len(suffix)-2].strip()

    country = _safe_str(payload.get("country")).strip()
    raw_varietal = _safe_str(payload.get("varietal")).strip()

    raw_varietal_lower = raw_varietal.lower().replace("shiraz", "syrah")
    single_composite_grapes = {
        "cabernet-sauvignon", "pinot-noir", "chenin-blanc", "sauvignon-blanc",
        "cabernet-franc", "gros-manseng", "petit-manseng", "gewürztraminer",
        "savagnin-rose", "carignan-noir", "mourvèdre-syrah"
    }

    normalized_text = raw_varietal_lower.replace("/", "-").replace("&", "-").replace(" and ", "-")

    if "-" in normalized_text:
        if normalized_text in single_composite_grapes:
            varietal = raw_varietal.replace("Shiraz", "Syrah").replace("shiraz", "Syrah")
        else:
            parts = [p.strip().capitalize() for p in normalized_text.split("-") if p.strip()]
            parts = [p if p != "Syrah" else "Syrah" for p in parts]
            varietal = ", ".join(parts)
    else:
        varietal = raw_varietal.replace("Shiraz", "Syrah").replace("shiraz", "Syrah").capitalize()

    notes = _safe_str(payload.get("notes")).strip()

    raw_type = payload.get("wine_type")
    wine_type = _normalize_wine_type(raw_type) if raw_type else "unset"

    vintage = _safe_int(payload.get("vintage"))
    if vintage == 0:
        vintage = None

    price = _safe_float(payload.get("price"))
    if price == 0.0 or price == 0:
        price = None

    serving_temp = _safe_float(payload.get("serving_temp"))
    if serving_temp == 0:
        serving_temp = None

    alcohol_pct = _safe_float(payload.get("alcohol_pct"))
    if alcohol_pct is not None and not 0 < alcohol_pct < 100:
        alcohol_pct = None

    # Sécurité anti-zéro pour l'apogée : si l'IA renvoie 0, on traite comme "pas d'information" (None)
    aging_start_year = _safe_int(payload.get("aging_start_year"))
    if aging_start_year == 0:
        aging_start_year = None

    aging_end_year = _safe_int(payload.get("aging_end_year"))
    if aging_end_year == 0:
        aging_end_year = None

    rating = _safe_int(payload.get("rating"))
    if rating is not None:
        rating = max(0, min(5, rating))

    if (
        aging_start_year is not None
        and aging_end_year is not None
        and aging_start_year > aging_end_year
    ):
        aging_start_year = None
        aging_end_year = None

    # URL SAQ optionnelle transmise par l'IA : seuls les liens http(s) sont retenus,
    # afin qu'un schéma « javascript: » ne puisse jamais atteindre la carte.
    saq_url = _safe_str(payload.get("saq_url")).strip()
    if saq_url and not saq_url.lower().startswith(("http://", "https://")):
        saq_url = ""

    return {
        "wine_name": wine_name,
        "producer": producer,
        "region": region,
        "country": country,
        "varietal": varietal,
        "vintage": vintage,
        "wine_type": wine_type,
        "price": price,
        "serving_temp": serving_temp,
        "alcohol_pct": alcohol_pct,
        "image_path": image_path,
        "saq_url": saq_url if saq_url else None,
        "aging_start_year": aging_start_year,
        "aging_end_year": aging_end_year,
        "rating": rating,
        "notes": notes,
    }


@callback
def async_register_websockets(hass: HomeAssistant) -> None:
    """Register websocket commands."""
    websocket_api.async_register_command(hass, ws_get_data)
    websocket_api.async_register_command(hass, ws_save_cellar)
    websocket_api.async_register_command(hass, ws_delete_cellar)
    websocket_api.async_register_command(hass, ws_save_bottle)
    websocket_api.async_register_command(hass, ws_consume_bottle)
    websocket_api.async_register_command(hass, ws_restore_consumed_bottle)
    websocket_api.async_register_command(hass, ws_delete_bottle)
    websocket_api.async_register_command(hass, ws_move_bottle)
    websocket_api.async_register_command(hass, ws_swap_bottles)
    websocket_api.async_register_command(hass, ws_upload_label_image)
    websocket_api.async_register_command(hass, ws_unified_analyze)


@websocket_api.websocket_command({vol.Required("type"): WS_TYPE_GET_DATA})
@websocket_api.async_response
async def ws_get_data(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Send the cellars, bottles and consumption history.

    The card works out its statistics from these itself.
    """
    if (store := _get_store(hass, connection, msg)) is None:
        return

    data = await store.async_export_cached()
    connection.send_result(
        msg["id"],
        {
            "cellars": data["cellars"],
            "bottles": data["bottles"],
            "consumed_bottles": data["consumed_bottles"],
        },
    )


@websocket_api.websocket_command({
    vol.Required("type"): WS_TYPE_SAVE_CELLAR,
    vol.Optional("cellar_id"): str,
    vol.Required("name"): str,
    vol.Required("shelves"): list,
    vol.Optional("display_order", default=0): int,
    vol.Optional("bg_color", default=""): str,
})
@websocket_api.async_response
async def ws_save_cellar(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Handle save cellar command."""
    if (store := _get_store(hass, connection, msg)) is None:
        return

    try:
        await store.async_save_cellar(
            cellar_id=msg.get("cellar_id"),
            name=msg["name"],
            shelves=msg["shelves"],
            display_order=msg.get("display_order", 0),
            bg_color=msg.get("bg_color", "")
        )
        connection.send_result(msg["id"], {"status": "success"})
    except Exception as err:
        connection.send_error(msg["id"], "save_failed", str(err))


@websocket_api.websocket_command({vol.Required("type"): WS_TYPE_DELETE_CELLAR, vol.Required("cellar_id"): str})
@websocket_api.async_response
async def ws_delete_cellar(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Handle delete cellar command."""
    if (store := _get_store(hass, connection, msg)) is None:
        return

    target_cellar_id = str(msg["cellar_id"])

    try:
        await store.async_delete_cellar(target_cellar_id)
        connection.send_result(msg["id"], {"status": "success"})
    except Exception as err:
        _LOGGER.error("Erreur lors de la suppression en cascade du cellier : %r", err)
        connection.send_error(msg["id"], "delete_failed", str(err))


@websocket_api.websocket_command({
    vol.Required("type"): WS_TYPE_SAVE_BOTTLE,
    vol.Optional("bottle_id"): str,
    vol.Required("cellar_id"): str,
    vol.Required("shelf_id"): str,
    vol.Required("lane"): str,
    vol.Required("position"): int,
    vol.Required("wine_name"): str,
    vol.Optional("producer", default=""): str,
    vol.Optional("region", default=""): str,
    vol.Optional("country", default=""): str,
    vol.Optional("varietal", default=""): str,
    vol.Optional("vintage"): vol.Any(int, None),
    vol.Optional("wine_type", default="other"): str,
    vol.Optional("price"): vol.Any(float, int, None),
    vol.Optional("serving_temp"): vol.Any(float, int, None),
    vol.Optional("alcohol_pct"): vol.Any(float, int, None),
    vol.Optional("image_path", default=""): str,
    vol.Optional("barcode", default=""): str,
    vol.Optional("saq_url"): vol.Any(str, None),
    vol.Optional("aging_start_year"): vol.Any(int, None),
    vol.Optional("aging_end_year"): vol.Any(int, None),
    vol.Optional("rating"): vol.Any(int, None),
    vol.Optional("notes", default=""): str,
})
@websocket_api.async_response
async def ws_save_bottle(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Handle save bottle command securely by unpacking arguments."""
    if (store := _get_store(hass, connection, msg)) is None:
        return

    bottle_id = msg.get("bottle_id")

    try:
        # Déballage explicite des arguments nommés requis par storage.py
        await store.async_save_bottle(
            bottle_id=bottle_id,
            cellar_id=msg["cellar_id"],
            shelf_id=msg["shelf_id"],
            lane=msg["lane"],
            position=int(msg["position"]),
            wine_name=msg["wine_name"],
            producer=msg.get("producer", ""),
            vintage=msg.get("vintage"),
            region=msg.get("region", ""),
            country=msg.get("country", ""),
            varietal=msg.get("varietal", ""),
            wine_type=msg.get("wine_type", "other"),
            price=msg.get("price"),
            serving_temp=msg.get("serving_temp"),
            alcohol_pct=msg.get("alcohol_pct"),
            image_path=msg.get("image_path", ""),
            barcode=msg.get("barcode", ""),
            saq_url=msg.get("saq_url"),
            aging_start_year=msg.get("aging_start_year"),
            aging_end_year=msg.get("aging_end_year"),
            rating=msg.get("rating"),
            notes=msg.get("notes", "")
        )
        connection.send_result(msg["id"], {"status": "success"})
    except Exception as err:
        _LOGGER.exception("Error in ws_save_bottle: %r", err)
        connection.send_error(msg["id"], "save_failed", str(err))


@websocket_api.websocket_command({vol.Required("type"): WS_TYPE_CONSUME_BOTTLE, vol.Required("bottle_id"): str})
@websocket_api.async_response
async def ws_consume_bottle(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Handle consume bottle command."""
    if (store := _get_store(hass, connection, msg)) is None:
        return
    try:
        consumed_id = await store.async_consume_bottle(msg["bottle_id"])
        # The history record's id lets the card undo this (restore_consumed_bottle).
        connection.send_result(msg["id"], {"status": "success", "consumed_id": consumed_id})
    except Exception as err:
        connection.send_error(msg["id"], "consume_failed", str(err))


@websocket_api.websocket_command({vol.Required("type"): WS_TYPE_RESTORE_BOTTLE, vol.Required("consumed_id"): str})
@websocket_api.async_response
async def ws_restore_consumed_bottle(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Handle the undo of a consume: put the bottle back in its slot."""
    if (store := _get_store(hass, connection, msg)) is None:
        return
    try:
        bottle_id = await store.async_restore_consumed_bottle(msg["consumed_id"])
        connection.send_result(msg["id"], {"status": "success", "bottle_id": bottle_id})
    except Exception as err:
        connection.send_error(msg["id"], "restore_failed", str(err))


@websocket_api.websocket_command({vol.Required("type"): WS_TYPE_DELETE_BOTTLE, vol.Required("bottle_id"): str})
@websocket_api.async_response
async def ws_delete_bottle(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Handle delete bottle command."""
    if (store := _get_store(hass, connection, msg)) is None:
        return
    try:
        await store.async_delete_bottle(msg["bottle_id"])
        connection.send_result(msg["id"], {"status": "success"})
    except Exception as err:
        connection.send_error(msg["id"], "delete_failed", str(err))


@websocket_api.websocket_command({
    vol.Required("type"): WS_TYPE_MOVE_BOTTLE,
    vol.Required("bottle_id"): str,
    vol.Required("cellar_id"): str,
    vol.Required("shelf_id"): str,
    vol.Required("lane"): str,
    vol.Required("position"): int
})
@websocket_api.async_response
async def ws_move_bottle(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Handle move bottle command securely with keyword arguments."""
    if (store := _get_store(hass, connection, msg)) is None:
        return
    try:
        # Correction chirurgicale : Utilisation impérative des arguments nommés dictés par storage.py
        await store.async_move_bottle(
            bottle_id=str(msg["bottle_id"]),
            cellar_id=str(msg["cellar_id"]),
            shelf_id=str(msg["shelf_id"]),
            lane=str(msg["lane"]),
            position=int(msg["position"])
        )
        connection.send_result(msg["id"], {"status": "success"})
    except Exception as err:
        _LOGGER.error("Failed to move bottle via WS: %r", err)
        connection.send_error(msg["id"], "move_failed", str(err))


@websocket_api.websocket_command({
    vol.Required("type"): WS_TYPE_SWAP_BOTTLES,
    vol.Required("source_id"): str,
    vol.Required("dest_id"): str,
})
@websocket_api.async_response
async def ws_swap_bottles(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Handle atomic swap bottles command securely."""
    if (store := _get_store(hass, connection, msg)) is None:
        return
    try:
        await store.async_swap_bottles(
            source_id=str(msg["source_id"]),
            dest_id=str(msg["dest_id"])
        )
        connection.send_result(msg["id"], {"status": "success"})
    except Exception as err:
        _LOGGER.error("Failed to swap bottles via WS: %r", err)
        connection.send_error(msg["id"], "swap_failed", str(err))


@websocket_api.websocket_command({vol.Required("type"): WS_TYPE_UPLOAD_LABEL_IMAGE, vol.Required("filename"): str, vol.Required("data_base64"): str})
@websocket_api.async_response
async def ws_upload_label_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Handle image upload command."""
    if (store := _get_store(hass, connection, msg)) is None:
        return
    try:
        path = await store.async_upload_label_image(msg["filename"], msg["data_base64"])
        connection.send_result(msg["id"], {"image_path": path})
    except Exception as err:
        connection.send_error(msg["id"], "upload_failed", str(err))


@websocket_api.websocket_command({
    vol.Required("type"): WS_TYPE_UNIFIED_ANALYZE,
    vol.Optional("barcode", default=""): str,
    vol.Optional("image_path", default=""): str,
})
@websocket_api.async_response
async def ws_unified_analyze(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Unified analyze flow: barcode first, otherwise label image."""
    barcode = "".join(ch for ch in _safe_str(msg.get("barcode", "")) if ch.isdigit())
    image_path = _safe_str(msg.get("image_path", "")).strip()

    if not barcode and not image_path:
        connection.send_error(
            msg["id"],
            "missing_data",
            "Please provide a barcode or upload a label photo.",
        )
        return

    try:
        # Imported on first use, in the executor: importing pydantic would
        # block the event loop.
        gemini_vision = await async_import_module(hass, f"{__package__}.gemini_vision")

        if image_path and not barcode and "temp_barcode_" in image_path:
            store = async_get_store(hass)
            try:
                barcode_result = await gemini_vision.async_extract_barcode_from_image(hass, image_path)
                extracted = barcode_result.get("barcode", "")
            finally:
                await store.async_delete_image(image_path)

            if not extracted:
                connection.send_result(
                    msg["id"],
                    {"message": "No reliable barcode detected.", "suggestion": None},
                )
                return

            connection.send_result(
                msg["id"],
                {
                    "message": "Barcode detected.",
                    "suggestion": {"barcode": extracted},
                    "official_image_url": None,
                },
            )
            return

        result = await gemini_vision.async_analyze_wine_with_gemini(
            hass,
            barcode=barcode or None,
            image_path=image_path or None,
        )

        result["official_image_path"] = None
        connection.send_result(msg["id"], result)

    except Exception as err:
        _LOGGER.exception("Unified analyze failed: %r", err)
        # Nettoyage préventif des caractères de structure JSON pour ne pas faire planter la carte JS
        error_msg = str(err).replace("{", "[").replace("}", "]").replace('"', "'")
        connection.send_error(msg["id"], "analyze_failed", error_msg)
