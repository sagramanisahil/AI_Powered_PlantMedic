# LeafLens (Frontend + FastAPI Backend)

This repo is organized as a simple monorepo:

- `frontend/` — React + Vite + Tailwind
- `backend/` — FastAPI (`/predict`, `/health`, `/chat`)
- `scripts/` — helper scripts (sync disease classes)

## Run (recommended dev flow)

### 1) Start backend (FastAPI)

```powershell
cd leaflens\backend
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload --port 8000
```

Backend endpoints:

- `GET http://127.0.0.1:8000/health`
- `POST http://127.0.0.1:8000/predict` (multipart form-data, field: `file`)
- `POST http://127.0.0.1:8000/chat` (JSON body: `{ "message": "..." }`)

### 2) Start frontend (Vite)

```powershell
cd leaflens\frontend
npm install
npm run dev
```

Optional env:

- Copy `frontend\.env.example` → `frontend\.env` and set `VITE_API_BASE_URL` if needed.

## Environment setup

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

Frontend can use:

```env
VITE_API_BASE_URL=http://localhost:8000
```

