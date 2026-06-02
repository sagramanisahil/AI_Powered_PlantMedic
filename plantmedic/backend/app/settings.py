import os
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()


def _getenv(name: str, default: str | None = None) -> str | None:
  value = os.getenv(name)
  if value is None:
    return default
  value = value.strip()
  return value if value else default


def get_settings() -> dict:
  backend_root = Path(__file__).resolve().parents[1]
  port = int(_getenv("PORT", "8000") or "8000")
  origins_raw = _getenv("ALLOWED_ORIGINS", "http://localhost:5173,http://localhost:5174") or ""
  allowed_origins = [origin.strip() for origin in origins_raw.split(",") if origin.strip()]
  max_image_mb = int(_getenv("MAX_IMAGE_MB", "10") or "10")

  model_path = _getenv("MODEL_PATH")
  if model_path:
    model_path = str((backend_root / model_path).resolve()) if not Path(model_path).is_absolute() else model_path
  else:
    default_model = backend_root / "model.h5"
    fallback_model = backend_root / "leaflens_final.h5"
    model_path = str(default_model if default_model.exists() else fallback_model)

  class_names_path = _getenv("CLASS_NAMES_PATH")
  if class_names_path:
    class_names_path = (
      str((backend_root / class_names_path).resolve()) if not Path(class_names_path).is_absolute() else class_names_path
    )
  else:
    class_names_path = str(backend_root / "class_names.json")

  return {
    "app_name": "LeafLens API",
    "port": port,
    "allowed_origins": allowed_origins,
    "max_image_bytes": max(1, max_image_mb) * 1024 * 1024,
    "model_path": model_path,
    "class_names_path": class_names_path,
    "gemini_api_key": _getenv("GEMINI_API_KEY", ""),
  }

