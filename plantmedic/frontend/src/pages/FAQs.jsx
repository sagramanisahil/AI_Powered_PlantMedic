import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import { t } from '../translations'

export default function FAQs() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "How accurate is LeafLens AI disease detection?",
      answer: "Our AI models achieve approximately 92% accuracy in detecting common plant diseases. However, accuracy can vary based on image quality, lighting conditions, and disease rarity. We always recommend confirming diagnoses with agricultural professionals for critical decisions."
    },
    {
      id: 2,
      question: "What types of plants can LeafLens analyze?",
      answer: "LeafLens is trained on over 50 common agricultural crops including tomatoes, potatoes, cotton, wheat, rice, corn, peppers, cucumbers, and many more. Our database continues to expand with new plant species and disease patterns."
    },
    {
      id: 3,
      question: "Is my data and privacy protected?",
      answer: "Yes, absolutely. We use industry-standard encryption and security measures. Your plant images and personal data are stored securely in Firebase with strict access controls. We never share your data with third parties without your explicit consent."
    },
    {
      id: 4,
      question: "Can I use LeafLens offline?",
      answer: "Currently, LeafLens requires an internet connection to process images through our AI models. However, we're working on an offline mode that will allow basic functionality without internet access."
    },
    {
      id: 5,
      question: "How much does LeafLens cost?",
      answer: "LeafLens offers a free tier with up to 10 scans per month. Premium plans are available for frequent users with unlimited scans, advanced features, and priority support. Check our pricing page for detailed plan information."
    },
    {
      id: 6,
      question: "What should I do if the AI gives wrong results?",
      answer: "AI accuracy can vary. If you receive unexpected results, try uploading a clearer photo from different angles. Always cross-reference with local agricultural experts. You can also report incorrect results to help improve our models."
    },
    {
      id: 7,
      question: "Can I use LeafLens for commercial farming?",
      answer: "Yes! LeafLens is designed for both home gardeners and commercial farmers. Our premium plans offer features specifically for large-scale agricultural operations including batch processing and detailed analytics."
    },
    {
      id: 8,
      question: "How do I get the best photo for analysis?",
      answer: "For best results: use natural daylight, focus clearly on affected areas, include both healthy and diseased parts if possible, ensure the image isn't blurry, and avoid shadows covering the affected areas."
    },
    {
      id: 9,
      question: "What happens to my uploaded images?",
      answer: "Your images are used to provide disease analysis and are stored in your private account for reference. We may use anonymized image data to improve our AI models, but never with your personal information attached."
    },
    {
      id: 10,
      question: "Can LeafLens identify nutrient deficiencies?",
      answer: "Yes, our AI can detect visual signs of common nutrient deficiencies along with diseases. The system will provide specific recommendations for both disease treatment and nutrient management."
    },
    {
      id: 11,
      question: "Is LeafLens available in multiple languages?",
      answer: "Currently, LeafLens supports English and Urdu. We're working to add more languages including Hindi, Bengali, Arabic, and Spanish to serve our global farming community better."
    },
    {
      id: 12,
      question: "How quickly do I get results?",
      answer: "Most analyses complete within 5-10 seconds, depending on your internet connection and image size. Larger images or slower connections may take longer to process."
    }
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-leaf-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-4xl font-bold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
                Frequently Asked Questions
              </h1>
              <p className={`mt-2 text-lg text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                Find answers to common questions about LeafLens
              </p>
            </div>
          </div>
        </header>

        <main className="space-y-6">
          <section className="pm-card p-6">
            <div className="mb-6">
              <h2 className={`text-xl font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                General Questions
              </h2>
              <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                Click on any question to reveal the answer
              </p>
            </div>
            
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div key={faq.id} className="border border-leaf-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-leaf-50 transition-colors"
                  >
                    <span className={`font-medium text-leaf-800 ${isUr ? 'font-urdu' : ''}`}>
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-leaf-600 transition-transform ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-6 py-4 bg-leaf-50 border-t border-leaf-200">
                      <p className={`text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
              Still Have Questions?
            </h2>
            <div className="space-y-4">
              <p className={`text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
                Can't find what you're looking for? We're here to help!
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-leaf-50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">💬</div>
                  <h3 className={`font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                    Chat with Support
                  </h3>
                  <p className={`text-sm text-earth-600 mb-4 ${isUr ? 'font-urdu' : ''}`}>
                    Get instant help from our AI assistant or connect with human support
                  </p>
                  <button className="pm-btn-primary w-full">
                    Start Chat
                  </button>
                </div>
                
                <div className="bg-leaf-50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">📧</div>
                  <h3 className={`font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                    Email Support
                  </h3>
                  <p className={`text-sm text-earth-600 mb-4 ${isUr ? 'font-urdu' : ''}`}>
                    Send us a detailed message and we'll respond within 24 hours
                  </p>
                  <button className="pm-btn-secondary w-full">
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
              Popular Topics
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Account Setup',
                'Camera Issues',
                'Pricing',
                'Data Privacy',
                'Plant Types',
                'Accuracy',
                'Troubleshooting',
                'Mobile App',
                'API Access',
                'Partnerships'
              ].map((topic) => (
                <button
                  key={topic}
                  className="px-4 py-2 bg-leaf-100 hover:bg-leaf-200 text-leaf-700 rounded-full text-sm font-medium transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
