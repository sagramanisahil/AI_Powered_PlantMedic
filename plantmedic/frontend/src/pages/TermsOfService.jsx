import { useLanguage } from '../LanguageContext'
import { t } from '../translations'

export default function TermsOfService() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <div className="min-h-screen bg-leaf-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-4xl font-bold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
                Terms of Service
              </h1>
              <p className={`mt-2 text-lg text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

          </div>
        </header>

        <main className="space-y-8">
          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Agreement to Terms
            </h2>
            <p className={`text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
              By accessing and using LeafLens, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Description of Service
            </h2>
            <p className={`text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
              LeafLens is an AI-powered platform that provides plant disease detection services. 
              Our service uses machine learning algorithms to analyze plant images and provide 
              insights about potential diseases and treatment recommendations.
            </p>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              User Responsibilities
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
              <li>Provide accurate information when creating an account</li>
              <li>Use the service for legitimate agricultural purposes only</li>
              <li>Do not upload inappropriate or harmful content</li>
              <li>Respect intellectual property rights when uploading images</li>
              <li>Do not attempt to manipulate or exploit our AI systems</li>
              <li>Maintain the confidentiality of your account credentials</li>
            </ul>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Service Limitations
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className={`text-lg font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  Medical Disclaimer
                </h3>
                <p className={`text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
                  LeafLens provides educational and informational content only. Our AI recommendations 
                  should not be considered as professional agricultural or medical advice. Always consult 
                  with qualified agricultural experts for critical decisions.
                </p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  Accuracy Limitations
                </h3>
                <p className={`text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
                  While we strive for accuracy, our AI models may not always provide correct diagnoses. 
                  Results should be used as guidance and verified through professional consultation.
                </p>
              </div>
            </div>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Intellectual Property
            </h2>
            <p className={`text-earth-700 leading-relaxed mb-4 ${isUr ? 'font-urdu' : ''}`}>
              All content, features, and functionality of LeafLens are owned by us and are protected 
              by copyright, trademark, and other intellectual property laws.
            </p>
            <ul className={`list-disc list-inside space-y-2 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
              <li>You retain ownership of images you upload</li>
              <li>We grant you a limited license to use our service</li>
              <li>You may not copy, modify, or distribute our proprietary technology</li>
              <li>Our AI models and algorithms remain our intellectual property</li>
            </ul>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Account Terms
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
              <li>You must be at least 13 years old to create an account</li>
              <li>You are responsible for maintaining account security</li>
              <li>You may not share your account credentials with others</li>
              <li>We reserve the right to suspend or terminate accounts for violations</li>
              <li>You can delete your account at any time</li>
            </ul>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Limitation of Liability
            </h2>
            <p className={`text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
              To the maximum extent permitted by law, LeafLens shall not be liable for any indirect, 
              incidental, special, or consequential damages resulting from your use of our service, 
              including but not limited to crop loss, agricultural damage, or economic losses.
            </p>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Service Availability
            </h2>
            <p className={`text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
              We strive to maintain high service availability but cannot guarantee uninterrupted access. 
              We may temporarily suspend the service for maintenance, updates, or other operational reasons.
            </p>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Changes to Terms
            </h2>
            <p className={`text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting. Your continued use of the service constitutes acceptance of any modifications.
            </p>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Contact Information
            </h2>
            <p className={`text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className={`mt-4 space-y-2 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
              <p><strong>Email:</strong> legal@leaflens.ai</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Agriculture Street, Farm City, FC 12345</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
