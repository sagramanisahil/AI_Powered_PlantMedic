import { useLanguage } from '../LanguageContext'
import { t } from '../translations'
import { Link } from 'react-router-dom'

export default function About() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <div className="min-h-screen bg-leaf-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-leaf-600 via-leaf-700 to-earth-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isUr ? 'font-urdu' : ''}`}>
              {lang === 'ur' ? 'لیف لینس کے بارے میں' : 'About LeafLens'}
            </h1>
            <p className={`text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed mb-8 ${isUr ? 'font-urdu' : ''}`}>
              {lang === 'ur' 
                ? 'ایچ آئی طاقت کے ساتھ پودوں کی بیماریوں کا پتہ لگانا۔ ہم دنیا بھر کے کاشتکاروں کو ان کی فصلوں کی حفاظت اور مستقبل کی حفاظت کرنے میں مدد کر رہے ہیں۔'
                : 'Revolutionizing agriculture with AI-powered plant disease detection. We\'re empowering farmers worldwide to protect their crops and secure their future.'
              }
            </p>
            <div className="mt-8 flex justify-center">
              <Link 
                to="/diagnose"
                className="pm-btn-primary bg-white text-leaf-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {lang === 'ur' ? 'شروع کریں' : 'Get Started'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className={`text-4xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
                {lang === 'ur' ? 'ہمارا مشن' : 'Our Mission'}
              </h2>
              <p className={`text-lg text-earth-700 leading-relaxed mb-6 ${isUr ? 'font-urdu' : ''}`}>
                {lang === 'ur' 
                  ? 'جدید ترین مصنوعی ذہانت کا استعمال کرتے ہوئے پودوں کی بیماریوں کی تشخیص کو عام کرنا، تاکہ زرعی مہارت ہر کسان کی پہنچ میں ہو، چاہے ان کا مقام یا وسائل کچھ بھی ہوں۔'
                  : 'To democratize plant disease detection using cutting-edge artificial intelligence, making agricultural expertise accessible to every farmer, regardless of their location or resources.'}
              </p>
              <p className={`text-lg text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
                {lang === 'ur'
                  ? 'ہمیں یقین ہے کہ ٹیکنالوجی کو انسانیت کی خدمت کرنی چاہیے، اور بیماریوں کی بروقت تشخیص فراہم کر کے، ہم کسانوں کو ان کے روزگار کے تحفظ میں مدد کرتے ہیں، اور ساتھ ہی پائیدار زرعی طریقوں کو فروغ دیتے ہیں جو ہمارے پورے سیارے کے لیے فائدہ مند ہیں۔'
                  : 'We believe that technology should serve humanity, and by providing early disease detection, we help farmers protect their livelihoods while promoting sustainable agricultural practices that benefit our entire planet.'}
              </p>
            </div>
              <div className="grid gap-6 sm:grid-cols-2">
              <div className="pm-card p-6 text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className={`text-xl font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? '38 انواع' : '38 Species'}
                </h3>
                <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? 'ماڈل ۳۸ کلاسز کی شناخت کرتا ہے۔' : 'Our model recognizes 38 plant species/classes.'}
                </p>
              </div>
              <div className="pm-card p-6 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className={`text-xl font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? 'تربیتی درستگی 88%' : 'Training Accuracy 88%'}
                </h3>
                <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? 'ماڈل کی تربیت شدہ درستی' : 'Model training accuracy on our dataset'}
                </p>
              </div>
              <div className="pm-card p-6 text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className={`text-xl font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? 'ٹیسٹ درستی 94%' : 'Testing Accuracy 94%'}
                </h3>
                <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? 'ماڈل: MobileNetV2' : 'Model: MobileNetV2'}
                </p>
              </div>
              <div className="pm-card p-6 text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className={`text-xl font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? 'خطہ: دیہی پاکستان' : 'Region: Rural Pakistan'}
                </h3>
                <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? 'سندھ و پنجاب' : 'Sindh & Punjab'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              {lang === 'ur' ? 'یہ کیسے کام کرتا ہے' : 'How It Works'}
            </h2>
            <p className={`text-xl text-earth-600 max-w-3xl mx-auto ${isUr ? 'font-urdu' : ''}`}>
              {lang === 'ur' 
                ? 'ہمارا جدید ترین AI سسٹم سیکنڈوں میں پودوں کی تصاویر کا تجزیہ کرتا ہے، اور درست بیماری کی تشخیص کے ساتھ علاج کی سفارشات فراہم کرتا ہے۔' 
                : 'Our sophisticated AI system analyzes plant images in seconds, providing accurate disease detection and treatment recommendations.'}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: 1,
                title: lang === 'ur' ? "تصویر اپ لوڈ کریں" : "Upload Image",
                description: lang === 'ur' ? "ہمارے موبائل فرینڈلی انٹرفیس کا استعمال کرتے ہوئے اپنے پودے کی تصویر لیں یا اپ لوڈ کریں" : "Take a photo or upload an image of your plant using our mobile-friendly interface",
                icon: "📸"
              },
              {
                step: 2,
                title: lang === 'ur' ? "AI تجزیہ" : "AI Analysis",
                description: lang === 'ur' ? "ہمارے جدید نیورل نیٹ ورکس بیماری کے نمونوں اور علامات کے لیے تصویر کا تجزیہ کرتے ہیں" : "Our advanced neural networks analyze the image for disease patterns and symptoms",
                icon: "🤖"
              },
              {
                step: 3,
                title: lang === 'ur' ? "نتائج حاصل کریں" : "Get Results",
                description: lang === 'ur' ? "اعتماد کے اسکور اور صحت کے جائزوں کے ساتھ فوری تشخیص حاصل کریں" : "Receive instant diagnosis with confidence scores and health assessments",
                icon: "📊"
              },
              {
                step: 4,
                title: lang === 'ur' ? "علاج کی گائیڈ" : "Treatment Guide",
                description: lang === 'ur' ? "علاج کی تفصیلی سفارشات اور حفاظتی تدابیر تک رسائی حاصل کریں" : "Access detailed treatment recommendations and preventive measures",
                icon: "💊"
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-leaf-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="w-8 h-8 bg-leaf-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.step}
                </div>
                <h3 className={`text-xl font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  {step.title}
                </h3>
                <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className={`text-4xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
                {lang === 'ur' ? 'ہماری ٹیکنالوجی' : 'Our Technology'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className={`text-2xl font-semibold text-leaf-800 mb-3 ${isUr ? 'font-urdu' : ''}`}>
                    {lang === 'ur' ? 'ایڈوانسڈ نیورل نیٹ ورکس' : 'Advanced Neural Networks'}
                  </h3>
                  <p className={`text-lg text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
                        {lang === 'ur' 
                          ? 'ہمارے ملکیتی ڈیپ لرننگ ماڈلز کو لاکھوں پودوں کی تصاویر پر تربیت دی گئی ہے، جو انہیں بیماری کے باریک نمونوں کو پہچاننے کے قابل بناتے ہیں جو انسانی آنکھ سے پوشیدہ ہو سکتے ہیں۔' 
                          : 'Our proprietary deep learning models are trained on millions of plant images, enabling them to recognize subtle disease patterns that might be invisible to the human eye.'}
                  </p>
                </div>
                <div>
                  <h3 className={`text-2xl font-semibold text-leaf-800 mb-3 ${isUr ? 'font-urdu' : ''}`}>
                    {lang === 'ur' ? 'کمپیوٹر ویژن' : 'Computer Vision'}
                  </h3>
                  <p className={`text-lg text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
                      {lang === 'ur' 
                      ? 'جدید ترین کمپیوٹر ویژن الگورتھم پودوں کی تصاویر سے تفصیلی خصوصیات نکالتے ہیں، جن میں رنگ کی تبدیلیاں، ساخت کے نمونے اور ساختی خرابیاں شامل ہیں۔' 
                      : 'State-of-the-art computer vision algorithms extract detailed features from plant images, including color variations, texture patterns, and structural abnormalities.'}
                  </p>
                </div>
                <div>
                  <h3 className={`text-2xl font-semibold text-leaf-800 mb-3 ${isUr ? 'font-urdu' : ''}`}>
                    {lang === 'ur' ? 'مسلسل سیکھنا' : 'Continuous Learning'}
                  </h3>
                  <p className={`text-lg text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
                    {lang === 'ur' 
                      ? 'ہمارا سسٹم فیڈ بیک لوپس اور نئے تربیتی ڈیٹا کے ذریعے مسلسل بہتر ہوتا ہے، جس سے وقت کے ساتھ زیادہ درست تشخیص یقینی ہوتی ہے۔' 
                      : 'Our system continuously improves through feedback loops and new training data, ensuring increasingly accurate diagnoses over time.'}
                  </p>
                </div>
              </div>
            </div>
            <div className="pm-card p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🧠</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
                      {lang === 'ur' ? 'ڈیپ لرننگ آرکیٹیکچر' : 'Deep Learning Architecture'}
                    </h4>
                    <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                      {lang === 'ur' ? 'پودوں کی پیتھالوجی کے لیے بہتر بنائے گئے کسٹم CNN ماڈلز' : 'Custom CNN models optimized for plant pathology'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🔬</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
                      {lang === 'ur' ? 'تحقیق پر مبنی' : 'Research-Backed'}
                    </h4>
                    <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                      {lang === 'ur' ? 'زرعی سائنسدانوں اور ماہرینِ امراض کے ساتھ تیار کیا گیا' : 'Developed with agricultural scientists and pathologists'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
                      {lang === 'ur' ? 'کلاؤڈ انفراسٹرکچر' : 'Cloud Infrastructure'}
                    </h4>
                    <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                      {lang === 'ur' ? 'تیز رفتار تجزیہ کے لیے قابل توسیع کلاؤڈ پروسیسنگ' : 'Scalable cloud processing for rapid analysis'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              {lang === 'ur' ? 'لیف لینس کیوں منتخب کریں' : 'Why Choose LeafLens'}
            </h2>
            <p className={`text-xl text-earth-600 max-w-3xl mx-auto ${isUr ? 'font-urdu' : ''}`}>
              {lang === 'ur' 
                ? 'ہم دنیا بھر کے کسانوں کے لیے پودوں کی بیماریوں کی تشخیص کا سب سے قابل اعتماد، قابل رسائی اور موثر حل فراہم کرنے کے لیے پرعزم ہیں۔' 
                : "We're committed to providing the most reliable, accessible, and effective plant disease detection solution for farmers worldwide."}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: lang === 'ur' ? "تیز اور درست" : "Fast & Accurate",
                description: lang === 'ur' ? "صنعت کی بہترین 92% درستگی کی شرح کے ساتھ سیکنڈوں میں نتائج حاصل کریں" : "Get results in seconds with industry-leading 92% accuracy rates",
                icon: "⚡",
                color: "blue"
              },
              {
                title: lang === 'ur' ? "استعمال میں آسان" : "Easy to Use",
                description: lang === 'ur' ? "کسی تکنیکی مہارت کی ضرورت نہیں - بس نشاندہی کریں، کلک کریں اور نتائج حاصل کریں" : "No technical expertise required - just point, click, and get results",
                icon: "📱",
                color: "green"
              },
              {
                title: lang === 'ur' ? "سستا اور مناسب" : "Affordable",
                description: lang === 'ur' ? "بڑے پیمانے پر کام کے لیے پریمیم منصوبوں کے ساتھ مفت منصوبہ بھی دستیاب ہے" : "Free tier available with premium plans for large-scale operations",
                icon: "💰",
                color: "yellow"
              },
              {
                title: lang === 'ur' ? "کثیر اللسانی" : "Multilingual",
                description: lang === 'ur' ? "انگریزی، اردو، ہندی میں دستیاب ہے اور مزید زبانیں جلد آرہی ہیں" : "Available in English, Urdu, Hindi, and more languages coming soon",
                icon: "🌍",
                color: "purple"
              },
              {
                title: lang === 'ur' ? "ماہرین کی معاونت" : "Expert Support",
                description: lang === 'ur' ? "زرعی ماہرین اور کمیونٹی کے علم تک رسائی" : "Access to agricultural experts and community knowledge",
                icon: "👨‍🌾",
                color: "red"
              },
              {
                title: lang === 'ur' ? "ڈیٹا کی رازداری" : "Data Privacy",
                description: lang === 'ur' ? "آپ کا ڈیٹا محفوظ ہے اور آپ کی رضامندی کے بغیر کبھی شیئر نہیں کیا جاتا" : "Your data is secure and never shared without your consent",
                icon: "🔒",
                color: "gray"
              }
            ].map((feature, index) => (
              <div key={index} className="pm-card p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className={`text-xl font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  {feature.title}
                </h3>
                <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Vision Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className={`text-4xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
                {lang === 'ur' ? 'ہمارا وژن' : 'Our Vision'}
              </h2>
              <p className={`text-lg text-earth-700 leading-relaxed mb-6 ${isUr ? 'font-urdu' : ''}`}>
                {lang === 'ur' 
                  ? 'ہم ایک ایسی دنیا کا تصور کرتے ہیں جہاں ہر کسان کو جدید زرعی ٹیکنالوجی تک رسائی حاصل ہو، قطع نظر ان کے مقام یا معاشی حیثیت کے۔ پودوں کی بیماریوں کی تشخیص کو عام کر کے، ہم آنے والی نسلوں کے لیے غذائی تحفظ کو یقینی بنانے میں مدد کر رہے ہیں۔' 
                  : 'We envision a world where every farmer has access to advanced agricultural technology, regardless of their location or economic status. By democratizing plant disease detection, we\'re helping to ensure food security for future generations.'}
              </p>
              <p className={`text-lg text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
                {lang === 'ur' 
                  ? 'ہمارا ہدف پودوں کی صحت کی نگرانی کے لیے عالمی معیار بننا ہے، موجودہ زرعی طریقوں کے ساتھ بغیر کسی رکاوٹ کے ضم ہونا جبکہ پائیدار، ٹیکنالوجی سے بہتر کاشتکاری کی راہ ہموار کرنا ہے۔' 
                  : 'Our goal is to become the global standard for plant health monitoring, integrating seamlessly with existing agricultural practices while paving the way for sustainable, technology-enhanced farming.'}
              </p>
            </div>
            <div className="pm-card p-8">
              <h3 className={`text-2xl font-semibold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
                {lang === 'ur' ? 'ہماری اقدار' : 'Our Values'}
              </h3>
              <div className="space-y-4">
                {[
                  lang === 'ur' ? "زرعی ٹیکنالوجی میں جدت" : "Innovation in agricultural technology",
                  lang === 'ur' ? "تمام کسانوں کے لیے رسائی" : "Accessibility for all farmers",
                  lang === 'ur' ? "ماحولیاتی پائیداری" : "Environmental sustainability",
                  lang === 'ur' ? "کمیونٹی پر مبنی ترقی" : "Community-driven development",
                  lang === 'ur' ? "سائنسی درستگی اور اعتبار" : "Scientific accuracy and reliability",
                   lang === 'ur' ? "اخلاقی AI طرز عمل" : "Ethical AI practices"
                ].map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className={`text-earth-700 ${isUr ? 'font-urdu' : ''}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-leaf-600 to-earth-700 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold mb-6 ${isUr ? 'font-urdu' : ''}`}>
            {lang === 'ur' ? 'کیا آپ اپنی کاشتکاری کو بدلنے کے لیے تیار ہیں؟' : 'Ready to Transform Your Farming?'}
          </h2>
          <p className={`text-xl mb-8 ${isUr ? 'font-urdu' : ''}`}>
            {lang === 'ur' 
              ? 'ان ہزاروں کسانوں میں شامل ہوں جو پہلے ہی اپنی فصلوں کی حفاظت اور پیداوار بڑھانے کے لیے لیف لینس کا استعمال کر رہے ہیں۔ ہمارے مفت پلان کے ساتھ آج ہی شروعات کریں۔' 
              : 'Join thousands of farmers who are already using LeafLens to protect their crops and increase their yields. Get started today with our free plan.'}
          </p>
                  </div>
      </section>
    </div>
  )
}
