"""Config and options flows."""
from __future__ import annotations

from unittest.mock import patch

from homeassistant.core import HomeAssistant
from homeassistant.data_entry_flow import FlowResultType

from .common import DOMAIN


async def test_user_flow_creates_entry(hass: HomeAssistant, dependencies) -> None:
    result = await hass.config_entries.flow.async_init(DOMAIN, context={"source": "user"})
    assert result["type"] is FlowResultType.FORM
    with patch("custom_components.wine_cellar_manager.async_setup_entry", return_value=True):
        result = await hass.config_entries.flow.async_configure(result["flow_id"], {"title": "  "})
    assert result["type"] is FlowResultType.CREATE_ENTRY
    assert result["title"] == "Wine Cellar Manager"
    assert result["options"] == {"gemini_api_key": "", "gemini_model": "gemini-3.6-flash"}


async def test_options_form_has_only_gemini_settings(hass: HomeAssistant, entry) -> None:
    result = await hass.config_entries.options.async_init(entry.entry_id)
    assert result["type"] is FlowResultType.FORM
    assert {str(key) for key in result["data_schema"].schema} == {"gemini_api_key", "gemini_model"}


async def test_api_key_can_be_cleared(hass: HomeAssistant, entry) -> None:
    hass.config_entries.async_update_entry(entry, options={**entry.options, "gemini_api_key": "old"})
    await hass.async_block_till_done()
    result = await hass.config_entries.options.async_init(entry.entry_id)
    # The frontend leaves an emptied optional field out of the submission.
    with patch("custom_components.wine_cellar_manager.add_extra_js_url"):
        result = await hass.config_entries.options.async_configure(
            result["flow_id"], {"gemini_model": "gemini-3.6-flash"}
        )
        await hass.async_block_till_done()
    assert result["type"] is FlowResultType.CREATE_ENTRY
    assert entry.options == {"gemini_api_key": "", "gemini_model": "gemini-3.6-flash"}
    assert hass.services.has_service(DOMAIN, "rebuild_ready")
