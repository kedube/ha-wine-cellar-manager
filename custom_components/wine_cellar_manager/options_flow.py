from __future__ import annotations

from typing import Any

import voluptuous as vol
from homeassistant.config_entries import OptionsFlow
from homeassistant.helpers.selector import (
    TextSelector,
    TextSelectorConfig,
    TextSelectorType,
)

from .const import (
    DEFAULT_GEMINI_API_KEY,
    DEFAULT_GEMINI_MODEL,
    OPTION_GEMINI_API_KEY,
    OPTION_GEMINI_MODEL,
)


class WineCellarManagerOptionsFlowHandler(OptionsFlow):
    async def async_step_init(self, user_input: dict[str, Any] | None = None):
        if user_input is not None:
            raw_key = str(user_input.get(OPTION_GEMINI_API_KEY, "") or "").strip()
            raw_model = str(
                user_input.get(OPTION_GEMINI_MODEL, DEFAULT_GEMINI_MODEL) or DEFAULT_GEMINI_MODEL
            ).strip()

            if "/" in raw_model or "googleapis.com" in raw_model:
                raw_model = DEFAULT_GEMINI_MODEL

            if "googleapis.com" in raw_key:
                raw_key = ""

            user_input[OPTION_GEMINI_API_KEY] = raw_key
            user_input[OPTION_GEMINI_MODEL] = raw_model or DEFAULT_GEMINI_MODEL

            return self.async_create_entry(data=user_input)

        schema = vol.Schema(
            {
                # A suggested value, not a default: a default would put the
                # old key back when the field is cleared.
                vol.Optional(
                    OPTION_GEMINI_API_KEY,
                    description={
                        "suggested_value": self.config_entry.options.get(
                            OPTION_GEMINI_API_KEY, DEFAULT_GEMINI_API_KEY
                        )
                    },
                ): TextSelector(TextSelectorConfig(type=TextSelectorType.PASSWORD)),
                vol.Required(
                    OPTION_GEMINI_MODEL,
                    default=self.config_entry.options.get(
                        OPTION_GEMINI_MODEL, DEFAULT_GEMINI_MODEL
                    ),
                ): str,
            }
        )

        return self.async_show_form(
            step_id="init",
            data_schema=schema,
        )
