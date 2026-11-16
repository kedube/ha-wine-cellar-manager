"""Label reading with Gemini, against a fake google.genai."""
from __future__ import annotations

import json
import sys
import types
from pathlib import Path

import pytest
from homeassistant.core import HomeAssistant

from .common import DOMAIN, LABELS, add_cellar, add_photo, photo_exists, save_bottle


@pytest.fixture
def fake_genai(monkeypatch) -> dict:
    """Replace google.genai; records the image bytes it is sent and its clients.

    seen["answer"] is the text the model answers with.
    """
    seen: dict = {
        "clients": [],
        "answer": json.dumps({"wine_name": "Margaux 750 ml", "alcohol_pct": 13.5, "serving_temp": 17}),
    }

    class Part:
        @staticmethod
        def from_bytes(data, mime_type):
            seen["bytes"], seen["mime"] = data, mime_type
            return "part"

    class Models:
        def generate_content(self, **kwargs):
            return types.SimpleNamespace(text=seen["answer"])

    class Client:
        def __init__(self, api_key, http_options=None):
            self.http_options = http_options
            self.closed = False
            self.models = Models()
            seen["clients"].append(self)

        def close(self):
            self.closed = True

    genai_types = types.SimpleNamespace(
        Part=Part,
        GenerateContentConfig=lambda **kwargs: kwargs,
        HttpOptions=lambda **kwargs: kwargs,
    )
    genai = types.ModuleType("google.genai")
    genai.types = genai_types
    genai.Client = Client
    google = sys.modules.get("google") or types.ModuleType("google")
    monkeypatch.setattr(google, "genai", genai, raising=False)
    monkeypatch.setitem(sys.modules, "google", google)
    monkeypatch.setitem(sys.modules, "google.genai", genai)
    monkeypatch.setitem(sys.modules, "google.genai.types", genai_types)
    return seen


@pytest.fixture
async def gemini_entry(hass: HomeAssistant, entry):
    hass.config_entries.async_update_entry(entry, options={**entry.options, "gemini_api_key": "k"})
    await hass.async_block_till_done()
    return entry


async def test_vision_reads_label_from_config_dir(
    hass: HomeAssistant, gemini_entry, labels_dir: Path, fake_genai: dict
) -> None:
    from custom_components.wine_cellar_manager.gemini_vision import (
        async_analyze_wine_with_gemini,
    )

    result = await async_analyze_wine_with_gemini(hass, image_path=add_photo(labels_dir, "label.jpg"))
    assert fake_genai["bytes"].startswith(b"\xff\xd8\xff")
    assert fake_genai["mime"] == "image/jpeg"
    suggestion = result["suggestion"]
    assert suggestion["wine_name"] == "Margaux"
    assert suggestion["alcohol_pct"] == 13.5
    assert suggestion["serving_temp"] == 17


async def test_analyze_command_reads_label(
    hass: HomeAssistant, gemini_entry, labels_dir: Path, fake_genai: dict, ws
) -> None:
    """The card's analyze command loads the Gemini module and reads the label."""
    result = await ws(type="unified_analyze", image_path=add_photo(labels_dir, "label.jpg"))
    assert result["suggestion"]["wine_name"] == "Margaux"
    assert fake_genai["mime"] == "image/jpeg"


@pytest.mark.parametrize("path", ["/config/secrets.yaml", "/local/../secrets.yaml", "/etc/hosts"])
async def test_vision_refuses_files_outside_labels(
    hass: HomeAssistant, gemini_entry, labels_dir: Path, fake_genai: dict, path: str
) -> None:
    from custom_components.wine_cellar_manager.gemini_vision import (
        async_analyze_wine_with_gemini,
    )

    Path(hass.config.path("secrets.yaml")).write_text("api_password: hunter2")
    with pytest.raises(ValueError):
        await async_analyze_wine_with_gemini(hass, image_path=path)
    assert "bytes" not in fake_genai, "a file outside wine_labels was read and sent to Gemini"


async def _raw(client, **msg) -> dict:
    msg["type"] = f"{DOMAIN}/{msg['type']}"
    await client.send_json_auto_id(msg)
    return await client.receive_json()


