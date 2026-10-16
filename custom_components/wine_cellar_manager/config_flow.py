from __future__ import annotations

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback

from .const import (
    DEFAULT_GEMINI_API_KEY,
    DEFAULT_GEMINI_MODEL,
    DEFAULT_TITLE,
    DOMAIN,
    OPTION_GEMINI_API_KEY,
    OPTION_GEMINI_MODEL,
)
from .options_flow import WineCellarManagerOptionsFlowHandler


class WineCellarManagerConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    VERSION = 1
    MINOR_VERSION = 1

    async def async_step_user(self, user_input=None):
        await self.async_set_unique_id(DOMAIN)
        self._abort_if_unique_id_configured()

        if user_input is not None:
            title = user_input["title"].strip() or DEFAULT_TITLE
            return self.async_create_entry(
                title=title,
                data={"title": title},
                options={
                    OPTION_GEMINI_API_KEY: DEFAULT_GEMINI_API_KEY,
                    OPTION_GEMINI_MODEL: DEFAULT_GEMINI_MODEL,
                },
            )

        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema(
                {
                    vol.Required("title", default=DEFAULT_TITLE): str,
                }
            ),
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        return WineCellarManagerOptionsFlowHandler()
