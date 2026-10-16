"""Helpers shared by the tests."""
from __future__ import annotations

from pathlib import Path

DOMAIN = "wine_cellar_manager"
LABELS = "/local/wine_labels/"


async def add_cellar(ws) -> str:
    """Create a cellar with one six-bottle shelf "s1"; return its id."""
    await ws(type="save_cellar", name="C", shelves=[{"id": "s1", "capacity_front": 6}])
    data = await ws(type="data")
    return data["cellars"][0]["id"]


async def save_bottle(ws, cellar: str, position: int, **fields) -> dict:
    """Save a bottle at a front position of shelf "s1"; return it as stored."""
    await ws(type="save_bottle", cellar_id=cellar, shelf_id="s1", lane="front", position=position, **fields)
    data = await ws(type="data")
    return next(b for b in data["bottles"] if b["position"] == position)


def add_photo(labels_dir: Path, name: str) -> str:
    """Write a small JPEG-looking file, as if uploaded; return its URL."""
    (labels_dir / name).write_bytes(b"\xff\xd8\xff" + name.encode())
    return LABELS + name


def photo_exists(labels_dir: Path, url: str) -> bool:
    """Whether the file behind a /local/wine_labels/ URL is on disk."""
    return (labels_dir / url[len(LABELS):]).is_file()
