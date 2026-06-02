import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import { t } from '../translations'

function Icon({ children }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-600 text-white shadow-sm">
      {children}
    </span>
  )
}

export default function Home() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <div className="space-y-20">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: 'url(/hero-intro-bg.png.jpg)'}}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          {/* LeafLens Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 ring-2 ring-white/20">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img src="/leaf.svg" alt="LeafLens" className="w-8 h-8" />
              </div>
              <span className="text-3xl font-bold text-white">
                <span className="text-green-400">Leaf</span>
                <span className="text-blue-400 font-light">Lens</span>
              </span>
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 ${isUr ? 'font-urdu' : ''}`}>
            {lang === 'ur' ? 'اپنی فصلوں کا تحفظ کریں' : 'Protect Your Crops'}
          </h1>
          
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
            {lang === 'ur' 
              ? 'پودوں کی بیماریوں کی فوری شناخت اور صحت کے مشورے، آپ کے فصل کے تحفظ کے لیے'
              : 'Detect plant diseases instantly with advanced plant diagnostics and protect your agricultural investment'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/diagnose" 
              className="pm-btn-primary bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all hover:shadow-xl"
            >
              {lang === 'ur' ? 'فصل اسکین کریں' : 'Scan Your Plant Now'}
            </Link>
            <Link 
              to="/about" 
              className="pm-btn-secondary border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg font-semibold rounded-xl transition-all"
            >
              {lang === 'ur' ? 'مزید جانیں' : 'Learn More'}
            </Link>
          </div>
        </div>
        {/* Hero side popups removed per user request */}
      </section>

      {/* Statistics Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
          {[
            { number: '38', label: t('statPlants', lang), icon: '🌱' },
            { number: '88%', label: t('statTrainAcc', lang), icon: '📈' },
            { number: '94%', label: t('statTestAcc', lang) + ' — MobileNetV2', icon: '🔬' },
            { number: t('statRegion', lang).startsWith('Region') ? 'Rural Pakistan' : t('statRegion', lang), label: t('statRegion', lang), icon: '📍' }
          ].map((stat, index) => (
            <div key={index} className="text-center pm-card p-8">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-leaf-900 mb-2">{stat.number}</div>
              <div className={`text-lg text-earth-600 ${isUr ? 'font-urdu' : ''}`}>{stat.label}</div>
            </div>
          ))}
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
                  ? 'چار آسان مراحل میں اپنے پودوں کی صحت یقینی بنائیں'
                  : 'Protect your crops in four simple steps with our advanced plant diagnostics'
                }
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: 1,
                title: lang === 'ur' ? 'تصویر اپ لوڈ کریں' : 'Upload Image',
                description: lang === 'ur' 
                  ? 'اپنے پودے کی تصویر لیں یا اپ لوڈ کریں'
                  : 'Take a photo or upload an image of your plant',
                icon: '📸'
              },
              {
                step: 2,
                title: lang === 'ur' ? 'تصویر کا تجزیہ' : 'Image Analysis',
                description: lang === 'ur' 
                  ? 'ہمارا ماڈیول تصویر کا تجزیہ کرکے بیماری کے نمونے تلاش کرتا ہے'
                  : 'Our system analyzes the image to identify disease patterns',
                icon: '🔎'
              },
              {
                step: 3,
                title: lang === 'ur' ? 'فوری نتائجے' : 'Instant Results',
                description: lang === 'ur' 
                  ? 'سیکنڈوں میں تشخیص حاصل کریں'
                  : 'Get diagnosis results within seconds',
                icon: '📊'
              },
              {
                step: 4,
                title: lang === 'ur' ? 'علاج کی رہنمائی' : 'Treatment Guide',
                description: lang === 'ur' 
                  ? 'مخصوص علاج کی سفارشات حاصل کریں'
                  : 'Receive personalized treatment recommendations',
                icon: '💊'
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-leaf-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-leaf-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white">
                    {step.step}
                  </div>
                </div>
                <h3 className={`text-xl font-semibold text-leaf-900 mb-3 ${isUr ? 'font-urdu' : ''}`}>
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

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              {lang === 'ur' ? 'خصوصیات' : 'Features'}
            </h2>
            <p className={`text-xl text-earth-600 max-w-3xl mx-auto ${isUr ? 'font-urdu' : ''}`}>
              {lang === 'ur' 
                ? 'ہماری جدید ٹیکنالوجی آپ کے لیے کیا کر سکتی ہے'
                : 'What our advanced technology can do for your crops'
              }
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: lang === 'ur' ? 'اعلی درستی' : 'High Accuracy',
                description: lang === 'ur' 
                  ? '92% درستی کی شرح کے ساتھ بیماریوں کا درست تشخیص'
                  : '92% accuracy rate in detecting common plant diseases',
                icon: '🎯',
                color: 'blue'
              },
              {
                title: lang === 'ur' ? 'تیز رفتار' : 'Lightning Fast',
                description: lang === 'ur' 
                  ? 'تصاویر کا تجزیہ صرف 10 سیکنڈوں میں'
                  : 'Image analysis in just 10 seconds',
                icon: '⚡',
                color: 'yellow'
              },
              {
                title: lang === 'ur' ? 'آسان استعمال' : 'Easy to Use',
                description: lang === 'ur' 
                  ? 'کسی تکنیکی علم کی ضرورت نہیں'
                  : 'No technical expertise required',
                icon: '📱',
                color: 'green'
              },
              {
                title: lang === 'ur' ? 'کثیر لسانی' : 'Multilingual',
                description: lang === 'ur' 
                  ? 'اردو، انگریزی اور مزید زبانیں'
                  : 'Urdu, English and more languages',
                icon: '🌍',
                color: 'purple'
              },
              {
                title: lang === 'ur' ? 'مفت استعمال' : 'Free to Use',
                description: lang === 'ur' 
                  ? 'بنیادی خصوصیات مفت ہیں'
                  : 'Basic features available for free',
                icon: '💰',
                color: 'green'
              },
              {
                title: lang === 'ur' ? 'ماہرین کا تعاون' : 'Expert Support',
                description: lang === 'ur' 
                  ? 'کاشتکاری ماہرین سے رہنمائی'
                  : 'Guidance from agricultural experts',
                icon: '👨‍🌾',
                color: 'red'
              }
            ].map((feature, index) => (
              <div key={index} className="pm-card p-8 text-center hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className={`text-xl font-semibold text-leaf-900 mb-3 ${isUr ? 'font-urdu' : ''}`}>
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              {lang === 'ur' ? 'کاشتکاروں کے تجربات' : 'Farmer Testimonials'}
            </h2>
            <p className={`text-xl text-earth-600 max-w-3xl mx-auto ${isUr ? 'font-urdu' : ''}`}>
              {lang === 'ur' 
                ? 'دنیا بھر کے کاشتکاروں کے تجربات'
                : 'What farmers around the world are saying about LeafLens'
              }
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Rajesh Patel",
                location: lang === 'ur' ? 'گجرات، ہندوستان' : 'Gujarat, India',
                crop: lang === 'ur' ? 'کپاس' : 'Cotton',
                text: lang === 'ur' 
                  ? 'لیف لینس نے میری کپاس کی فصل کو بچا لیا۔ پتے گھومنے کی بیماری کا پتہ چلے ہی وقت لگایا اور مناسب علاج ملا۔'
                  : 'LeafLens saved my cotton crop. Detected leaf curl disease early and provided right treatment.',
                rating: 5
              },
              {
                name: "Fatima Raza",
                location: lang === 'ur' ? 'لاگوس، نائجیریا' : 'Lagos, Nigeria',
                crop: lang === 'ur' ? 'ٹماٹر' : 'Tomatoes',
                text: lang === 'ur' 
                  ? 'ہمارے ٹماٹر کی پیداوار 40% بڑھ گئی۔ ایچ آئی کی درست تشخیص اور علاج کی سفارشات نے کام کیا۔'
                  : 'Our tomato production increased by 40%. The AI diagnosis and treatment recommendations really work.',
                rating: 5
              },
              {
                name: "Carlos Rodriguez",
                location: lang === 'ur' ? 'میکسیکو سٹی، میکسیکو' : 'Mexico City, Mexico',
                crop: lang === 'ur' ? 'مکئی' : 'Corn',
                text: lang === 'ur' 
                  ? 'کمائی کے لیے بہترین اپلیکیشن۔ غذائیت کی کمی کا پتہ لگایا اور فصل بچا لی۔'
                  : 'Best app for corn farming. Detected nutrient deficiency and saved our harvest.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="pm-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className={`text-earth-700 mb-4 italic ${isUr ? 'font-urdu' : ''}`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-leaf-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">👨‍🌾</span>
                  </div>
                  <div>
                    <div className={`font-semibold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
                      {testimonial.name}
                    </div>
                    <div className={`text-sm text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                      {testimonial.location} • {testimonial.crop}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-leaf-600 to-earth-700 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold mb-6 ${isUr ? 'font-urdu' : ''}`}>
            {lang === 'ur' ? 'آج ہی شروع کریں' : 'Get Started Today'}
          </h2>
          <p className={`text-xl mb-8 ${isUr ? 'font-urdu' : ''}`}>
            {lang === 'ur' 
              ? 'ہزاروں کاشتکاروں کے ساتھ شامل ہوں جو اپنی فصلوں کا تحفظ کر رہے ہیں۔ مفت منصوبے کے ساتھ شروع کریں۔'
              : 'Join thousands of farmers protecting their crops with LeafLens. Start with our free plan today.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="pm-btn-primary bg-white text-leaf-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              {lang === 'ur' ? 'مفت کھاتہ کریں' : 'Sign Up Free'}
            </Link>
            <Link 
              to="/diagnose" 
              className="pm-btn-secondary border-2 border-white text-white hover:bg-white hover:text-leaf-700 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              {lang === 'ur' ? 'فصل اسکین کریں' : 'Scan Plant Now'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
