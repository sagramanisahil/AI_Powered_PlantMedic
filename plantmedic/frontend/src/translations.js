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
  detectedLabel: { en: 'Detected condition', ur: 'پہچانی گئی حالت' },
  confidenceLabel: { en: 'Confidence', ur: 'یقین' },
  treatmentLabel: { en: 'Treatment guide', ur: 'علاج کی رہنمائی' },
  uploadAnother: { en: 'Upload another image', ur: 'ایک اور تصویر اپ لوڈ کریں' },
  langEnglish: { en: 'English', ur: 'انگریزی' },
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
  aboutLimitsTitle: { en: 'Limitations', ur: 'حدود' },
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

  // Home stats
  statPlants: { en: 'Plant Species', ur: 'پودوں کی اقسام' },
  statTrainAcc: { en: 'Training Accuracy', ur: 'تربیتی درستگی' },
  statTestAcc: { en: 'Testing Accuracy', ur: 'ٹیسٹ درستگی' },
  statRegion: { en: 'Region: Sindh & Punjab', ur: 'علاقہ: سندھ و پنجاب' },

  // FAQs UI strings
  faqsTitle: { en: 'Frequently Asked Questions', ur: 'عمومی سوالات' },
  faqsSubtitle: { en: 'Find answers to common questions about LeafLens', ur: 'LeafLens کے عام سوالات کے جواب تلاش کریں' },
  faqsGeneralTitle: { en: 'General Questions', ur: 'عمومی سوالات' },
  faqsClickTip: { en: 'Click on any question to reveal the answer', ur: 'جواب دیکھنے کے لیے کسی بھی سوال پر کلک کریں' },
  faqsStillTitle: { en: 'Still Have Questions?', ur: 'اب بھی سوالات ہیں؟' },
  faqsStillText: { en: "Can't find what you're looking for? We're here to help!", ur: 'جو چیز آپ تلاش کر رہے ہیں مل نہیں رہی؟ ہم مدد کے لیے حاضر ہیں!' },
  faqsChatTitle: { en: 'Chat with Support', ur: 'حمایت سے بات کریں' },
  faqsChatText: { en: 'Get instant help from our AI assistant or connect with human support', ur: 'فوری مدد کے لیے ہمارے AI اسسٹنٹ سے بات کریں یا انسانی مدد سے رابطہ کریں' },
  faqsChatButton: { en: 'Start Chat', ur: 'چیٹ شروع کریں' },
  faqsEmailTitle: { en: 'Email Support', ur: 'ای میل سپورٹ' },
  faqsEmailText: { en: "Send us a detailed message and we'll respond within 24 hours", ur: 'ہمیں مکمل پیغام بھیجیں، ہم 24 گھنٹے کے اندر جواب دیں گے' },
  faqsEmailButton: { en: 'Send Email', ur: 'ای میل بھیجیں' },
  faqsPopularTitle: { en: 'Popular Topics', ur: 'مشہور موضوعات' },

  // Individual FAQ entries
  faq1_q: { en: 'How accurate is LeafLens AI disease detection?', ur: 'LeafLens AI بیماری کی تشخیص کتنی درست ہے؟' },
  faq1_a: { en: 'Our AI models achieve approximately 92% accuracy in detecting common plant diseases. However, accuracy can vary based on image quality, lighting conditions, and disease rarity. We always recommend confirming diagnoses with agricultural professionals for critical decisions.', ur: 'ہمارے AI ماڈلز عام پودوں کی بیماریوں کی شناخت میں قریباً 92% درستگی حاصل کرتے ہیں۔ البتہ درستگی تصویر کے معیار، روشنی اور بیماری کی نایابی کے مطابق بدل سکتی ہے۔ اہم فیصلوں کے لیے ماہرین سے تصدیق کریں۔' },
  faq2_q: { en: 'What types of plants can LeafLens analyze?', ur: 'LeafLens کن اقسام کے پودوں کا تجزیہ کر سکتا ہے؟' },
  faq2_a: { en: 'LeafLens is trained on over 50 common agricultural crops including tomatoes, potatoes, cotton, wheat, rice, corn, peppers, cucumbers, and many more. Our database continues to expand with new plant species and disease patterns.', ur: 'LeafLens کو 50+ عام زرعی فصلوں پر تربیت دیا گیا ہے، جن میں ٹماٹر، آلو، کپاس، گندم، چاول، مکئی، مرچ، کھیرہ وغیرہ شامل ہیں۔ ہمارا ڈیٹابیس مسلسل بڑھ رہا ہے۔' },
  faq3_q: { en: 'Is my data and privacy protected?', ur: 'کیا میرا ڈیٹا اور رازداری محفوظ ہے؟' },
  faq3_a: { en: 'Yes, absolutely. We use industry-standard encryption and security measures. Your plant images and personal data are stored securely in Firebase with strict access controls. We never share your data with third parties without your explicit consent.', ur: 'جی ہاں۔ ہم صنعت معیار کی انکرپشن اور سیکیورٹی استعمال کرتے ہیں۔ آپ کی تصاویر اور ڈیٹا Firebase میں محفوظ انداز میں رکھے جاتے ہیں اور آپ کی اجازت کے بغیر شیئر نہیں کیے جاتے۔' },
  faq4_q: { en: 'Can I use LeafLens offline?', ur: 'کیا میں LeafLens کو آف لائن استعمال کر سکتا ہوں؟' },
  faq4_a: { en: "Currently, LeafLens requires an internet connection to process images through our AI models. However, we're working on an offline mode that will allow basic functionality without internet access.", ur: 'فی الحال، LeafLens تصویروں کے تجزیے کیلئے انٹرنیٹ کنکشن مانگتا ہے، مگر ہم ایک آف لائن موڈ پر کام کر رہے ہیں جو بنیادی خصوصیات بغیر کنکشن فراہم کرے گا۔' },
  faq5_q: { en: 'How much does LeafLens cost?', ur: 'LeafLens کی قیمت کتنی ہے؟' },
  faq5_a: { en: 'LeafLens offers a free tier with up to 10 scans per month. Premium plans are available for frequent users with unlimited scans, advanced features, and priority support. Check our pricing page for detailed plan information.', ur: 'LeafLens ایک مفت منصوبہ دیتی ہے جس میں ماہانہ 10 تک اسکین شامل ہیں۔ بار بار استعمال کے لیے پریمیم پلانز دستیاب ہیں جن میں لامحدود اسکین اور ترجیحی مدد شامل ہیں۔' },
  faq6_q: { en: 'What should I do if the AI gives wrong results?', ur: 'اگر AI غلط نتائج دے تو مجھے کیا کرنا چاہیے؟' },
  faq6_a: { en: 'AI accuracy can vary. If you receive unexpected results, try uploading a clearer photo from different angles. Always cross-reference with local agricultural experts. You can also report incorrect results to help improve our models.', ur: 'اگر آپ کو غیر متوقع نتیجہ ملے تو مختلف زاویوں سے واضح تصویر اپ لوڈ کریں اور مقامی زرعی ماہرین سے تصدیق کریں۔ غلط نتائج رپورٹ کریں تاکہ ماڈل بہتر ہو سکیں۔' },
  faq7_q: { en: 'Can I use LeafLens for commercial farming?', ur: 'کیا میں تجارتی کاشت کیلئے LeafLens استعمال کر سکتا/سکتی ہوں؟' },
  faq7_a: { en: 'Yes! LeafLens is designed for both home gardeners and commercial farmers. Our premium plans offer features specifically for large-scale agricultural operations including batch processing and detailed analytics.', ur: 'جی ہاں، LeafLens گھر کے باغبانوں اور تجارتی کسانوں دونوں کیلئے بنایا گیا ہے۔ ہمارے پریمیم پلان بڑی سطح کے آپریشنز کیلئے خصوصیات فراہم کرتے ہیں۔' },
  faq8_q: { en: 'How do I get the best photo for analysis?', ur: 'تجزیے کیلئے بہترین تصویر کیسے لیں؟' },
  faq8_a: { en: "For best results: use natural daylight, focus clearly on affected areas, include both healthy and diseased parts if possible, ensure the image isn't blurry, and avoid shadows covering the affected areas.", ur: 'بہترین نتائج کیلئے قدرتی روشنی میں تصویر لیں، متاثرہ حصے پر فوکس کریں، اگر ممکن ہو تو صحت مند اور متاثرہ حصے دونوں دکھائیں، تصویر دھندلی نہ ہو اور سائے نہ ہوں۔' },
  faq9_q: { en: 'What happens to my uploaded images?', ur: 'میری اپلوڈ کی گئی تصاویر کا کیا ہوتا ہے؟' },
  faq9_a: { en: 'Your images are used to provide disease analysis and are stored in your private account for reference. We may use anonymized image data to improve our AI models, but never with your personal information attached.', ur: 'آپ کی تصاویر تجزیے کیلئے استعمال ہوتی ہیں اور حوالہ کیلئے آپ کے اکاؤنٹ میں محفوظ رہتی ہیں۔ ہم گمنام شدہ ڈیٹا ماڈل بہتر کرنے کیلئے استعمال کر سکتے ہیں مگر آپ کی ذاتی معلومات کے ساتھ کبھی نہیں۔' },
  faq10_q: { en: 'Can LeafLens identify nutrient deficiencies?', ur: 'کیا LeafLens غذائی کمیوں کی شناخت کر سکتا ہے؟' },
  faq10_a: { en: 'Yes, our AI can detect visual signs of common nutrient deficiencies along with diseases. The system will provide specific recommendations for both disease treatment and nutrient management.', ur: 'جی ہاں، ہمارا AI عام غذائی کمیوں کی بصری علامات کو بیماریوں کے ساتھ شناخت کر سکتا ہے اور دونوں کیلئے مخصوص سفارشات فراہم کرتا ہے۔' },
  faq11_q: { en: 'Is LeafLens available in multiple languages?', ur: 'کیا LeafLens متعدد زبانوں میں دستیاب ہے؟' },
  faq11_a: { en: "Currently, LeafLens supports English and Urdu. We're working to add more languages including Hindi, Bengali, Arabic, and Spanish to serve our global farming community better.", ur: 'فی الحال LeafLens انگریزی اور اردو میں دستیاب ہے۔ ہم ہندی، بنگالی، عربی اور ہسپانوی جیسی مزید زبانیں شامل کرنے پر کام کر رہے ہیں۔' },
  faq12_q: { en: 'How quickly do I get results?', ur: 'نتائج مجھے کتنی تیزی سے ملتے ہیں؟' },
  faq12_a: { en: 'Most analyses complete within 5-10 seconds, depending on your internet connection and image size. Larger images or slower connections may take longer to process.', ur: 'زیادہ تر تجزیے 5-10 سیکنڈ میں مکمل ہو جاتے ہیں، جو آپ کے انٹرنیٹ کنکشن اور تصویر کے سائز پر منحصر ہے۔ بڑی تصاویر یا سست کنکشن میں زیادہ دیر لگ سکتی ہے۔' },

  // Common
  appName: { en: 'LeafLens', ur: 'لیف لینز' },
  navChat: { en: 'AI Chat', ur: 'AI چیٹ' },
  navDashboard: { en: 'Dashboard', ur: 'ڈیش بورڈ' },
  loading: { en: 'Loading...', ur: 'لوڈ ہو رہا ہے...' },
  welcomePrefix: { en: 'Welcome,', ur: 'خوش آمدید،' },
  signOut: { en: 'Sign Out', ur: 'سائن آؤٹ' },
  signIn: { en: 'Sign In', ur: 'سائن ان' },

  // Footer headings / small UI
  footerTaglineShort: { en: 'See what your crops need', ur: 'دیکھیں کہ آپ کی فصلوں کو کیا ضرورت ہے' },
  footerQuickLinks: { en: 'Quick Links', ur: 'فوری روابط' },
  footerResources: { en: 'Resources', ur: 'وسائل' },
  footerSupport: { en: 'Support', ur: 'سپورٹ' },

  // Chatbot
  chatbotGreeting: { en: 'Assalam-o-Alaikum! I am LeafLens AI Assistant. Ask me about diagnosis results, disease guidance, or how to use LeafLens.', ur: 'السلام علیکم! میں لیف لینز AI اسسٹنٹ ہوں۔ مجھے تشخیص، علاج یا اپلیکیشن کے استعمال کے بارے میں پوچھیں۔' },
  chatbotTitle: { en: 'LeafLens AI Assistant', ur: 'لیف لینز AI اسسٹنٹ' },
  chatbotClose: { en: 'Close', ur: 'بند کریں' },
  chatbotToggleAria: { en: 'Toggle LeafLens AI assistant', ur: 'لیف لینز AI اسسٹنٹ کو کھولیں/بند کریں' },
  chatbotTyping: { en: 'LeafLens AI is typing...', ur: 'لیف لینز AI ٹائپ کر رہا ہے...' },
  chatbotPlaceholder: { en: 'Ask LeafLens...', ur: 'لیف لینز سے پوچھیں...' },
  chatbotSend: { en: 'Send', ur: ' بھیجیں' },
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
