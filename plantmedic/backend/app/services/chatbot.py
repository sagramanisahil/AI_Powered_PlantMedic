from __future__ import annotations

import httpx

SYSTEM_PROMPT = (
  "You are LeafLens AI Assistant, a helpful medical disease detection assistant. "
  "Help users understand their diagnosis results, explain diseases, suggest when to "
  "see a doctor, and guide users on how to use the LeafLens app."
)


class ChatbotService:
  def __init__(self, api_key: str) -> None:
    self.api_key = api_key
    self.model = "gemini-1.5-flash"
    self.base_url = (
      f"https://generativelanguage.googleapis.com/v1beta/models/{self.model}:generateContent"
    )

  async def ask(self, message: str, context: dict | None = None) -> str:
    context = context or {}
    contextual_message = self._compose_message(message, context)
    if not self.api_key:
      return self._fallback_response(contextual_message)

    payload = {
      "system_instruction": {"parts": [{"text": SYSTEM_PROMPT}]},
      "contents": [{"parts": [{"text": contextual_message}]}],
      "generationConfig": {"temperature": 0.4, "maxOutputTokens": 600},
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
      response = await client.post(
        self.base_url,
        params={"key": self.api_key},
        json=payload,
        headers={"Content-Type": "application/json"},
      )
      response.raise_for_status()
      data = response.json()

    candidates = data.get("candidates") or []
    if not candidates:
      return "I could not generate a response right now. Please try again."

    parts = candidates[0].get("content", {}).get("parts", [])
    text = " ".join(part.get("text", "").strip() for part in parts if part.get("text"))
    return text or self._fallback_response(contextual_message)

  def _fallback_response(self, message: str) -> str:
    q = (message or "").lower()
    if any(k in q for k in ["healthy", "health", "percentage", "percent"]):
      return (
        "To estimate health percentage, upload a clear leaf image in Diagnose. "
        "LeafLens will show confidence and health score. If the result says healthy, "
        "that confidence is your likely healthy percentage."
      )
    if any(k in q for k in ["treatment", "treat", "medicine", "spray"]):
      return (
        "For treatment, please upload the leaf image first. I will guide you based on "
        "the detected disease with practical steps and when to consult an expert."
      )
    return (
      "I am LeafLens AI Assistant. Please upload a leaf image in Diagnose for disease "
      "detection, treatment guidance, and health percentage."
    )

  def _compose_message(self, message: str, context: dict) -> str:
    report = context.get("report") if isinstance(context, dict) else None
    if not isinstance(report, dict):
      return message
    disease = report.get("disease", "Unknown")
    confidence = report.get("confidence", "N/A")
    health = report.get("health_percentage", "N/A")
    treatment = report.get("treatment_en", "")
    return (
      f"User question: {message}\n"
      f"Latest diagnosis report:\n"
      f"- disease: {disease}\n"
      f"- confidence: {confidence}\n"
      f"- health_percentage: {health}\n"
      f"- treatment: {treatment}\n"
      "Answer using this report."
    )
