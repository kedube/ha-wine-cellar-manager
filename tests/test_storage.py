"""Bottle data and shared label images, through the websocket commands."""
from __future__ import annotations

import asyncio
import os
import time
from pathlib import Path
from unittest.mock import patch

import pytest
from homeassistant.core import HomeAssistant, callback

from .common import DOMAIN, LABELS, add_cellar, add_photo, photo_exists, save_bottle


async def _raw(client, **msg) -> dict:
    """Send a command without asserting success; return the whole reply."""
    msg["type"] = f"{DOMAIN}/{msg['type']}"
    await client.send_json_auto_id(msg)
    return await client.receive_json()


def _age(path: Path, days: float) -> None:
    """Make a file look `days` old."""
    stamp = time.time() - days * 86400
    os.utime(path, (stamp, stamp))


async def test_editing_other_fields_keeps_image_file(hass: HomeAssistant, ws, labels_dir: Path) -> None:
    cellar = await add_cellar(ws)
    bottle = await save_bottle(ws, cellar, 1, wine_name="Margaux", producer="Ch", image_path=add_photo(labels_dir, "up.jpg"))
    path = bottle["image_path"]
    await save_bottle(ws, cellar, 1, bottle_id=bottle["id"], wine_name="Margaux", producer="Ch", image_path=path, notes="lovely")
    data = await ws(type="data")
    assert data["bottles"][0]["image_path"] == path, "an unchanged image must not be renamed on every edit"
    assert photo_exists(labels_dir, path)


async def test_renaming_into_a_twin_keeps_own_photo(hass: HomeAssistant, ws, labels_dir: Path) -> None:
    cellar = await add_cellar(ws)
    await save_bottle(ws, cellar, 1, wine_name="Margaux", producer="Ch", image_path=add_photo(labels_dir, "y.jpg"))
    x = await save_bottle(ws, cellar, 2, wine_name="Other", producer="Ch", image_path=add_photo(labels_dir, "x.jpg"))
    await save_bottle(ws, cellar, 2, bottle_id=x["id"], wine_name="Margaux", producer="Ch", image_path=x["image_path"])
    data = await ws(type="data")
    renamed = next(b for b in data["bottles"] if b["id"] == x["id"])
    assert renamed["image_path"] == x["image_path"]
    assert photo_exists(labels_dir, x["image_path"])


async def test_replacing_photo_of_a_shared_wine(hass: HomeAssistant, ws, labels_dir: Path) -> None:
    cellar = await add_cellar(ws)
    y = await save_bottle(ws, cellar, 1, wine_name="Margaux", producer="Ch", image_path=add_photo(labels_dir, "old.jpg"))
    z = await save_bottle(ws, cellar, 2, wine_name="Margaux", producer="Ch", image_path=y["image_path"])
    assert z["image_path"] == y["image_path"]
    new = add_photo(labels_dir, "better.jpg")
    await save_bottle(ws, cellar, 2, bottle_id=z["id"], wine_name="Margaux", producer="Ch", image_path=new)
    data = await ws(type="data")
    replaced = next(b for b in data["bottles"] if b["id"] == z["id"])
    assert replaced["image_path"] != y["image_path"], "a deliberately replaced photo must not revert to the twin's"
    assert photo_exists(labels_dir, replaced["image_path"])
    assert photo_exists(labels_dir, y["image_path"])


async def test_new_twin_shares_existing_image(hass: HomeAssistant, ws, labels_dir: Path) -> None:
    cellar = await add_cellar(ws)
    y = await save_bottle(ws, cellar, 1, wine_name="Margaux", producer="Ch", image_path=add_photo(labels_dir, "a.jpg"))
    duplicate = add_photo(labels_dir, "b.jpg")
    w = await save_bottle(ws, cellar, 2, wine_name="Margaux", producer="Ch", image_path=duplicate)
    assert w["image_path"] == y["image_path"]
    assert not photo_exists(labels_dir, duplicate)


