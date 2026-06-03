from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import numpy as np
from PIL import Image
import io
import os
import json
import math
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

import tensorflow as tf
from tensorflow.keras.models import load_model

app = FastAPI(title="LeafLens API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─────────────────────────────────────────────
# HuggingFace: model lives in the bucket at /data/
# class_names.json lives in the repo root (same folder as main.py)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = "/data/plantmedic_final.h5" if os.path.exists("/data") else os.path.join(BASE_DIR, "plantmedic_final.h5")
CLASS_NAMES_PATH = os.path.join(BASE_DIR, "class_names.json")              # repo root (git file)

model = None

try:
    if os.path.exists(MODEL_PATH):
        model = load_model(MODEL_PATH)
        print(f"✅ Model loaded successfully from: {MODEL_PATH}")
        print(f"✅ Model input shape:  {model.input_shape}")
        print(f"✅ Model output shape: {model.output_shape}")
    else:
        print(f"❌ Model file not found at: {MODEL_PATH}")
        print("   Make sure plantmedic_final.h5 is uploaded to the Space storage bucket.")
except Exception as e:
    print(f"❌ Model loading error: {e}")
    model = None

# Load class names
CLASS_NAMES = []
try:
    if os.path.exists(CLASS_NAMES_PATH):
        with open(CLASS_NAMES_PATH, "r") as f:
            CLASS_NAMES = json.load(f)
        print(f"✅ Classes loaded: {len(CLASS_NAMES)} classes")
        print(f"✅ First 5 classes: {CLASS_NAMES[:5]}")
    else:
        print("❌ class_names.json not found")
        if model:
            num_classes = model.output_shape[-1]
            CLASS_NAMES = [f"Class_{i}" for i in range(num_classes)]
            print(f"📝 Generated {num_classes} generic class names")
except Exception as e:
    print(f"❌ Class names loading error: {e}")
    CLASS_NAMES = []


def preprocess_image(image_bytes):
    img = Image.open(io.BytesIO(image_bytes))
    img = img.convert("RGB")

    if model:
        input_shape = model.input_shape
        target_size = (input_shape[1], input_shape[2])
    else:
        target_size = (224, 224)

    img = img.resize(target_size)
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array


def validate_image_is_leaf(image_bytes: bytes) -> bool:
    """Lightweight checks to decide if the image likely contains a plant leaf."""
    try:
        pil = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        arr = np.asarray(pil)
        if arr.size == 0:
            return False

        # 1. Green ratio check (Hue 35-85)
        hsv = pil.convert("HSV")
        arr_hsv = np.asarray(hsv)
        h = arr_hsv[:, :, 0].astype("int")
        s = arr_hsv[:, :, 1].astype("int")
        v = arr_hsv[:, :, 2].astype("int")
        low_h  = int(35 / 360.0 * 255)
        high_h = int(85 / 360.0 * 255)
        green_mask  = (h >= low_h) & (h <= high_h) & (s > 50) & (v > 30)
        green_ratio = float(np.count_nonzero(green_mask) /
                            (arr_hsv.shape[0] * arr_hsv.shape[1]))

        # 2. Skin ratio check
        r    = arr[:, :, 0].astype(int)
        g_ch = arr[:, :, 1].astype(int)
        b    = arr[:, :, 2].astype(int)
        skin_mask  = (r > 95) & (g_ch > 40) & (b > 20) & ((r - g_ch) > 15) & (r > b)
        skin_ratio = float(np.count_nonzero(skin_mask) /
                           (arr.shape[0] * arr.shape[1]))

        if skin_ratio > 0.05 or green_ratio < 0.015:
            return False

        # 3. Blur & Edge calculation
        gray = pil.convert("L")
        a  = np.asarray(gray).astype("float32")
        gx = np.abs(np.diff(a, axis=1))
        gy = np.abs(np.diff(a, axis=0))

        gx_pad = np.pad(gx, ((0, 0), (0, 1)), mode='constant')
        gy_pad = np.pad(gy, ((0, 1), (0, 0)), mode='constant')

        g          = gx_pad + gy_pad
        score      = np.var(g)
        blur_score = float(1.0 - (1.0 / (1.0 + score / 100.0))) if score >= 0 else 0.0

        mag            = np.sqrt(gx_pad**2 + gy_pad**2)
        mean_mag       = float(np.mean(mag)) if mag.size else 0.0
        edge_strength  = float(1.0 - math.exp(-mean_mag / 10.0))

        weighted_score = (0.6 * min(1.0, green_ratio / 0.05)
                          + 0.3 * edge_strength
                          + 0.1 * blur_score)
        return weighted_score >= 0.55 and edge_strength > 0.12 and blur_score > 0.06

    except Exception:
        return False


# ─────────────────────────────────────────────
# Routes
# ─────────────────────────────────────────────

@app.get("/")
async def root():
    return {
        "status": "LeafLens API is running",
        "model_loaded": model is not None,
        "model_path": MODEL_PATH,
        "classes": CLASS_NAMES[:10],
        "total_classes": len(CLASS_NAMES),
        "tensorflow_version": tf.__version__,
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "model_loaded": model is not None,
        "tensorflow_version": tf.__version__,
        "model_path": MODEL_PATH,
        "total_classes": len(CLASS_NAMES),
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if model is None:
        raise HTTPException(status_code=503,
                            detail="Model not loaded. Check server logs.")

    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400,
                            detail="Please upload an image file.")

    try:
        image_bytes = await file.read()

        if not validate_image_is_leaf(image_bytes):
            return JSONResponse({
                "success": False,
                "predicted_class": "invalid_image",
                "confidence": 0.0,
                "treatment_en": "Invalid image. Please upload a clear image of a plant leaf only.",
            })

        img_array    = preprocess_image(image_bytes)
        predictions  = model.predict(img_array)
        pred_index   = int(np.argmax(predictions[0]))
        confidence   = float(np.max(predictions[0])) * 100

        predicted_class = (CLASS_NAMES[pred_index]
                           if CLASS_NAMES and pred_index < len(CLASS_NAMES)
                           else f"Class_{pred_index}")

        top_indices = np.argsort(predictions[0])[::-1][:3]
        top_predictions = [
            {
                "class": (CLASS_NAMES[idx]
                          if CLASS_NAMES and idx < len(CLASS_NAMES)
                          else f"Class_{idx}"),
                "confidence": round(float(predictions[0][idx]) * 100, 2),
            }
            for idx in top_indices
        ]

        return JSONResponse({
            "success": True,
            "predicted_class": predicted_class,
            "confidence": round(confidence, 2),
            "top_predictions": top_predictions,
            "message": f"Detected: {predicted_class} with {round(confidence, 2)}% confidence",
        })

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")


@app.post("/predict/base64")
async def predict_base64(data: dict):
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded.")

    try:
        import base64
        image_data = data.get("image", "")
        if "base64," in image_data:
            image_data = image_data.split("base64,")[1]

        image_bytes = base64.b64decode(image_data)

        if not validate_image_is_leaf(image_bytes):
            return JSONResponse({
                "success": False,
                "predicted_class": "invalid_image",
                "confidence": 0.0,
                "treatment_en": "Invalid image. Please upload a clear image of a plant leaf only.",
            })

        img_array   = preprocess_image(image_bytes)
        predictions = model.predict(img_array)
        pred_index  = int(np.argmax(predictions[0]))
        confidence  = float(np.max(predictions[0])) * 100

        predicted_class = (CLASS_NAMES[pred_index]
                           if CLASS_NAMES and pred_index < len(CLASS_NAMES)
                           else f"Class_{pred_index}")

        return JSONResponse({
            "success": True,
            "predicted_class": predicted_class,
            "confidence": round(confidence, 2),
            "message": f"Detected: {predicted_class} with {round(confidence, 2)}% confidence",
        })

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    # HuggingFace Spaces exposes port 7860 by default
    uvicorn.run(app, host="0.0.0.0", port=7860)