from __future__ import annotations

import logging

from homeassistant.core import HomeAssistant, ServiceCall

from .const import DOMAIN, SERVICE_REBUILD_READY

_LOGGER = logging.getLogger(__name__)

async def async_register_services(hass: HomeAssistant) -> None:
    """Register custom services for Wine Cellar Manager."""

    async def handle_rebuild_ready(call: ServiceCall) -> None:
        store = hass.data.get(DOMAIN, {}).get("store")
        if store is None:
            _LOGGER.warning("Cannot execute service: no configuration entry found.")
            return

        _LOGGER.debug("Wine Cellar Manager: drinking-window data rebuild started.")
        # "ready_to_drink" and "past_peak" are worked out for today's date each
        # time the card reads the data. Saving it unchanged sends the change
        # notifications (the sensors and the wine_cellar_manager_data_changed
        # event), so whatever listens refreshes. Under the store lock, like
        # every other save.
        await store.async_resave()

    hass.services.async_register(
        DOMAIN,
        SERVICE_REBUILD_READY,
        handle_rebuild_ready,
    )