async def test_deleting_a_bottle_keeps_a_shared_image(hass: HomeAssistant, ws, labels_dir: Path) -> None:
    cellar = await add_cellar(ws)
    y = await save_bottle(ws, cellar, 1, wine_name="Margaux", producer="Ch", image_path=add_photo(labels_dir, "a.jpg"))
    z = await save_bottle(ws, cellar, 2, wine_name="Margaux", producer="Ch", image_path=y["image_path"])
    await ws(type="delete_bottle", bottle_id=z["id"])
    assert photo_exists(labels_dir, y["image_path"])
    await ws(type="delete_bottle", bottle_id=y["id"])
    assert not photo_exists(labels_dir, y["image_path"])


async def test_get_data_with_huge_aging_window_is_fast(hass: HomeAssistant, ws) -> None:
    cellar = await add_cellar(ws)
    await save_bottle(ws, cellar, 1, wine_name="Forever", aging_start_year=1, aging_end_year=30_000_000)
    start = time.monotonic()
    data = await ws(type="data")
    assert time.monotonic() - start < 1.0
    assert set(data) == {"cellars", "bottles", "consumed_bottles"}


async def test_saving_a_consumed_bottle_does_not_bring_it_back(
    hass: HomeAssistant, ws, hass_ws_client
) -> None:
    """A second tab still shows the bottle and saves an edit after it was drunk."""
    cellar = await add_cellar(ws)
    bottle = await save_bottle(ws, cellar, 1, wine_name="Margaux")
    await ws(type="consume_bottle", bottle_id=bottle["id"])

    client = await hass_ws_client(hass)
    reply = await _raw(
        client, type="save_bottle", bottle_id=bottle["id"], cellar_id=cellar,
        shelf_id="s1", lane="front", position=1, wine_name="Margaux", notes="edited",
    )

    assert not reply["success"]
    assert reply["error"]["message"] == "Bottle not found", "the card translates this one"
    data = await ws(type="data")
    assert data["bottles"] == []
    assert len(data["consumed_bottles"]) == 1


@pytest.mark.parametrize(
    "shelves",
    [
        [{"id": "s1", "capacity_front": 10**9}],
        [{"id": "s1", "capacity_front": 6, "capacity_back": 201}],
        [{"id": "s1", "capacity_front": 6}, {"id": "s1", "capacity_front": 2}],
        ["s1"],
    ],
    ids=["huge-front", "huge-back", "duplicate-shelf-id", "not-an-object"],
)
async def test_save_cellar_rejects_unusable_shelves(
    hass: HomeAssistant, ws, hass_ws_client, shelves
) -> None:
    client = await hass_ws_client(hass)
    reply = await _raw(client, type="save_cellar", name="C", shelves=shelves)
    assert not reply["success"], f"stored {shelves!r}"
    assert (await ws(type="data"))["cellars"] == []


async def test_first_load_does_not_overwrite_a_concurrent_change(
    hass: HomeAssistant, labels_dir: Path
) -> None:
    """Two callers race the first load of a fresh store (as after a reload)."""
    from custom_components.wine_cellar_manager.storage import WineCellarStore

    seed = WineCellarStore(hass)
    await seed.async_save_cellar(None, "C", [{"id": "s1", "capacity_front": 6}])
    cellar = (await seed.async_get_cached())["cellars"][0]["id"]
    bottle_id = await seed.async_save_bottle(
        bottle_id=None, cellar_id=cellar, shelf_id="s1", lane="front",
        position=1, wine_name="X",
    )

    store = WineCellarStore(hass)
    real_load = store._store._async_load

    async def disk_read():  # a real load yields while the executor reads the file
        await asyncio.sleep(0)
        return await real_load()

    store._store._async_load = disk_read
    await asyncio.gather(store.async_consume_bottle(bottle_id), store.async_get_cached())

    cached = await store.async_get_cached()
    assert cached["bottles"] == [], "the stale first load replaced the consume in the cache"
    assert len(cached["consumed_bottles"]) == 1


