# LeafLens — AI-Powered Plant Disease Detection
> Empowering farmers across rural Pakistan with instant AI-driven crop disease diagnosis — in English and Urdu.
https://ai-powered-plant-medic.vercel.app/


## Problem Statement

Farmers in Sindh and Punjab, Pakistan face devastating crop losses due to four key challenges:

- Access Gap — Remote farmers have little or no access to agricultural experts for proper guidance.
- Late Detection — Diseases are often identified after they have already spread across the field.
- Knowledge Deficit — Farmers rely on traditional knowledge that may not cover modern or rare diseases.
- Language Barrier — Most treatment information is only available in English, inaccessible to Urdu-speaking farmers.

Without timely diagnosis, farmers resort to incorrect and expensive pesticide use, causing soil damage and huge economic losses for families who depend entirely on their harvests.

##  Proposed Solution

LEAFLENS is an AI-powered web platform that lets any farmer upload a photo of a diseased plant leaf and receive an instant diagnosis — no agricultural expert required.

Workflow:
1.Farmer uploads a photo of a plant leaf via mobile or web
2.Image is preprocessed using OpenCV and Pillow
3.MobileNetV2 model classifies the disease from 38 possible plant diseases
4.OpenAI API generates a step-by-step treatment guide in English and Urdu
5.Farmer takes immediate, informed action

The model was trained on over 54,000 images, enabling accurate disease classification within seconds.

##  Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Core Backend | Python | Backend logic and AI integration |
| Web Framework | FastAPI | API layer connecting frontend with model |
| AI & ML | TensorFlow, Keras | Training and running deep learning models |
| AI Model | MobileNetV2 | Plant disease classification from images |
| Pre-trained Weights | ImageNet | Transfer learning foundation |
| Image Processing | OpenCV, Pillow | Image resizing, cleaning, and formatting |
| Frontend | React | Interactive and user-friendly UI |
| Treatment Guide | OpenAI API | Bilingual treatment recommendations |

##  Results

-  Trained on 54,000+ labeled plant disease images**
-  Classifies 38 distinct plant diseases** across multiple crop types
-  Sub-second inference time per image
-  Bilingual output — English + Urdu
-  Fully deployed and live

##  Live Demo

 https://ai-powered-plant-medic.vercel.app/

Upload any plant leaf image to get an instant disease diagnosis and treatment guide.

---

## 🚀 How to Run

### Prerequisites
- Node.js (v18+)
- Python (3.10+)
- Git

### Clone the Repository
```bash
git clone https://github.com/your-username/AI_Powered_PlantMedic.git
cd AI_Powered_PlantMedic
```

### Run the Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at: `http://localhost:5173`

### Run the Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # macOS/Linux

pip install -r requirements.txt

# Add your OpenAI API key to .env
uvicorn main:app --reload
```
Backend runs at: `http://localhost:8000`  
API docs available at: `http://localhost:8000/docs`

---

## Team

| Name | Student ID |
|------|-----------|
| Tahreem Malik | 023-23-0113 |
| Sahil Kumar | 053-23-0055 |
| Batool Fatima | 023-23-0135 |
