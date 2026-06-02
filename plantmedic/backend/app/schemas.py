from pydantic import BaseModel, Field


class PredictResponse(BaseModel):
  disease: str = Field(..., examples=["Tomato___Late_blight"])
  confidence: float = Field(..., ge=0.0, le=1.0, examples=[0.86])
  health_percentage: float = Field(..., ge=0.0, le=1.0, examples=[0.72])
  treatment_en: str = ""
  treatment_ur: str = ""
  disease_ur: str | None = None
  # Indicates whether prediction was successful (leaf detected and model ran)
  success: bool = True
  # Optional human-readable message (e.g. validation errors)
  message: str = ""


class ChatRequest(BaseModel):
  message: str = Field(..., min_length=1, max_length=4000)
  context: dict = Field(default_factory=dict)


class ChatResponse(BaseModel):
  response: str

