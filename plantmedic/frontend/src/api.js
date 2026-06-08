const DEFAULT_BASE = 'http://localhost:8000'

export const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'
export const GROQ_KEY = import.meta.env.VITE_GROQ_KEY || import.meta.env.VITE_GROQ_API

export function getApiBase() {
  const fromEnv = import.meta.env.VITE_API_BASE_URL
  if (fromEnv && typeof fromEnv === 'string' && fromEnv.trim()) {
    return fromEnv.replace(/\/$/, '')
  }
  return DEFAULT_BASE
}

/**
 * POST multipart image to /predict
 * @param {File|Blob} file
 * @returns {Promise<{ disease: string, confidence: number, treatment_en: string, treatment_ur: string }>}
 */
export async function predictLeafImage(file) {
  const base = getApiBase()
  const form = new FormData()
  // Must match FastAPI parameter name, e.g. `file: UploadFile = File(...)` → "file"
  form.append('file', file)

  const res = await fetch(`${base}/predict`, {
    method: 'POST',
    body: form,
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    const err = new Error(text || `HTTP ${res.status}`)
    err.status = res.status
    throw err
  }

  const data = await res.json()

  // Use backend-provided values where possible. Backend returns health as a fraction (0..1).
  const predictedClass = data.predicted_class || data.disease || 'Unknown';

  // Fix 1: Stop processing if the backend flagged it as a non-leaf real-world object
  if (predictedClass === 'invalid_image' || predictedClass === 'Invalid Image') {
    throw new Error(data.treatment_en || "Invalid image. Please upload a clear image of a plant leaf only.");
  }

  // Fix 2: Keep scores strictly as fractions (0.0 to 1.0) so components don't compound * 100
  let conf = typeof data.confidence === 'number' ? data.confidence : 0;
  if (conf > 1) conf = conf / 100; // Normalizer in case backend sporadically sends percentages
  conf = Math.min(1.0, Math.max(0.0, conf));

  const backendHealth = (typeof data.health_percentage === 'number') ? data.health_percentage : null;
  let healthPercentageValue = backendHealth !== null ? backendHealth : (predictedClass.toLowerCase().includes('healthy') ? conf : Math.max(0, 1 - conf));
  if (healthPercentageValue > 1) healthPercentageValue = healthPercentageValue / 100;
  healthPercentageValue = Math.min(1.0, Math.max(0.0, healthPercentageValue));

  // Map backend response to frontend expected format
  return {
    disease: predictedClass,
    confidence: conf,
    health_percentage: healthPercentageValue,
    treatment_en: data.treatment_en || generateTreatment(predictedClass),
    treatment_ur: data.treatment_ur || generateTreatmentUrdu(predictedClass),
    disease_ur: data.disease_ur || translateDiseaseToUrdu(predictedClass),
    success: data.success !== false,
    message: data.message || '',
    top_predictions: data.top_predictions || null
  }
}

// Generate treatment based on disease name
function generateTreatment(diseaseName) {
  const treatments = {
    'Apple___Apple_scab': '1. Remove infected leaves and fallen fruit\n2. Apply fungicide spray (copper-based or captan)\n3. Improve air circulation by proper pruning\n4. Apply preventive fungicide in early spring',
    'Apple___Black_rot': '1. Prune infected branches immediately\n2. Apply fungicide (myclobutanil or thiophanate-methyl)\n3. Remove mummified fruit from tree\n4. Sanitize pruning tools between cuts',
    'Apple___Cedar_apple_rust': '1. Apply fungicide before symptoms appear\n2. Remove nearby juniper trees if possible\n3. Apply sulfur-based fungicide during wet periods\n4. Improve air circulation around trees',
    'Apple___healthy': 'Your apple tree appears healthy. Continue with:\n1. Regular watering during dry periods\n2. Annual fertilization in spring\n3. Monitor for pest activity\n4. Prune dead or damaged branches',
    'Tomato___Early_blight': '1. Remove infected lower leaves\n2. Apply copper-based fungicide weekly\n3. Water at soil level, avoid splashing leaves\n4. Ensure good air circulation and mulching',
    'Tomato___Late_blight': '1. Remove infected plants immediately\n2. Apply fungicide (chlorothalonil or copper)\n3. Avoid overhead watering\n4. Improve ventilation and reduce humidity',
    'Tomato___healthy': 'Your tomato plant is healthy. Maintain with:\n1. Consistent watering at soil level\n2. Support with stakes or cages\n3. Regular fertilization\n4. Monitor for pests and diseases',
    'Strawberry___Leaf_scorch': '1. Remove infected leaves and plants\n2. Apply fungicide (iprodione or thiophanate-methyl)\n3. Improve air circulation\n4. Avoid overhead watering',
    'default': '1. Identify the specific disease correctly\n2. Remove infected plant parts\n3. Apply appropriate fungicide or pesticide\n4. Improve growing conditions and sanitation\n5. Consult local agricultural extension for specific guidance'
  }

  return treatments[diseaseName] || treatments.default
}

function generateTreatmentUrdu(diseaseName) {
  const treatmentsUr = {
    'Apple___Apple_scab': '1. متاثرہ پتے اور گرے ہوئے پھل ہٹائیں\n2. فنگسائیڈ اسپری کریں (کاپر بیسڈ یا کیپٹن)\n3) درست پرننگ سے ہوا کی گردش بہتر کریں\n4. بہار میں پیشگیرانہ فنگسائیڈ لگائیں',
    'Apple___Black_rot': '1. متاثرہ شاخیں فوری کاٹیں\n2. فنگسائیڈ لگائیں (مائیکلوبوٹینائل یا تیوفینیٹ میتھائل)\n3. درخت سے خشک پھل ہٹائیں\n4. کاٹنے کے اوزار کو سنائٹائز کریں',
    'Apple___healthy': 'آپ کا سیب کا درخت صحت مند ہے۔ جاری رکھیں:\n1. خشک دورانی میں باقاعدہ پانی\n2. بہار میں سالانہ کھاد\n3. کیڑوں کی سرگرمی کی نگرانی\n4. مرے ہوئے یا نقصان پہنچنے والی شاخیں کاٹیں',
    'default': '1. بیماری کو درست طور پر شناختی کریں\n2. متاثرہ پودوں کے حصے ہٹائیں\n3. موزوں فنگسائیڈ یا کیڑے مار دوا لگائیں\n4. اگنے کے حالات بہتر بنائیں\n5. مخصوص رہنمائی کے لیے مقامی زرعی توسیع سے رابطہ کریں'
  }

  return treatmentsUr[diseaseName] || treatmentsUr.default
}

// Format disease name to remove underscores and make it readable
function formatDiseaseName(name) {
  if (!name) return "Unknown"
  return name
    .replace(/___/g, ' - ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
}

function translateDiseaseToUrdu(diseaseName) {
  const translations = {
    'Apple___Apple_scab': 'سیب — سیب کی جُلن',
    'Apple___Black_rot': 'سیب — سیاہ سڑن',
    'Apple___Cedar_apple_rust': 'سیب — سیدار سیب زنگ',
    'Apple___healthy': 'سیب — صحت مند',
    'Tomato___Early_blight': 'ٹماٹر — پہلا بلائٹ',
    'Tomato___Late_blight': 'ٹماٹر — دیر سے بلائٹ',
    'Tomato___healthy': 'ٹماٹر — صحت مند',
    'Strawberry___Leaf_scorch': 'اسٹرابیری — پتے جلنا',
    'default': formatDiseaseName(diseaseName)
  }

  return translations[diseaseName] || translations.default
}

export { formatDiseaseName }

async function sendChatViaBackend(message, scanResult, history) {
  const base = getApiBase()
  const context = {}
  if (scanResult) {
    context.report = {
      disease: scanResult.disease || scanResult.predicted_class,
      confidence: scanResult.confidence,
      treatment_en: scanResult.treatment_en,
    }
  }
  if (history && Array.isArray(history)) {
    context.history = history.slice(-6).map((msg) => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: String(msg.content || msg.text || ''),
    }))
  }

  const res = await fetch(`${base}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: String(message), context }),
  })

  const data = await res.json().catch(() => null)
  if (!res.ok) {
    const detail = data?.detail || data?.message || `HTTP ${res.status}`
    throw new Error(typeof detail === 'string' ? detail : JSON.stringify(detail))
  }
  if (!data?.response) throw new Error('Empty response from chat service')
  return data.response
}

async function sendChatViaGroq(message, scanResult, history) {
  if (!GROQ_KEY) throw new Error('Chat API key not configured')

  const systemPrompt = scanResult
    ? `You are LeafLens AI Assistant, expert in plant diseases. 
       User scan result: Disease: ${scanResult.disease || scanResult.predicted_class}, 
       Confidence: ${scanResult.confidence}%. 
       Answer their questions professionally.`
    : `You are LeafLens AI Assistant specializing in plant diseases. 
       Help farmers identify and treat plant diseases. 
       Be friendly, clear and professional.`

  const messages = [{ role: 'system', content: systemPrompt }]

  if (history && Array.isArray(history)) {
    history.slice(-6).forEach((msg) => {
      messages.push({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: String(msg.content || msg.text || ''),
      })
    })
  }

  messages.push({ role: 'user', content: String(message) })

  const response = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GROQ_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      messages,
      max_tokens: 500,
      temperature: 0.7,
    }),
  })

  const data = await response.json().catch(() => null)
  if (!response.ok) {
    const msg = data?.error?.message || data?.message || `Chat API error: HTTP ${response.status}`
    throw new Error(msg)
  }
  if (data?.error) throw new Error(data.error.message)

  const text = data?.choices?.[0]?.message?.content
  if (!text) throw new Error('Empty response from chat provider')
  return text
}

function localChatFallback(message, scanResult) {
  const q = String(message || '').toLowerCase()
  if (scanResult?.disease) {
    const disease = scanResult.disease || scanResult.predicted_class
    const conf = typeof scanResult.confidence === 'number'
      ? Math.round(scanResult.confidence * (scanResult.confidence <= 1 ? 100 : 1))
      : scanResult.confidence
    const treatment = scanResult.treatment_en || 'Consult a local agricultural expert for treatment.'
    return (
      `Based on your recent scan (${disease}, ${conf}% confidence):\n\n` +
      `${treatment}\n\n` +
      `Ask me follow-up questions about watering, fertilizer, or prevention.`
    )
  }
  if (/(healthy|health|percentage|percent)/.test(q)) {
    return (
      'To check plant health, upload a clear leaf photo on the Diagnose page. ' +
      'LeafLens will show disease name, confidence, and a health score.'
    )
  }
  if (/(treatment|treat|medicine|spray|fertiliz)/.test(q)) {
    return (
      'For treatment advice, scan your leaf on the Diagnose page first. ' +
      'I can then explain the disease and suggest practical steps.'
    )
  }
  if (/(urdu|translate)/.test(q)) {
    return 'Use the English/Urdu toggle in the top navigation to switch the app language.'
  }
  return (
    "Assalam-o-Alaikum! I'm LeafLens AI. Upload a leaf image on Diagnose for disease detection, " +
    'or ask about watering, fertilizer, seasonal diseases, and crop care.'
  )
}

export const sendChatMessage = async (message, scanResult, history) => {
  try {
    return await sendChatViaBackend(message, scanResult, history)
  } catch (backendError) {
    console.warn('Backend chat failed, trying Groq fallback:', backendError.message)
    try {
      return await sendChatViaGroq(message, scanResult, history)
    } catch (groqError) {
      console.warn('Groq chat failed, using local fallback:', groqError.message)
      return localChatFallback(message, scanResult)
    }
  }
}

export async function chatWithLeafLens(message, context = {}) {
  try {
    const reply = await sendChatMessage(
      message,      // the message user typed
      context?.report,     // null if no scan done yet
      context?.history     // array of previous messages
    )
    return { response: reply }
  } catch (error) {
    console.error("Chat failed:", error)
    return { response: error.message || "Sorry, I could not respond right now. Please try again." }
  }
}
