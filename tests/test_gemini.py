"""Label reading with Gemini, against a fake google.genai."""
from __future__ import annotations

import json
import sys
import types
from pathlib import Path

import pytest
from homeassistant.core import HomeAssistant

from .common import add_photo


@pytest.fixture
def fake_genai(monkeypatch) -> dict:
    """Replace google.genai; records the image bytes it is sent."""
    seen: dict = {}

    class Part:
        @staticmethod
        def from_bytes(data, mime_type):
            seen["bytes"], seen["mime"] = data, mime_type
            return "part"

    class Models:
        def generate_content(self, **kwargs):
            return types.SimpleNamespace(
                text=json.dumps({"wine_name": "Margaux 750 ml", "alcohol_pct": 13.5, "serving_temp": 17})
            )

    genai_types = types.SimpleNamespace(Part=Part, GenerateContentConfig=lambda **kwargs: kwargs)
    genai = types.ModuleType("google.genai")
    genai.types = genai_types
    genai.Client = lambda api_key: types.SimpleNamespace(models=Models())
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
