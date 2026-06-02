/**
 * 38 disease classes aligned with typical PlantVillage-style crop disease datasets.
 * Display names match API-style labels the backend may return.
 */

export const diseases = [
  {
    id: 1,
    nameEn: 'Apple — Apple Scab',
    nameUr: 'سیب — سیب کی جُلن',
    plantEn: 'Apple',
    plantUr: 'سیب',
    descEn: 'Fungal spots on leaves and fruit; manage with sanitation and fungicides.',
    descUr: 'پتوں اور پھل پر فنگس کے دھبے؛ صفائی اور فنگی سائیڈ سے کنٹرول۔',
  },
  {
    id: 2,
    nameEn: 'Apple — Black Rot',
    nameUr: 'سیب — سیاہ سڑن',
    plantEn: 'Apple',
    plantUr: 'سیب',
    descEn: 'Causes frog-eye leaf spots and fruit rot; prune and apply timely sprays.',
    descUr: 'پتوں پر دھبے اور پھل سڑنا؛ چھانٹنا اور وقت پر سپرے۔',
  },
  {
    id: 3,
    nameEn: 'Apple — Cedar Apple Rust',
    nameUr: 'سیب — سیدار سیب زنگ',
    plantEn: 'Apple',
    plantUr: 'سیب',
    descEn: 'Orange spots on leaves; reduce juniper hosts nearby if possible.',
    descUr: 'پتوں پر نارنجی دھبے؛ ممکن ہو تو قریب جونیپر میزبان کم کریں۔',
  },
  {
    id: 4,
    nameEn: 'Apple — Healthy',
    nameUr: 'سیب — صحت مند',
    plantEn: 'Apple',
    plantUr: 'سیب',
    descEn: 'No disease signs detected for this leaf sample.',
    descUr: 'اس پتے کے نمونے میں بیماری کے نشان نہیں۔',
  },
  {
    id: 5,
    nameEn: 'Blueberry — Healthy',
    nameUr: 'بلو بیری — صحت مند',
    plantEn: 'Blueberry',
    plantUr: 'بلو بیری',
    descEn: 'Healthy blueberry foliage; maintain good drainage and mulch.',
    descUr: 'صحت مند بلو بیری پتے؛ نکاسی اور ملچ۔',
  },
  {
    id: 6,
    nameEn: 'Cherry — Powdery Mildew',
    nameUr: 'چیری — پاؤڈری میلڈیو',
    plantEn: 'Cherry',
    plantUr: 'چیری',
    descEn: 'White powdery fungus on leaves; improve airflow and use sulfur or fungicides.',
    descUr: 'پتوں پر سفید فنگس؛ ہوا اور فنگی سائیڈ۔',
  },
  {
    id: 7,
    nameEn: 'Cherry — Healthy',
    nameUr: 'چیری — صحت مند',
    plantEn: 'Cherry',
    plantUr: 'چیری',
    descEn: 'Healthy cherry leaves; continue regular monitoring.',
    descUr: 'صحت مند چیری پتے؛ نگرانی جاری رکھیں۔',
  },
  {
    id: 8,
    nameEn: 'Corn — Cercospora Leaf Spot',
    nameUr: 'مکئی — سرکوسپورا پتے دھبے',
    plantEn: 'Corn (maize)',
    plantUr: 'مکئی',
    descEn: 'Gray leaf spots; rotate crops and use resistant hybrids.',
    descUr: 'سرمئی دھبے؛ فصل چکر اور مزاحم ہائبرڈ۔',
  },
  {
    id: 9,
    nameEn: 'Corn — Common Rust',
    nameUr: 'مکئی — عام زنگ',
    plantEn: 'Corn (maize)',
    plantUr: 'مکئی',
    descEn: 'Rust pustules on leaves; fungicides if severe.',
    descUr: 'پتوں پر زنگ؛ شدید صورت میں فنگی سائیڈ۔',
  },
  {
    id: 10,
    nameEn: 'Corn — Northern Leaf Blight',
    nameUr: 'مکئی — شمالی پتا جلنا',
    plantEn: 'Corn (maize)',
    plantUr: 'مکئی',
    descEn: 'Long tan lesions; residue management and resistant varieties.',
    descUr: 'لمبے دھبے؛ باقیات کا انتظام اور مزاحم اقسام۔',
  },
  {
    id: 11,
    nameEn: 'Corn — Healthy',
    nameUr: 'مکئی — صحت مند',
    plantEn: 'Corn (maize)',
    plantUr: 'مکئی',
    descEn: 'Healthy maize foliage.',
    descUr: 'صحت مند مکئی پتے۔',
  },
  {
    id: 12,
    nameEn: 'Grape — Black Rot',
    nameUr: 'انگور — سیاہ سڑن',
    plantEn: 'Grape',
    plantUr: 'انگور',
    descEn: 'Fruit and leaf lesions; canopy management and fungicide sprays.',
    descUr: 'پھل اور پتوں پر دھبے؛ چھتری اور فنگی سپرے۔',
  },
  {
    id: 13,
    nameEn: 'Grape — Esca (Black Measles)',
    nameUr: 'انگور — ایسکا',
    plantEn: 'Grape',
    plantUr: 'انگور',
    descEn: 'Complex fungal disease; prune infected wood and avoid stress.',
    descUr: 'پچیدہ فنگس؛ متاثرہ لکڑی کاٹیں اور تناؤ کم کریں۔',
  },
  {
    id: 14,
    nameEn: 'Grape — Leaf Blight (Isariopsis)',
    nameUr: 'انگور — پتا جلنا',
    plantEn: 'Grape',
    plantUr: 'انگور',
    descEn: 'Brown irregular spots; fungicide programs per local extension.',
    descUr: 'بھورے دھبے؛ مقامی ہدایات کے مطابق فنگی سائڈ پروگرام۔',
  },
  {
    id: 15,
    nameEn: 'Grape — Healthy',
    nameUr: 'انگور — صحت مند',
    plantEn: 'Grape',
    plantUr: 'انگور',
    descEn: 'Healthy grapevine leaves.',
    descUr: 'صحت مند انگور کے پتے۔',
  },
  {
    id: 16,
    nameEn: 'Orange — Huanglongbing (Citrus Greening)',
    nameUr: 'کینو — ہنگ لانگ بنگ',
    plantEn: 'Orange / citrus',
    plantUr: 'کینو',
    descEn: 'Bacterial disease spread by psyllids; vector control is critical.',
    descUr: 'بیکٹیریل بیماری؛ کیڑے کا کنٹرول اہم ہے۔',
  },
  {
    id: 17,
    nameEn: 'Peach — Bacterial Spot',
    nameUr: 'آڑو — بیکٹیریل دھبے',
    plantEn: 'Peach',
    plantUr: 'آڑو',
    descEn: 'Angular spots on leaves; copper sprays and resistant cultivars.',
    descUr: 'پتوں پر دھبے؛ تانبے کے سپرے اور مزاحم قسمیں۔',
  },
  {
    id: 18,
    nameEn: 'Peach — Healthy',
    nameUr: 'آڑو — صحت مند',
    plantEn: 'Peach',
    plantUr: 'آڑو',
    descEn: 'Healthy peach foliage.',
    descUr: 'صحت مند آڑو پتے۔',
  },
  {
    id: 19,
    nameEn: 'Pepper (bell) — Bacterial Spot',
    nameUr: 'شملہ مرچ — بیکٹیریل دھبے',
    plantEn: 'Bell pepper',
    plantUr: 'شملہ مرچ',
    descEn: 'Water-soaked spots; avoid overhead irrigation; copper sprays.',
    descUr: 'پانی والے دھبے؛ اوپر سے پانی نہ دیں؛ تانبے کے سپرے۔',
  },
  {
    id: 20,
    nameEn: 'Pepper (bell) — Healthy',
    nameUr: 'شملہ مرچ — صحت مند',
    plantEn: 'Bell pepper',
    plantUr: 'شملہ مرچ',
    descEn: 'Healthy pepper plants.',
    descUr: 'صحت مند مرچ کے پودے۔',
  },
  {
    id: 21,
    nameEn: 'Potato — Early Blight',
    nameUr: 'آلو — ابتدائی جلن',
    plantEn: 'Potato',
    plantUr: 'آلو',
    descEn: 'Concentric rings on leaves; rotate crops and fungicides.',
    descUr: 'پتوں پر حلقے؛ فصل چکر اور فنگی سائڈ۔',
  },
  {
    id: 22,
    nameEn: 'Potato — Late Blight',
    nameUr: 'آلو — دیر کی جلن',
    plantEn: 'Potato',
    plantUr: 'آلو',
    descEn: 'Serious water mold; rapid spread; destroy infected tubers and foliage.',
    descUr: 'سنگین بیماری؛ متاثرہ حصے تباہ کریں۔',
  },
  {
    id: 23,
    nameEn: 'Potato — Healthy',
    nameUr: 'آلو — صحت مند',
    plantEn: 'Potato',
    plantUr: 'آلو',
    descEn: 'Healthy potato foliage.',
    descUr: 'صحت مند آلو کے پتے۔',
  },
  {
    id: 24,
    nameEn: 'Raspberry — Healthy',
    nameUr: 'رس بھری — صحت مند',
    plantEn: 'Raspberry',
    plantUr: 'رس بھری',
    descEn: 'Healthy raspberry canes and leaves.',
    descUr: 'صحت مند رس بھری۔',
  },
  {
    id: 25,
    nameEn: 'Soybean — Healthy',
    nameUr: 'سویابین — صحت مند',
    plantEn: 'Soybean',
    plantUr: 'سویابین',
    descEn: 'Healthy soybean foliage.',
    descUr: 'صحت مند سویابین پتے۔',
  },
  {
    id: 26,
    nameEn: 'Squash — Powdery Mildew',
    nameUr: 'کدو — پاؤڈری میلڈیو',
    plantEn: 'Squash',
    plantUr: 'کدو',
    descEn: 'White coating on leaves; sulfur, milk sprays, or fungicides.',
    descUr: 'پتوں پر سفید تہ؛ سلفر یا فنگی سائڈ۔',
  },
  {
    id: 27,
    nameEn: 'Strawberry — Leaf Scorch',
    nameUr: 'اسٹرابیری — پتا جلنا',
    plantEn: 'Strawberry',
    plantUr: 'اسٹرابیری',
    descEn: 'Fungal leaf spots; remove debris and use fungicides.',
    descUr: 'فنگس کے دھبے؛ ملبہ ہٹائیں اور فنگی سائڈ۔',
  },
  {
    id: 28,
    nameEn: 'Strawberry — Healthy',
    nameUr: 'اسٹرابیری — صحت مند',
    plantEn: 'Strawberry',
    plantUr: 'اسٹرابیری',
    descEn: 'Healthy strawberry leaves.',
    descUr: 'صحت مند اسٹرابیری پتے۔',
  },
  {
    id: 29,
    nameEn: 'Tomato — Bacterial Spot',
    nameUr: 'ٹماٹر — بیکٹیریل دھبے',
    plantEn: 'Tomato',
    plantUr: 'ٹماٹر',
    descEn: 'Small water-soaked spots; use clean seed and copper-based programs.',
    descUr: 'چھوٹے دھبے؛ صاف بیج اور تانبے پر مبنی پروگرام۔',
  },
  {
    id: 30,
    nameEn: 'Tomato — Early Blight',
    nameUr: 'ٹماٹر — ابتدائی جلن',
    plantEn: 'Tomato',
    plantUr: 'ٹماٹر',
    descEn: 'Target-like rings on lower leaves; mulch and fungicide rotation.',
    descUr: 'نیچے پتوں پر حلقے؛ ملچ اور فنگی سائڈ۔',
  },
  {
    id: 31,
    nameEn: 'Tomato — Late Blight',
    nameUr: 'ٹماٹر — دیر کی جلن',
    plantEn: 'Tomato',
    plantUr: 'ٹماٹر',
    descEn: 'Greasy dark spots; humid weather risk; remove infected plants.',
    descUr: 'گیلے دھبے؛ نمی میں خطرہ؛ متاثرہ پودے ہٹائیں۔',
  },
  {
    id: 32,
    nameEn: 'Tomato — Leaf Mold',
    nameUr: 'ٹماٹر — پتے کا فنگس',
    plantEn: 'Tomato',
    plantUr: 'ٹماٹر',
    descEn: 'Yellow patches with fuzzy mold on leaf undersides; ventilate greenhouses.',
    descUr: 'پتوں کے نیچے فنگس؛ وینٹیلیشن۔',
  },
  {
    id: 33,
    nameEn: 'Tomato — Septoria Leaf Spot',
    nameUr: 'ٹماٹر — سیپٹوریا دھبے',
    plantEn: 'Tomato',
    plantUr: 'ٹماٹر',
    descEn: 'Small circular spots with dark borders; remove lower leaves.',
    descUr: 'چھوٹے گول دھبے؛ نیچے پتے ہٹائیں۔',
  },
  {
    id: 34,
    nameEn: 'Tomato — Spider Mites (Two-spotted)',
    nameUr: 'ٹماٹر — مکڑی کے کیڑے',
    plantEn: 'Tomato',
    plantUr: 'ٹماٹر',
    descEn: 'Stippling and webbing; mites; horticultural oil or miticides.',
    descUr: 'دھبے اور جالے؛ تیل یا مائٹسائڈ۔',
  },
  {
    id: 35,
    nameEn: 'Tomato — Target Spot',
    nameUr: 'ٹماٹر — ہدف دھبے',
    plantEn: 'Tomato',
    plantUr: 'ٹماٹر',
    descEn: 'Dark spots with concentric rings; fungicides and crop rotation.',
    descUr: 'گہرے دھبے؛ فنگی سائڈ اور فصل چکر۔',
  },
  {
    id: 36,
    nameEn: 'Tomato — Yellow Leaf Curl Virus',
    nameUr: 'ٹماٹر — پیلے پتے کی جھلن وائرس',
    plantEn: 'Tomato',
    plantUr: 'ٹماٹر',
    descEn: 'Virus spread by whiteflies; resistant varieties and vector control.',
    descUr: 'وائرس؛ سفید مکھی کنٹرول اور مزاحم اقسام۔',
  },
  {
    id: 37,
    nameEn: 'Tomato — Mosaic Virus',
    nameUr: 'ٹماٹر — موزیک وائرس',
    plantEn: 'Tomato',
    plantUr: 'ٹماٹر',
    descEn: 'Mottled leaves; sanitize tools; remove infected plants.',
    descUr: 'دھبے دار پتے؛ اوزار صاف کریں؛ متاثرہ پودے ہٹائیں۔',
  },
  {
    id: 38,
    nameEn: 'Tomato — Healthy',
    nameUr: 'ٹماٹر — صحت مند',
    plantEn: 'Tomato',
    plantUr: 'ٹماٹر',
    descEn: 'Healthy tomato foliage — no disease pattern detected.',
    descUr: 'صحت مند ٹماٹر پتے — بیماری کا نمونہ نہیں۔',
  },
]

function norm(s) {
  return String(s)
    .toLowerCase()
    .replace(/[—–]/g, '-')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Match backend `disease` string to our reference row for Urdu labels when API omits `disease_ur`.
 * @param {string} label
 * @returns {(typeof diseases)[number] | null}
 */
export function findDiseaseByApiLabel(label) {
  if (!label || typeof label !== 'string') return null
  const n = norm(label)
  for (const d of diseases) {
    if (norm(d.nameEn) === n) return d
  }
  for (const d of diseases) {
    const part = d.nameEn.split(/[—-]/).map((x) => x.trim())
    const rest = part.slice(1).join(' ')
    if (rest && (n.includes(norm(rest)) || norm(rest).includes(n))) return d
  }
  for (const d of diseases) {
    if (n.includes(norm(d.plantEn)) && d.nameEn.toLowerCase().includes('healthy') && n.includes('healthy')) return d
  }
  return null
}
