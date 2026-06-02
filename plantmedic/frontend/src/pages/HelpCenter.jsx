import { useLanguage } from '../LanguageContext'
import { t } from '../translations'

export default function HelpCenter() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <div className="min-h-screen bg-leaf-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-4xl font-bold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
                Help Center
              </h1>
              <p className={`mt-2 text-lg text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                Get help with LeafLens AI Plant Disease Detection
              </p>
            </div>

          </div>
        </header>

        <main className="space-y-8">
          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
              Getting Started
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-leaf-500 pl-4">
                <h3 className={`text-lg font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  How to Create an Account
                </h3>
                <ol className={`list-decimal list-inside space-y-1 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
                  <li>Click "Sign In" in the top navigation</li>
                  <li>Click "Create Your Account" at the bottom</li>
                  <li>Fill in your full name, email, and password</li>
                  <li>Click "Sign Up" to create your account</li>
                  <li>You'll be automatically redirected to your dashboard</li>
                </ol>
              </div>
              
              <div className="border-l-4 border-leaf-500 pl-4">
                <h3 className={`text-lg font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  How to Scan Your First Plant
                </h3>
                <ol className={`list-decimal list-inside space-y-1 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
                  <li>Navigate to the "Diagnose" page</li>
                  <li>Click "Take Photo (Camera)" to open your device camera</li>
                  <li>Or click the upload area to select an image from your device</li>
                  <li>Position your camera to capture the affected plant area</li>
                  <li>Click the "Analyze" button to process your image</li>
                  <li>Review the AI analysis and treatment recommendations</li>
                </ol>
              </div>
            </div>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
              Common Issues & Solutions
            </h2>
            <div className="space-y-4">
              <div className="border border-leaf-200 rounded-xl p-4">
                <h3 className={`text-lg font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  Camera Not Working
                </h3>
                <p className={`text-earth-700 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  If the camera doesn't open when you click the button:
                </p>
                <ul className={`list-disc list-inside space-y-1 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
                  <li>Make sure you've granted camera permissions to your browser</li>
                  <li>Try using a different browser (Chrome, Firefox, Safari)</li>
                  <li>Ensure your device has a working camera</li>
                  <li>Try uploading an image from your device instead</li>
                </ul>
              </div>

              <div className="border border-leaf-200 rounded-xl p-4">
                <h3 className={`text-lg font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  Login Issues
                </h3>
                <p className={`text-earth-700 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  If you can't sign in to your account:
                </p>
                <ul className={`list-disc list-inside space-y-1 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
                  <li>Check that you're using the correct email and password</li>
                  <li>Click "Forgot Password?" to reset your password</li>
                  <li>Try signing in with Google if you used that method</li>
                  <li>Clear your browser cache and cookies</li>
                </ul>
              </div>

              <div className="border border-leaf-200 rounded-xl p-4">
                <h3 className={`text-lg font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  Analysis Taking Too Long
                </h3>
                <p className={`text-earth-700 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  If the AI analysis is taking longer than expected:
                </p>
                <ul className={`list-disc list-inside space-y-1 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
                  <li>Check your internet connection</li>
                  <li>Try using a smaller image file (under 10MB)</li>
                  <li>Ensure the image is clear and well-lit</li>
                  <li>Refresh the page and try again</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
              Tips for Best Results
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-leaf-50 rounded-xl p-4">
                <h3 className={`text-lg font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  📸 Photo Quality
                </h3>
                <ul className={`list-disc list-inside space-y-1 text-earth-700 text-sm ${isUr ? 'font-urdu' : ''}`}>
                  <li>Use good lighting (natural daylight is best)</li>
                  <li>Focus clearly on the affected area</li>
                  <li>Include both healthy and affected parts if possible</li>
                  <li>Avoid blurry or dark images</li>
                </ul>
              </div>
              
              <div className="bg-leaf-50 rounded-xl p-4">
                <h3 className={`text-lg font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  🌱 Plant Identification
                </h3>
                <ul className={`list-disc list-inside space-y-1 text-earth-700 text-sm ${isUr ? 'font-urdu' : ''}`}>
                  <li>Know what type of plant you're scanning</li>
                  <li>Capture multiple angles if unsure</li>
                  <li>Include leaves, stems, and fruits if affected</li>
                  <li>Note any environmental conditions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
              Understanding Your Results
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className={`text-lg font-semibold text-blue-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  Confidence Score
                </h3>
                <p className={`text-blue-700 ${isUr ? 'font-urdu' : ''}`}>
                  The confidence percentage indicates how certain our AI is about the diagnosis. 
                  Higher confidence means more reliable results. Always verify with a professional 
                  for critical decisions.
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className={`text-lg font-semibold text-green-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  Health Percentage
                </h3>
                <p className={`text-green-700 ${isUr ? 'font-urdu' : ''}`}>
                  This estimates the overall health of your plant based on the visual analysis. 
                  Lower percentages may indicate stress, disease, or nutrient deficiencies.
                </p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <h3 className={`text-lg font-semibold text-yellow-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  Treatment Recommendations
                </h3>
                <p className={`text-yellow-700 ${isUr ? 'font-urdu' : ''}`}>
                  These are general suggestions based on the detected condition. Always consider 
                  your specific growing conditions, climate, and consult local agricultural experts.
                </p>
              </div>
            </div>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
              Contact Support
            </h2>
            <div className="space-y-4">
              <p className={`text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
                Can't find what you're looking for? Our support team is here to help!
              </p>
              
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 border border-leaf-200 rounded-xl">
                  <div className="text-3xl mb-2">📧</div>
                  <h3 className={`font-semibold text-leaf-800 mb-1 ${isUr ? 'font-urdu' : ''}`}>
                    Email Support
                  </h3>
                  <p className={`text-sm text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                    support@leaflens.ai
                  </p>
                  <p className={`text-xs text-earth-500 mt-1 ${isUr ? 'font-urdu' : ''}`}>
                    Response within 24 hours
                  </p>
                </div>
                
                <div className="text-center p-4 border border-leaf-200 rounded-xl">
                  <div className="text-3xl mb-2">💬</div>
                  <h3 className={`font-semibold text-leaf-800 mb-1 ${isUr ? 'font-urdu' : ''}`}>
                    Live Chat
                  </h3>
                  <p className={`text-sm text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                    Available 9 AM - 6 PM
                  </p>
                  <p className={`text-xs text-earth-500 mt-1 ${isUr ? 'font-urdu' : ''}`}>
                    Monday to Friday
                  </p>
                </div>
                
                <div className="text-center p-4 border border-leaf-200 rounded-xl">
                  <div className="text-3xl mb-2">📚</div>
                  <h3 className={`font-semibold text-leaf-800 mb-1 ${isUr ? 'font-urdu' : ''}`}>
                    Knowledge Base
                  </h3>
                  <p className={`text-sm text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                    Detailed guides
                  </p>
                  <p className={`text-xs text-earth-500 mt-1 ${isUr ? 'font-urdu' : ''}`}>
                    Available 24/7
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