async def test_delete_cellar_scans_bottles_once_and_keeps_shared_images(
    hass: HomeAssistant, ws, entry, labels_dir: Path
) -> None:
    store = hass.data[DOMAIN][entry.entry_id]["store"]
    gone = await add_cellar(ws)
    photos = []
    for pos in range(1, 7):
        bottle = await save_bottle(ws, gone, pos, wine_name=f"W{pos}",
                                   image_path=add_photo(labels_dir, f"p{pos}.jpg"))
        photos.append(bottle["image_path"])
    # A bottle in another cellar uses the first photo.
    await ws(type="save_cellar", name="Other", shelves=[{"id": "o1", "capacity_front": 2}])
    other = next(c["id"] for c in (await ws(type="data"))["cellars"] if c["name"] == "Other")
    await ws(type="save_bottle", cellar_id=other, shelf_id="o1", lane="front", position=1,
             wine_name="W1", image_path=photos[0])

    with patch.object(store, "_iter_all_bottles", wraps=store._iter_all_bottles) as scan:
        await ws(type="delete_cellar", cellar_id=gone)

    assert scan.call_count <= 2, f"{scan.call_count} full scans for 6 images"
    assert photo_exists(labels_dir, photos[0]), "another cellar still uses this photo"
    assert not any(photo_exists(labels_dir, photo) for photo in photos[1:])


async def test_editing_a_bottle_keeps_its_wine_year(hass: HomeAssistant, ws, entry) -> None:
    """wine_year is not in the card's save command; an edit must not wipe it."""
    store = hass.data[DOMAIN][entry.entry_id]["store"]
    cellar = await add_cellar(ws)
    bottle_id = await store.async_save_bottle(
        bottle_id=None, cellar_id=cellar, shelf_id="s1", lane="front",
        position=1, wine_name="Margaux", wine_year=2015,
    )
    await save_bottle(ws, cellar, 1, bottle_id=bottle_id, wine_name="Margaux", notes="lovely")
    stored = (await ws(type="data"))["bottles"][0]
    assert stored["notes"] == "lovely"
    assert stored["wine_year"] == 2015


async def test_unused_uploads_are_swept_after_a_day(
    hass: HomeAssistant, ws, entry, labels_dir: Path
) -> None:
    store = hass.data[DOMAIN][entry.entry_id]["store"]
    cellar = await add_cellar(ws)
    in_cellar = await save_bottle(ws, cellar, 1, wine_name="Kept",
                                  image_path=add_photo(labels_dir, "a_1700000000_00000001.jpg"))
    drunk = await save_bottle(ws, cellar, 2, wine_name="Drunk",
                              image_path=add_photo(labels_dir, "b_1700000000_00000002.jpg"))
    await ws(type="consume_bottle", bottle_id=drunk["id"])
    abandoned = add_photo(labels_dir, "c_1700000000_00000003.jpg")
    fresh = add_photo(labels_dir, "d_1700000000_00000004.jpg")
    not_ours = add_photo(labels_dir, "my_own_picture.jpg")
    for url in (in_cellar["image_path"], drunk["image_path"], abandoned, not_ours):
        _age(labels_dir / url[len(LABELS):], days=2)

    assert await store.async_remove_orphan_images() == 1

    assert not photo_exists(labels_dir, abandoned)
    for kept in (in_cellar["image_path"], drunk["image_path"], fresh, not_ours):
        assert photo_exists(labels_dir, kept), kept


async def test_failed_write_does_not_reveal_the_path(
    hass: HomeAssistant, ws, hass_ws_client, caplog
) -> None:
    client = await hass_ws_client(hass)
    disk_full = OSError(28, "No space left on device", "/srv/ha/www/wine_labels")
    with patch("os.makedirs", side_effect=disk_full):
        reply = await _raw(client, type="upload_label_image", filename="label.jpg",
                           data_base64="/9j/4AAQ")
    assert reply["error"]["message"] == "Could not save the image"
    assert "/srv/ha" in caplog.text, "the details still go to the log"


async def test_rebuild_ready_waits_for_a_change_in_progress(hass: HomeAssistant, entry) -> None:
    from homeassistant.helpers.dispatcher import async_dispatcher_connect

    store = hass.data[DOMAIN][entry.entry_id]["store"]
    saves = []

    # A @callback listener runs inline when the store sends the signal. A plain
    # callable (saves.append) would run in the executor and could land after
    # the asserts below.
    @callback
    def _on_save(payload) -> None:
        saves.append(payload)

    async_dispatcher_connect(hass, f"{DOMAIN}_data_changed", _on_save)
    async with store._lock:
        call = hass.async_create_task(
            hass.services.async_call(DOMAIN, "rebuild_ready", blocking=True)
        )
        for _ in range(5):
            await asyncio.sleep(0)
        assert not saves, "the service saved in the middle of another change"
    await call
    assert saves
