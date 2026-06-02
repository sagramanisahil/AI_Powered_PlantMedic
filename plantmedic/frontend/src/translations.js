/**
 * Bilingual UI strings for LeafLens (English / Urdu).
 * Urdu uses Unicode; layout direction is handled via dir="rtl" when language is Urdu.
 */

export const translations = {
  // Nav
  navHome: { en: 'Home', ur: 'ہوم' },
  navDiagnose: { en: 'Diagnose', ur: 'تشخیص' },
  navAbout: { en: 'About', ur: 'تعارف' },
  navDiseases: { en: 'Diseases', ur: 'بیماریاں' },

  // Landing
  heroTaglineEn: {
    en: 'AI-powered crop health for every field.',
    ur: 'ہر کھیت کے لیے AI سے چلنے والی فصل کی صحت۔',
  },
  heroTaglineUr: {
    en: 'Detect diseases from a leaf photo — in English and Urdu.',
    ur: 'پتے کی تصویر سے بیماریوں کا پتہ لگائیں — اردو اور انگریزی میں۔',
  },
  heroIntro: {
    en: 'Snap a clear leaf photo, upload it, and get an easy treatment guide in English or اردو — designed for quick decisions in the field.',
    ur: 'پتے کی واضح تصویر لیں، اپ لوڈ کریں، اور اردو یا انگریزی میں آسان علاج کی رہنمائی حاصل کریں — کھیت میں فوری فیصلوں کے لیے۔',
  },
  ctaDiagnose: { en: 'Diagnose Your Plant', ur: 'اپنے پودے کی تشخیص کریں' },
  ctaSecondary: { en: 'Browse diseases', ur: 'بیماریاں دیکھیں' },
  homeTrustLine: {
    en: 'Built for growers in Pakistan. Works best with good daylight photos.',
    ur: 'پاکستان کے کاشتکاروں کے لیے تیار کیا گیا۔ دن کی روشنی میں واضح تصویر کے ساتھ بہتر کام کرتا ہے۔',
  },
  homeFeatureTitle: { en: 'Made for real farms', ur: 'کھیت کے لیے بنایا گیا' },
  homeFeatureSubtitle: {
    en: 'A clean, bilingual experience that helps you act faster — from photo to treatment in minutes.',
    ur: 'ایک سادہ اور دو لسانی تجربہ جو آپ کو تیزی سے قدم اٹھانے میں مدد دے — تصویر سے علاج تک چند منٹ میں۔',
  },
  featureFastTitle: { en: 'Fast diagnosis', ur: 'تیز تشخیص' },
  featureFastDesc: {
    en: 'Upload a photo and get results in seconds (depending on network).',
    ur: 'تصویر اپ لوڈ کریں اور چند سیکنڈ میں نتیجہ حاصل کریں (نیٹ ورک کے مطابق)۔',
  },
  featureBilingualTitle: { en: 'English + Urdu', ur: 'انگریزی + اردو' },
  featureBilingualDesc: {
    en: 'Treatments are readable for everyone — not just English speakers.',
    ur: 'علاج کی رہنمائی ہر کسی کے لیے قابل فہم — صرف انگریزی والوں کے لیے نہیں۔',
  },
  featurePracticalTitle: { en: 'Practical guidance', ur: 'عملی رہنمائی' },
  featurePracticalDesc: {
    en: 'Step-by-step treatment text you can apply on the farm.',
    ur: 'مرحلہ وار علاج کی ہدایات جو آپ کھیت میں استعمال کر سکیں۔',
  },
  homeUseTitle: { en: 'When to use LeafLens', ur: 'LeafLens کب استعمال کریں' },
  homeUse1: { en: 'Spots, yellowing, or unusual patterns on leaves', ur: 'پتوں پر دھبے، زردی، یا غیر معمولی نشان' },
  homeUse2: { en: 'Before spraying — to reduce guesswork', ur: 'اسپرے سے پہلے — تاکہ اندازے کم ہوں' },
  homeUse3: { en: 'To compare symptoms across plants quickly', ur: 'پودوں میں علامات کا جلدی موازنہ کرنے کے لیے' },
  homeNoteTitle: { en: 'A quick note', ur: 'ایک اہم بات' },
  homeNoteDesc: {
    en: 'AI is a helper — always double-check with local experts if symptoms are severe or spreading quickly.',
    ur: 'AI مددگار ہے — اگر علامات شدید ہوں یا تیزی سے پھیل رہی ہوں تو مقامی ماہرین سے ضرور مشورہ کریں۔',
  },
  statsDiseases: { en: '38 Diseases Detected', ur: '۳۸ بیماریوں کا پتہ' },
  statsImages: { en: '54,000+ Training Images', ur: '۵۴٬۰۰۰+ تربیتی تصاویر' },
  statsInstant: { en: 'Instant Results', ur: 'فوری نتائج' },
  howItWorksTitle: { en: 'How It Works', ur: 'یہ کیسے کام کرتا ہے' },
  step1Title: { en: 'Upload Photo', ur: 'تصویر اپ لوڈ' },
  step1Desc: {
    en: 'Take a clear picture of an affected leaf in daylight.',
    ur: 'متاثرہ پتے کی دن کی روشنی میں واضح تصویر لیں۔',
  },
  step2Title: { en: 'AI Analysis', ur: 'AI تجزیہ' },
  step2Desc: {
    en: 'MobileNetV2 classifies your image among 38 plant diseases.',
    ur: 'MobileNetV2 آپ کی تصویر کو ۳۸ پودوں کی بیماریوں میں درجہ بندی کرتا ہے۔',
  },
  step3Title: { en: 'Get Treatment', ur: 'علاج حاصل کریں' },
  step3Desc: {
    en: 'See the disease name, confidence, and step-by-step care advice.',
    ur: 'بیماری کا نام، یقین کی سطح، اور مرحلہ وار دیکھ بھال کی ہدایات دیکھیں۔',
  },
  footerText: {
    en: 'LeafLens — supporting farmers in rural Sindh & Punjab, Pakistan.',
    ur: 'لیف لینز — پاکستان کے دیہی سندھ اور پنجاب کے کسانوں کی مدد۔',
  },

  // Diagnose
  diagnoseTitle: { en: 'Leaf Diagnosis', ur: 'پتے کی تشخیص' },
  diagnoseSubtitle: {
    en: 'Upload a leaf image for AI analysis.',
    ur: 'AI تجزیے کے لیے پتے کی تصویر اپ لوڈ کریں۔',
  },
  dropzoneIdle: {
    en: 'Drag & drop a leaf image here, or tap to browse',
    ur: 'پتے کی تصویر یہاں چھوڑیں، یا براؤز کرنے کے لیے ٹیپ کریں',
  },
  dropzoneHint: {
    en: 'PNG, JPG up to ~10 MB',
    ur: 'PNG، JPG تقریباً ۱۰ MB تک',
  },
  dropzoneTip: {
    en: 'Tip: For best results, use a clear leaf photo in daylight.',
    ur: 'مشورہ: بہترین نتائج کے لیے دن کی روشنی میں پتے کی واضح تصویر استعمال کریں۔',
  },
  changeImage: { en: 'Change image', ur: 'تصویر بدلیں' },
  analyze: { en: 'Analyze', ur: 'تجزیہ کریں' },
  analyzing: { en: 'Analyzing…', ur: 'تجزیہ ہو رہا ہے…' },
  errNoImage: {
    en: 'Please upload a valid leaf image before analyzing.',
    ur: 'تجزیے سے پہلے براہ کرم درست پتے کی تصویر اپ لوڈ کریں۔',
  },
  errInvalidType: {
    en: 'Please use a PNG or JPEG image.',
    ur: 'براہ کرم PNG یا JPEG تصویر استعمال کریں۔',
  },
  errFileTooLarge: {
    en: 'This image is too large. Please upload an image up to 10 MB.',
    ur: 'یہ تصویر بہت بڑی ہے۔ براہ کرم ۱۰ MB تک کی تصویر اپ لوڈ کریں۔',
  },
  errNetwork: {
    en: 'Could not reach the server. Is the API running at ',
    ur: 'سرور تک رسائی نہیں ہو سکی۔ کیا API چل رہی ہے ',
  },
  errGeneric: {
    en: 'Something went wrong. Please try again.',
    ur: 'کچھ غلط ہو گیا۔ دوبارہ کوشش کریں۔',
  },
  resultTitle: { en: 'Results', ur: 'نتائج' },
  resultIdle: {
    en: 'Results will appear here after analysis.',
    ur: 'تجزیے کے بعد نتائج یہاں دکھائے جائیں گے۔',
  },
  detectedLabel: { en: 'Detected condition', ur: 'پتہ چلا حال' },
  confidenceLabel: { en: 'Confidence', ur: 'یقین' },
  treatmentLabel: { en: 'Treatment guide', ur: 'علاج کی رہنمائی' },
  uploadAnother: { en: 'Upload another image', ur: 'ایک اور تصویر اپ لوڈ کریں' },
  langEnglish: { en: 'English', ur: 'English' },
  langUrdu: { en: 'Urdu', ur: 'اردو' },

  // About
  aboutTitle: { en: 'About LeafLens', ur: 'لیف لینز کے بارے میں' },
  aboutSubtitle: {
    en: 'A bilingual tool to help farmers spot plant diseases earlier and act with clearer guidance.',
    ur: 'کسانوں کے لیے ایک دو لسانی ٹول جو پودوں کی بیماریوں کا جلد پتہ لگانے اور بہتر رہنمائی کے ساتھ قدم اٹھانے میں مدد دے۔',
  },
  aboutMissionTitle: { en: 'Our mission', ur: 'ہمارا مقصد' },
  aboutMissionDesc: {
    en: 'Make crop-care knowledge more accessible by turning a leaf photo into a simple result and an easy treatment guide — in English and Urdu.',
    ur: 'فصلوں کی دیکھ بھال کا علم زیادہ قابلِ رسائی بنانا: پتے کی تصویر کو سادہ نتیجے اور آسان علاج کی رہنمائی میں بدلنا — اردو اور انگریزی میں۔',
  },
  aboutWhatYouGetTitle: { en: 'What you get', ur: 'آپ کو کیا ملتا ہے' },
  aboutWhatYouGet1: { en: 'Detected condition name', ur: 'پتہ چلنے والی حالت/بیماری کا نام' },
  aboutWhatYouGet2: { en: 'Confidence score (a hint, not a guarantee)', ur: 'یقین/اعتماد کی سطح (اشارہ، ضمانت نہیں)' },
  aboutWhatYouGet3: { en: 'Treatment guidance you can read and follow', ur: 'علاج/دیکھ بھال کی رہنمائی جسے آپ پڑھ کر اپنا سکیں' },
  aboutHowToUseTitle: { en: 'How to use it well', ur: 'اسے بہتر طریقے سے کیسے استعمال کریں' },
  aboutHowToUse1: { en: 'Take the photo in daylight, keep the leaf in focus', ur: 'دن کی روشنی میں تصویر لیں، پتا فوکس میں ہو' },
  aboutHowToUse2: { en: 'Capture the affected area clearly (spots, edges, veins)', ur: 'متاثرہ حصہ واضح دکھائیں (دھبے، کنارے، رگیں)' },
  aboutHowToUse3: { en: 'Avoid heavy blur and very dark images', ur: 'زیادہ دھندلاہٹ اور بہت اندھیری تصاویر سے بچیں' },
  aboutLimitsTitle: { en: 'Limitations', ur: 'حدود (Limitations)' },
  aboutLimitsDesc: {
    en: 'LeafLens is an AI assistant. Results depend on image quality and may be wrong. If the crop is at risk, consult local experts or extension services.',
    ur: 'LeafLens ایک AI مددگار ہے۔ نتیجہ تصویر کے معیار پر منحصر ہے اور غلط بھی ہو سکتا ہے۔ اگر فصل خطرے میں ہو تو مقامی ماہرین یا توسیعی خدمات سے ضرور مشورہ کریں۔',
  },
  aboutPrivacyTitle: { en: 'Privacy', ur: 'رازداری' },
  aboutPrivacyDesc: {
    en: 'Your uploaded image is sent to the prediction API for analysis. Do not upload personal or sensitive photos.',
    ur: 'آپ کی اپ لوڈ کی گئی تصویر تجزیے کے لیے Prediction API کو بھیجی جاتی ہے۔ ذاتی یا حساس تصاویر اپ لوڈ نہ کریں۔',
  },
  problemTitle: { en: 'Why this matters', ur: 'یہ کیوں ضروری ہے' },
  problemAccess: {
    en: 'Access gap: Expert support may not reach remote villages in time.',
    ur: 'رسائی کا فرق: توسیعی خدمات اکثر دیہات تک بروقت نہیں پہنچتیں۔',
  },
  problemLate: {
    en: 'Late detection: Diseases can spread before symptoms are recognized.',
    ur: 'دیر سے پتہ چلنا: علامتیں سمجھنے سے پہلے بیماریاں پھیل جاتی ہیں۔',
  },
  problemKnowledge: {
    en: 'Knowledge gap: Clear, correct treatment steps are not always available locally.',
    ur: 'علم کی کمی: درست علاج کے مراحل ہمیشہ مقامی طور پر دستیاب نہیں۔',
  },
  problemLanguage: {
    en: 'Language barrier: Critical guidance is often English-only.',
    ur: 'زبان کی رکاوٹ: اہم مشورے اکثر صرف انگریزی میں ہوتے ہیں۔',
  },
  modelTitle: { en: 'The AI model', ur: 'AI ماڈل' },
  modelDesc: {
    en: 'We use a MobileNetV2-based model trained on 54,000+ labeled leaf images across 38 classes (including healthy) and optimize it for fast, mobile-friendly inference.',
    ur: 'ہم MobileNetV2 نیٹ ورک کو ۵۴٬۰۰۰+ لیبل والی پتے کی تصاویر پر تربیت دیتے ہیں، جس میں ۳۸ بیماریوں کی اقسام (اور صحت مند پودے) شامل ہیں، موبائل دوست انداز میں۔',
  },
  stackTitle: { en: 'Technology stack', ur: 'ٹیکنالوجی اسٹیک' },
  audienceTitle: { en: 'Who it is for', ur: 'یہ کس کے لیے ہے' },
  audienceDesc: {
    en: 'Smallholder farmers and growers in rural Sindh and Punjab, Pakistan — especially those using smartphones to protect wheat, cotton, vegetables, and fruit crops.',
    ur: 'پاکستان کے دیہی سندھ اور پنجاب کے چھوٹے کسان اور کاشتکار — خاص طور پر وہ جو اسمارٹ فون سے گندم، کپاس، سبزیاں اور پھلوں کی فصلوں کی حفاظت کرتے ہیں۔',
  },

  // Diseases page
  diseasesTitle: { en: 'Detectable Diseases', ur: 'قابل تشخیص بیماریاں' },
  diseasesSubtitle: {
    en: 'All 38 classes our model can recognize. Search by name or plant.',
    ur: 'وہ تمام ۳۸ اقسام جنہیں ہمارا ماڈل پہچان سکتا ہے۔ نام یا پودے سے تلاش کریں۔',
  },
  searchPlaceholder: { en: 'Search diseases or plants…', ur: 'بیماریاں یا پودے تلاش کریں…' },
  affectedPlant: { en: 'Plant', ur: 'پودا' },

  // Common
  appName: { en: 'LeafLens', ur: 'لیف لینز' },
}

/**
 * @param {keyof typeof translations} key
 * @param {'en'|'ur'} lang
 */
export function t(key, lang) {
  const entry = translations[key]
  if (!entry) return key
  return entry[lang] ?? entry.en
}
