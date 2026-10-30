"""Setup, reload, unload, and the change notifications."""
from __future__ import annotations

import json
from unittest.mock import patch

from homeassistant.components.websocket_api.const import DOMAIN as WS_DOMAIN
from homeassistant.config_entries import ConfigEntryState
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import HomeAssistantError
from pytest_homeassistant.common import MockConfigEntry

from .common import DOMAIN, add_cellar, save_bottle


async def test_websocket_commands(hass: HomeAssistant, entry) -> None:
    """Only the commands the card uses are registered."""
    commands = {key.split("/", 1)[1] for key in hass.data[WS_DOMAIN] if key.startswith(f"{DOMAIN}/")}
    assert commands == {
        "data",
        "save_cellar",
        "delete_cellar",
        "save_bottle",
        "consume_bottle",
        "restore_consumed_bottle",
        "delete_bottle",
        "move_bottle",
        "swap_bottles",
        "upload_label_image",
        "unified_analyze",
    }


async def test_service_survives_options_reload(hass: HomeAssistant, entry) -> None:
    """Changing the options reloads the entry; the service must stay."""
    assert hass.services.has_service(DOMAIN, "rebuild_ready")
    with patch("custom_components.wine_cellar_manager.add_extra_js_url"):
        hass.config_entries.async_update_entry(entry, options={**entry.options, "gemini_api_key": "k"})
        await hass.async_block_till_done()
    assert entry.state is ConfigEntryState.LOADED
    assert hass.services.has_service(DOMAIN, "rebuild_ready")


async def test_load_error_does_not_wipe_data(hass: HomeAssistant, dependencies, hass_storage) -> None:
    """A read error retries setup instead of starting empty and saving over the file."""
    stored = {
        "version": 2,
        "cellars": [{"id": "c", "name": "Keep me", "shelves": []}],
        "bottles": [],
        "consumed_bottles": [],
    }
    hass_storage[f"{DOMAIN}.data"] = {"version": 2, "minor_version": 1, "key": f"{DOMAIN}.data", "data": stored}
    entry = MockConfigEntry(domain=DOMAIN, unique_id=DOMAIN, data={"title": "C"}, options={})
    entry.add_to_hass(hass)
    with (
        patch("custom_components.wine_cellar_manager.add_extra_js_url"),
        patch("homeassistant.helpers.storage.Store.async_load", side_effect=HomeAssistantError("disk")),
    ):
        await hass.config_entries.async_setup(entry.entry_id)
        await hass.async_block_till_done()
    assert entry.state is ConfigEntryState.SETUP_RETRY
    assert hass_storage[f"{DOMAIN}.data"]["data"]["cellars"][0]["name"] == "Keep me"


async def test_ws_reports_unloaded_entry(hass: HomeAssistant, entry, hass_ws_client) -> None:
    client = await hass_ws_client(hass)
    await hass.config_entries.async_unload(entry.entry_id)
    await client.send_json_auto_id({"type": f"{DOMAIN}/data"})
    reply = await client.receive_json()
    assert not reply["success"]
    assert reply["error"]["code"] == "no_entry"


async def test_change_event_is_small_and_sensors_update(hass: HomeAssistant, ws) -> None:
    """The recorder stores event data, so the event must not carry the whole cellar."""
    events = []
    hass.bus.async_listen(f"{DOMAIN}_data_changed", events.append)
    cellar = await add_cellar(ws)
    await save_bottle(ws, cellar, 1, wine_name="A", notes="x" * 5000)
    await hass.async_block_till_done()
    assert events
    assert all(len(json.dumps(dict(event.data))) < 500 for event in events)
    states = {state.attributes.get("friendly_name"): state.state for state in hass.states.async_all("sensor")}
    assert states == {"Wine stock status": "1", "Total cellar capacity": "6"}
