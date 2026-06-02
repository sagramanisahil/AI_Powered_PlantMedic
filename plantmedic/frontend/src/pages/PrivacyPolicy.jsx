import { useLanguage } from '../LanguageContext'
import { t } from '../translations'

export default function PrivacyPolicy() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'

  return (
    <div className="min-h-screen bg-leaf-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-4xl font-bold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
                Privacy Policy
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
              Introduction
            </h2>
            <p className={`text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
              At LeafLens, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our AI-powered plant disease 
              detection platform.
            </p>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className={`text-lg font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  Personal Information
                </h3>
                <ul className={`list-disc list-inside space-y-2 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
                  <li>Name and email address (when you create an account)</li>
                  <li>Profile information and preferences</li>
                  <li>Authentication credentials (stored securely)</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold text-leaf-800 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                  Technical Information
                </h3>
                <ul className={`list-disc list-inside space-y-2 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
                  <li>Plant images you upload for analysis</li>
                  <li>Scan results and disease detection data</li>
                  <li>Chat history with our AI assistant</li>
                  <li>Device information and usage patterns</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              How We Use Your Information
            </h2>
            <ul className={`list-disc list-inside space-y-2 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
              <li>To provide and improve our plant disease detection services</li>
              <li>To personalize your experience and save your preferences</li>
              <li>To communicate with you about your account and services</li>
              <li>To analyze and improve our AI models and algorithms</li>
              <li>To ensure the security and integrity of our platform</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Data Security
            </h2>
            <p className={`text-earth-700 leading-relaxed mb-4 ${isUr ? 'font-urdu' : ''}`}>
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className={`list-disc list-inside space-y-2 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
              <li>End-to-end encryption for data transmission</li>
              <li>Secure storage with Firebase Authentication and Firestore</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Compliance with data protection regulations</li>
            </ul>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Your Rights
            </h2>
            <p className={`text-earth-700 leading-relaxed mb-4 ${isUr ? 'font-urdu' : ''}`}>
              You have the following rights regarding your personal information:
            </p>
            <ul className={`list-disc list-inside space-y-2 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
              <li>Access to your personal data</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your account and associated data</li>
              <li>Portability of your data</li>
              <li>Opt-out of non-essential communications</li>
            </ul>
          </section>

          <section className="pm-card p-8">
            <h2 className={`text-2xl font-bold text-leaf-900 mb-4 ${isUr ? 'font-urdu' : ''}`}>
              Contact Us
            </h2>
            <p className={`text-earth-700 leading-relaxed ${isUr ? 'font-urdu' : ''}`}>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
            </p>
            <div className={`mt-4 space-y-2 text-earth-700 ${isUr ? 'font-urdu' : ''}`}>
              <p><strong>Email:</strong> privacy@leaflens.ai</p>
              <p><strong>Address:</strong> 123 Agriculture Street, Farm City, FC 12345</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
