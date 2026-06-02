from __future__ import annotations

import json
from io import BytesIO
from dataclasses import dataclass
from pathlib import Path

import numpy as np
from PIL import Image
# from tensorflow.keras.models import load_model
# Temporarily disabled for testing
import math
import numpy as np


@dataclass(frozen=True)
class Prediction:
  disease: str
  confidence: float
  health_percentage: float
  treatment_en: str
  treatment_ur: str
  disease_ur: str | None = None


class Predictor:
  def __init__(self, model_path: str, class_names_path: str) -> None:
    self.model_path = Path(model_path)
    self.class_names_path = Path(class_names_path)
    self.model = None
    self.class_names: list[str] = []
    self.input_size = (224, 224)
    self._load()

  def _load(self) -> None:
    if not self.class_names_path.exists():
      raise FileNotFoundError(f"Class names file not found: {self.class_names_path}")

    # Use mock model for testing
    self.model = None
    
    self.class_names = json.loads(self.class_names_path.read_text(encoding="utf-8"))
    if not isinstance(self.class_names, list) or not self.class_names:
      raise ValueError("class_names.json must contain a non-empty JSON array of labels.")

    # Use default input size for testing
    self.input_size = (224, 224)

  def _preprocess(self, image_bytes: bytes) -> np.ndarray:
    pil_image = Image.open(BytesIO(image_bytes)).convert("RGB")
    pil_image = pil_image.resize(self.input_size)
    arr = np.asarray(pil_image).astype("float32") / 255.0
    return np.expand_dims(arr, axis=0)

  # --- Validation helpers -------------------------------------------------
  def _is_empty(self, pil: Image.Image) -> bool:
    try:
      arr = np.asarray(pil)
    except Exception:
      return True
    return arr.size == 0

  def _blur_score(self, pil: Image.Image) -> float:
    """Estimate sharpness using simple gradient variance (higher = sharper).
    Returns a score in [0,1]."""
    gray = pil.convert("L")
    a = np.asarray(gray).astype("float32")
    # simple gradient magnitude
    gx = np.abs(np.diff(a, axis=1))
    gy = np.abs(np.diff(a, axis=0))
    # pad to same shape
    g = np.zeros_like(a)
    g[:, 1:] += gx
    g[1:, :] += gy
    score = np.var(g)
    # normalize roughly: tuned for common phone images
    return float(1.0 - (1.0 / (1.0 + score / 100.0))) if score >= 0 else 0.0

  def _green_ratio(self, pil: Image.Image) -> float:
    """Return fraction of pixels that fall within a green HSV window."""
    hsv = pil.convert("HSV")
    arr = np.asarray(hsv)
    if arr.size == 0:
      return 0.0
    h = arr[:, :, 0].astype("int")
    s = arr[:, :, 1].astype("int")
    v = arr[:, :, 2].astype("int")
    # Hue in PIL HSV is 0-255 where ~35-85 (degrees) maps to green
    low_h = int(35 / 360.0 * 255)
    high_h = int(85 / 360.0 * 255)
    mask = (h >= low_h) & (h <= high_h) & (s > 50) & (v > 30)
    return float(np.count_nonzero(mask) / (arr.shape[0] * arr.shape[1]))

  def _skin_ratio(self, pil: Image.Image) -> float:
    """Rudimentary skin-tone detector in RGB space. Returns fraction of pixels likely skin."""
    arr = np.asarray(pil.convert("RGB"))
    if arr.size == 0:
      return 0.0
    r = arr[:, :, 0].astype(int)
    g = arr[:, :, 1].astype(int)
    b = arr[:, :, 2].astype(int)
    # simple heuristic from common skin detection rules
    mask = (r > 95) & (g > 40) & (b > 20) & ((r - g) > 15) & (r > b)
    return float(np.count_nonzero(mask) / (arr.shape[0] * arr.shape[1]))

  def _edge_strength(self, pil: Image.Image) -> float:
    """Simple edge strength via local intensity differences. Returns [0,1]."""
    gray = pil.convert("L")
    a = np.asarray(gray).astype("float32")
    gx = np.abs(np.diff(a, axis=1))
    gy = np.abs(np.diff(a, axis=0))
    mag = np.sqrt((gx[:, :-0] if gx.size else gx)**2 + (gy[:-0, :] if gy.size else gy)**2)
    mean = float(np.mean(mag)) if mag.size else 0.0
    # normalize to a soft 0-1 range
    return float(1.0 - math.exp(-mean / 10.0))

  def _validate_leaf(self, image_bytes: bytes) -> tuple[bool, dict]:
    """Run a set of lightweight checks to decide if image likely contains a plant leaf.

    This is intentionally conservative (prefer false negatives over false positives):
    - image non-empty
    - not extremely blurry
    - contains a reasonable fraction of green pixels
    - has some edge structure (leaf contours)

    Returns (is_leaf, diagnostics)
    """
    try:
      pil = Image.open(BytesIO(image_bytes)).convert("RGB")
    except Exception as exc:
      return False, {"reason": "unreadable", "detail": str(exc)}

    if self._is_empty(pil):
      return False, {"reason": "empty"}

    green = self._green_ratio(pil)
    blur = self._blur_score(pil)
    edge = self._edge_strength(pil)
    skin = self._skin_ratio(pil)

    # Weighted score: green and edge matter most, blur contributes positively.
    score = 0.6 * min(1.0, green / 0.05) + 0.3 * edge + 0.1 * blur

    diagnostics = {"green_ratio": green, "blur_score": blur, "edge_strength": edge, "skin_ratio": skin, "score": score}

    # Reject quickly if skin or very low green detected
    if skin > 0.03:
      return False, {**diagnostics, "reason": "skin_detected"}

    # Require a minimum green presence OR strong leaf-like edges plus moderate green
    if green < 0.02:
      # if almost no green, reject (likely phone/person/background)
      return False, {**diagnostics, "reason": "low_green"}

    # Final conservative threshold: need score and edge to be reasonably high
    is_leaf = (score >= 0.55 and edge > 0.12 and blur > 0.06)
    if not is_leaf:
      return False, {**diagnostics, "reason": "below_threshold"}

    return True, diagnostics


  def predict_bytes(self, image_bytes: bytes) -> Prediction:
    # validate image contains a leaf before any prediction
    is_leaf, diag = self._validate_leaf(image_bytes)
    if not is_leaf:
      # Return a clear invalid-image response (frontend should show message)
      return Prediction(
        disease="invalid_image",
        disease_ur=None,
        confidence=0.0,
        health_percentage=0.0,
        treatment_en=("Invalid image. Please upload a clear image of a plant leaf only."),
        treatment_ur=("غلط تصویر۔ براہِ کرم صرف پودے کے پتے کی واضح تصویر اپ لوڈ کریں۔"),
      )

    # Use mock prediction for testing
    if self.model is None:
      # Mock prediction for testing
      label = "Apple___healthy" if len(self.class_names) > 0 else "test_disease"
      confidence = 0.85
      is_healthy = "healthy" in label.lower()
      # Health formula: healthy -> health ~= confidence; disease -> health reduced by severity
      if is_healthy:
        health_percentage = float(min(0.9999, confidence))
      else:
        severity = min(0.95, 0.2 + 0.8 * confidence)
        health_percentage = float(max(0.0, 1.0 - severity))
        # ensure health is not higher than model confidence (keeps values realistic)
        health_percentage = min(health_percentage, confidence)
      treatment_en, treatment_ur = self._build_treatment(label, is_healthy)

      return Prediction(
        disease=label,
        disease_ur=None,
        confidence=confidence,
        health_percentage=health_percentage,
        treatment_en=treatment_en,
        treatment_ur=treatment_ur,
      )

    batch = self._preprocess(image_bytes)
    preds = self.model.predict(batch, verbose=0)[0]
    class_index = int(np.argmax(preds))
    confidence = float(preds[class_index])
    label = self.class_names[class_index] if class_index < len(self.class_names) else f"class_{class_index}"
    is_healthy = "healthy" in label.lower()

    # Health calculation:
    # - If the model predicts a healthy leaf, health ~ model confidence (slightly capped below 100%).
    # - If a disease is predicted, estimate disease severity from confidence and reduce health accordingly.
    if is_healthy:
      health_percentage = float(min(0.9999, confidence))
    else:
      # severity in [0.2, 0.95] roughly proportional to confidence (more confident -> more certain disease)
      severity = min(0.95, 0.2 + 0.8 * confidence)
      health_percentage = float(max(0.0, 1.0 - severity))
      # keep health realistic relative to model confidence
      health_percentage = min(health_percentage, confidence)

    treatment_en, treatment_ur = self._build_treatment(label, is_healthy)

    return Prediction(
      disease=label,
      disease_ur=None,
      confidence=confidence,
      health_percentage=health_percentage,
      treatment_en=treatment_en,
      treatment_ur=treatment_ur,
    )

  def _build_treatment(self, label: str, is_healthy: bool) -> tuple[str, str]:
    readable = label.replace("___", " - ").replace("_", " ")
    if is_healthy:
      return (
        "Plant appears healthy.\n"
        "1) Continue regular watering and balanced fertilizer.\n"
        "2) Keep checking leaves weekly for early symptoms.\n"
        "3) Maintain field hygiene and good airflow.",
        "پودا صحت مند لگ رہا ہے۔\n"
        "1) باقاعدہ پانی اور متوازن کھاد جاری رکھیں۔\n"
        "2) ہر ہفتے پتوں کا معائنہ کریں۔\n"
        "3) کھیت کی صفائی اور ہوا کی اچھی گردش برقرار رکھیں۔",
      )

    return (
      f"Detected condition: {readable}\n"
      "1) Remove visibly affected leaves/parts.\n"
      "2) Avoid overhead watering; water near roots.\n"
      "3) Apply a crop-appropriate fungicide/pesticide as recommended locally.\n"
      "4) Re-scan after 3-5 days and consult an agriculture expert if symptoms spread.",
      f"تشخیص شدہ مسئلہ: {readable}\n"
      "1) متاثرہ پتے یا حصے فوری ہٹا دیں۔\n"
      "2) اوپر سے پانی دینے کے بجائے جڑ کے پاس پانی دیں۔\n"
      "3) مقامی سفارش کے مطابق مناسب فنگسائیڈ/ادویات استعمال کریں۔\n"
      "4) 3-5 دن بعد دوبارہ اسکین کریں، علامات بڑھیں تو زرعی ماہر سے رابطہ کریں۔",
    )

