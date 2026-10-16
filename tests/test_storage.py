"""Bottle data and shared label images, through the websocket commands."""
from __future__ import annotations

import time
from pathlib import Path

from homeassistant.core import HomeAssistant

from .common import add_cellar, add_photo, photo_exists, save_bottle


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
