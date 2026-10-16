DOMAIN = "wine_cellar_manager"

PLATFORMS = ["sensor"]

STORAGE_VERSION = 2
STORAGE_KEY = f"{DOMAIN}.data"

DEFAULT_TITLE = "Wine Cellar Manager"

OPTION_GEMINI_API_KEY = "gemini_api_key"
OPTION_GEMINI_MODEL = "gemini_model"

DEFAULT_GEMINI_API_KEY = ""
DEFAULT_GEMINI_MODEL = "gemini-3.6-flash"

WS_TYPE_GET_DATA = f"{DOMAIN}/data"
WS_TYPE_SAVE_CELLAR = f"{DOMAIN}/save_cellar"
WS_TYPE_DELETE_CELLAR = f"{DOMAIN}/delete_cellar"
WS_TYPE_SAVE_BOTTLE = f"{DOMAIN}/save_bottle"
WS_TYPE_DELETE_BOTTLE = f"{DOMAIN}/delete_bottle"
WS_TYPE_UPLOAD_LABEL_IMAGE = f"{DOMAIN}/upload_label_image"
WS_TYPE_MOVE_BOTTLE = f"{DOMAIN}/move_bottle"
WS_TYPE_CONSUME_BOTTLE = f"{DOMAIN}/consume_bottle"
WS_TYPE_RESTORE_BOTTLE = f"{DOMAIN}/restore_consumed_bottle"
WS_TYPE_UNIFIED_ANALYZE = f"{DOMAIN}/unified_analyze"
WS_TYPE_SWAP_BOTTLES = f"{DOMAIN}/swap_bottles"

SERVICE_REBUILD_READY = "rebuild_ready"

EVENT_DATA_CHANGED = "wine_cellar_manager_data_changed"
SIGNAL_DATA_CHANGED = f"{DOMAIN}_data_changed"

LANE_FRONT = "front"
LANE_BACK = "back"

LAYOUT_SINGLE = "single"
LAYOUT_STAGGERED = "staggered"

WINE_TYPES = {
    "unset",
    "red",
    "white",
    "rosé",
    "sparkling",
    "orange",
    "sweet",
    "other",
}
