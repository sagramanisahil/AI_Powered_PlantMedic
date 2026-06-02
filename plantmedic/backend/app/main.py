from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import ValidationError

from .schemas import ChatRequest, ChatResponse, PredictResponse
from .services.chatbot import ChatbotService
from .services.predictor import Predictor
from .settings import get_settings


def create_app() -> FastAPI:
  settings = get_settings()
  predictor = Predictor(settings["model_path"], settings["class_names_path"])
  chatbot = ChatbotService(settings["gemini_api_key"])

  app = FastAPI(
    title=settings["app_name"],
    version="1.0.0",
    description="FastAPI backend for LeafLens disease prediction and chat.",
  )

  app.add_middleware(
    CORSMiddleware,
    allow_origins=settings["allowed_origins"] or ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
  )

  @app.get("/health")
  def health():
    return {"ok": True, "app": "LeafLens API"}

  @app.post("/predict", response_model=PredictResponse)
  async def predict(file: UploadFile = File(...)):
    if file.content_type not in ("image/jpeg", "image/png", "image/jpg", "image/webp"):
      raise HTTPException(status_code=415, detail="Unsupported file type. Use PNG or JPEG.")

    data = await file.read()
    if not data:
      raise HTTPException(status_code=400, detail="Empty file.")

    if len(data) > settings["max_image_bytes"]:
      raise HTTPException(status_code=413, detail="File too large.")

    try:
      pred = predictor.predict_bytes(data)
    except Exception as exc:
      raise HTTPException(status_code=500, detail=f"Prediction failed: {exc}") from exc

    # If predictor returned an invalid-image sentinel, signal failure with a message
    if getattr(pred, "disease", "") == "invalid_image":
      return PredictResponse(
        disease="",
        disease_ur=None,
        confidence=0.0,
        health_percentage=0.0,
        treatment_en="",
        treatment_ur="",
        success=False,
        message="Invalid image. Please upload a clear image of a plant leaf only.",
      )

    return PredictResponse(
      disease=pred.disease,
      disease_ur=pred.disease_ur,
      confidence=float(pred.confidence),
      health_percentage=float(pred.health_percentage),
      treatment_en=pred.treatment_en,
      treatment_ur=pred.treatment_ur,
      success=True,
      message="",
    )

  @app.post("/chat", response_model=ChatResponse)
  async def chat(payload: ChatRequest):
    try:
      response = await chatbot.ask(payload.message, payload.context)
    except ValueError as exc:
      raise HTTPException(status_code=500, detail=str(exc)) from exc
    except ValidationError as exc:
      raise HTTPException(status_code=422, detail=str(exc)) from exc
    except Exception as exc:
      raise HTTPException(status_code=502, detail=f"Chat service error: {exc}") from exc
    return ChatResponse(response=response)

  return app


app = create_app()

