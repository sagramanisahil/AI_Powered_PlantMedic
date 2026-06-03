<!-- # LeafLens Backend (FastAPI)

This backend matches the frontend contract used in `src/api.js`.

## Endpoints

- `GET /health` → `{ ok: true, app: "LeafLens API" }`
- `POST /predict` (multipart form-data, field name: `file`) → JSON:
  - `disease` (string)
  - `confidence` (0..1)
  - `treatment_en` (string)
  - `treatment_ur` (string)
  - `disease_ur` (optional string)
- `POST /chat` (JSON: `{ "message": "..." }`) → `{ "response": "..." }`

## Run locally

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

## Frontend connection

Frontend default API base is `http://localhost:8000`.
Optionally set this in frontend:

```bash
VITE_API_BASE_URL=http://localhost:8000
```

## Env configuration

Create `backend/.env`:

```env
PORT=8000
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5174
MAX_IMAGE_MB=10
MODEL_PATH=model.h5
CLASS_NAMES_PATH=class_names.json
# Get free API key from: https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your_key_here
```
 -->

---
title: AI Powered PlantMedic
emoji: 🌿
colorFrom: green
colorTo: blue
sdk: docker
pinned: false
---