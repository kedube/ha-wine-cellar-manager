"""Wine Cellar Manager integration."""
from __future__ import annotations

import logging
from datetime import datetime, timedelta
from pathlib import Path

from homeassistant.components.frontend import add_extra_js_url
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import ConfigEntryNotReady
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.event import async_track_time_interval
from homeassistant.loader import async_get_integration

from .const import DOMAIN, PLATFORMS
from .services import async_register_services
from .storage import WineCellarStore, async_get_store
from .websocket_api import async_register_websockets

_LOGGER = logging.getLogger(__name__)

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)

ORPHAN_SWEEP_INTERVAL = timedelta(days=1)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the Wine Cellar Manager integration.

    Runs once per Home Assistant start. The websocket commands and the
    service stay registered while the entry is reloaded; they report an error
    when no entry is loaded.
    """
    hass.data.setdefault(DOMAIN, {})
    async_register_websockets(hass)
    await async_register_services(hass)
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Wine Cellar Manager from a config entry."""
    hass.data.setdefault(DOMAIN, {})

    store = async_get_store(hass)
    try:
        await store.async_get_cached()
    except Exception as err:
        # Retried later; starting empty would let the next change overwrite the data.
        raise ConfigEntryNotReady(f"Could not load the wine cellar data: {err}") from err

    hass.data[DOMAIN][entry.entry_id] = {"store": store, "entry": entry}

    if not hass.data[DOMAIN].get("frontend_registered"):
        frontend_dir = str(Path(__file__).parent / "frontend")
        await hass.http.async_register_static_paths(
            [
                StaticPathConfig(
                    "/wine-cellar-manager-frontend", frontend_dir, False
                )
            ]
        )
        # Load the card on every dashboard, so no Lovelace resource is needed.
        # The version query makes browsers fetch the new card after an update.
        integration = await async_get_integration(hass, DOMAIN)
        add_extra_js_url(
            hass,
            f"/wine-cellar-manager-frontend/wine-cellar-card.js?v={integration.version}",
        )
        hass.data[DOMAIN]["frontend_registered"] = True

    entry.async_on_unload(entry.add_update_listener(_async_update_listener))

    # Delete label photos that were uploaded but never saved with a bottle:
    # once now (in the background) and then daily.
    async def _async_sweep(_now: datetime | None = None) -> None:
        await _async_remove_orphan_images(store)

    entry.async_create_background_task(
        hass, _async_sweep(), f"{DOMAIN} unused label photo sweep"
    )
    entry.async_on_unload(
        async_track_time_interval(hass, _async_sweep, ORPHAN_SWEEP_INTERVAL)
    )

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    return True


async def _async_remove_orphan_images(store: WineCellarStore) -> None:
    """Delete unused label photos; a failure is logged, never raised."""
    try:
        removed = await store.async_remove_orphan_images()
    except Exception:
        _LOGGER.exception("Could not clean up unused label photos")
        return
    if removed:
        _LOGGER.debug("Deleted %s unused label photo(s)", removed)


async def _async_update_listener(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Reload the entry when its options change."""
    await hass.config_entries.async_reload(entry.entry_id)


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    unload_ok = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)

    if unload_ok and DOMAIN in hass.data:
        domain_data = hass.data[DOMAIN]
        entry_data = domain_data.pop(entry.entry_id, None) or {}

        # The Gemini client keeps a connection pool open until closed.
        if (client := entry_data.get("gemini_client")) is not None:
            await hass.async_add_executor_job(client.close)

        # When the last entry goes away, drop the shared store so a later
        # setup re-reads it from disk instead of using a stale cache.
        if not any(key not in {"store", "frontend_registered"} for key in domain_data):
            domain_data.pop("store", None)

    return unload_ok
