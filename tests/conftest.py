"""Shared fixtures: a loaded entry in a temporary config dir, and a websocket client."""
from __future__ import annotations

from pathlib import Path
from unittest.mock import patch

import pytest
from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from .common import DOMAIN

REPO_CUSTOM_COMPONENTS = str(Path(__file__).resolve().parent.parent / "custom_components")


@pytest.fixture(autouse=True)
def auto_enable_custom_integrations(enable_custom_integrations):
    """Let Home Assistant load the integration from custom_components."""
    yield


@pytest.fixture(autouse=True)
def repo_custom_components(hass: HomeAssistant):
    """Find the integration even when the plugin's own custom_components was imported first."""
    import custom_components

    if REPO_CUSTOM_COMPONENTS not in list(custom_components.__path__):
        custom_components.__path__.append(REPO_CUSTOM_COMPONENTS)
    yield


@pytest.fixture
def labels_dir(hass: HomeAssistant, tmp_path: Path) -> Path:
    """A config dir that is not /config, like a Core or venv install."""
    hass.config.config_dir = str(tmp_path / "ha-config")
    path = Path(hass.config.path("www", "wine_labels"))
    path.mkdir(parents=True)
    return path


@pytest.fixture
async def dependencies(hass: HomeAssistant, labels_dir: Path) -> None:
    """Set up http; frontend is marked loaded, since its assets are not installed."""
    hass.config.components.add("frontend")
    assert await async_setup_component(hass, "http", {})


@pytest.fixture
async def entry(hass: HomeAssistant, dependencies) -> MockConfigEntry:
    """A loaded config entry."""
    entry = MockConfigEntry(
        domain=DOMAIN,
        unique_id=DOMAIN,
        title="Cellar",
        data={"title": "Cellar"},
        options={"gemini_api_key": "", "gemini_model": "gemini-3.6-flash"},
    )
    entry.add_to_hass(hass)
    with patch("custom_components.wine_cellar_manager.add_extra_js_url"):
        assert await hass.config_entries.async_setup(entry.entry_id)
        await hass.async_block_till_done()
    return entry


@pytest.fixture
async def ws(hass: HomeAssistant, entry, hass_ws_client):
    """Send a wine_cellar_manager command and return its result."""
    client = await hass_ws_client(hass)

    async def call(**msg):
        msg["type"] = f"{DOMAIN}/{msg['type']}"
        await client.send_json_auto_id(msg)
        reply = await client.receive_json()
        assert reply["success"], reply
        return reply["result"]

    return call