async def test_analyze_cannot_delete_a_label_still_in_use(
    hass: HomeAssistant, ws, labels_dir: Path, hass_ws_client
) -> None:
    """A path that only *contains* "temp_barcode_" is not a scan photo."""
    cellar = await add_cellar(ws)
    bottle = await save_bottle(ws, cellar, 1, wine_name="Margaux",
                               image_path=add_photo(labels_dir, "up.jpg"))
    photo = bottle["image_path"]
    client = await hass_ws_client(hass)

    await _raw(client, type="unified_analyze",
               image_path=f"{LABELS}temp_barcode_x/../{photo[len(LABELS):]}")

    assert photo_exists(labels_dir, photo), "a label still used by a bottle was deleted"


@pytest.mark.parametrize("barcode", ["", "0123"], ids=["scan", "scan-and-barcode"])
async def test_scan_photo_is_deleted_after_analysis(
    hass: HomeAssistant, gemini_entry, labels_dir: Path, fake_genai: dict, ws, barcode: str
) -> None:
    fake_genai["answer"] = json.dumps({"barcode": "0123", "wine_name": "Margaux"})
    scan = add_photo(labels_dir, "temp_barcode_scan_1700000000_0000000b.jpg")
    await ws(type="unified_analyze", image_path=scan, barcode=barcode)
    assert not photo_exists(labels_dir, scan)


@pytest.mark.parametrize(
    ("raw", "expected"),
    [
        ("Cabernet-Sauvignon, Merlot", "Cabernet-Sauvignon, Merlot"),
        ("Pinot Noir", "Pinot Noir"),
        ("Grenache, Syrah, Mourvèdre", "Grenache, Syrah, Mourvèdre"),
        ("Grenache-Syrah-Mourvèdre", "Grenache, Syrah, Mourvèdre"),
        ("Mourvèdre-Syrah", "Mourvèdre, Syrah"),
        ("shiraz / cabernet sauvignon", "Syrah, Cabernet sauvignon"),
        ("Chardonnay and Pinot Noir", "Chardonnay, Pinot Noir"),
        ("", ""),
    ],
)
def test_varietal_suggestion_keeps_grape_names(raw: str, expected: str) -> None:
    from custom_components.wine_cellar_manager.websocket_api import (
        _normalize_label_suggestion,
    )

    assert _normalize_label_suggestion({"varietal": raw}, "")["varietal"] == expected


@pytest.mark.parametrize(("raw", "expected"), [("Rose", "rosé"), ("rosé", "rosé"), ("Rosato", "rosé"), ("blue", "other")])
def test_wine_type_suggestion(raw: str, expected: str) -> None:
    from custom_components.wine_cellar_manager.websocket_api import (
        _normalize_label_suggestion,
    )

    assert _normalize_label_suggestion({"wine_type": raw}, "")["wine_type"] == expected


async def test_one_client_with_a_timeout_closed_on_unload(
    hass: HomeAssistant, gemini_entry, labels_dir: Path, fake_genai: dict, ws
) -> None:
    await ws(type="unified_analyze", image_path=add_photo(labels_dir, "a.jpg"))
    await ws(type="unified_analyze", barcode="0123")
    assert len(fake_genai["clients"]) == 1, "a new client (and connection pool) per request"
    client = fake_genai["clients"][0]
    assert client.http_options == {"timeout": 60_000}

    await hass.config_entries.async_unload(gemini_entry.entry_id)
    assert client.closed


@pytest.mark.parametrize("answer", [None, "", "[1, 2]"], ids=["blocked", "empty", "not-an-object"])
async def test_unusable_answer_gives_a_clear_error(
    hass: HomeAssistant, gemini_entry, labels_dir: Path, fake_genai: dict, ws, hass_ws_client, answer
) -> None:
    fake_genai["answer"] = answer
    client = await hass_ws_client(hass)
    reply = await _raw(client, type="unified_analyze", image_path=add_photo(labels_dir, "a.jpg"))
    assert reply["error"]["code"] == "analyze_failed"
    assert reply["error"]["message"].startswith("Gemini API call failed: Gemini returned")
