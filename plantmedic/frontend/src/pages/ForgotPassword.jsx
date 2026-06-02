import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase'
import { useLanguage } from '../LanguageContext'
import { t } from '../translations'
import Spinner from '../components/Spinner'

export default function ForgotPassword() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const navigate = useNavigate()
  
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    
    // Validation
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }

    setLoading(true)
    try {
      await sendPasswordResetEmail(auth, email)
      setSuccess(true)
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          setError('No account found with this email address')
          break
        case 'auth/invalid-email':
          setError('Invalid email address')
          break
        case 'auth/too-many-requests':
          setError('Too many requests. Please try again later')
          break
        default:
          setError('Failed to send reset email. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-leaf-50">
        <div className="w-full max-w-md">
          <div className="pm-card p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className={`text-xl font-bold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
              Reset Email Sent
            </h2>
            <p className={`text-earth-600 mb-6 ${isUr ? 'font-urdu' : ''}`}>
              We've sent a password reset link to your email address. 
              Please check your inbox and follow the instructions.
            </p>
            <div className="space-y-3">
              <Link
                to="/signin"
                className="pm-btn-primary w-full py-3 font-semibold text-center block"
              >
                Return to Sign In
              </Link>
              <button
                onClick={() => {
                  setSuccess(false)
                  setEmail('')
                }}
                className="pm-btn-secondary w-full py-3 font-semibold"
              >
                Send Another Reset Email
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-leaf-50">
      <div className="w-full max-w-md">
        <div className="pm-card p-8">
          <div className="text-center mb-8">
            <img 
              src="/leaflens-logo.png" 
              alt="LeafLens" 
              className="mx-auto h-16 w-16 rounded-full bg-white p-2 ring-2 ring-leaf-200 mb-4"
            />
            <h1 className={`text-2xl font-bold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
              Reset Your Password
            </h1>
            <p className={`mt-2 text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
              Enter your email address and we'll send you a link to reset your password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium text-earth-700 mb-1 ${isUr ? 'font-urdu' : ''}`}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-leaf-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-900 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="pm-btn-primary w-full py-3 font-semibold"
            >
              {loading ? (
                <>
                  <Spinner className="h-5 w-5 border-2 border-white/30 border-t-white mr-2" />
                  Sending Reset Email...
                </>
              ) : (
                'Send Reset Email'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
              Remember your password?{' '}
              <Link to="/signin" className="text-leaf-600 hover:text-leaf-700 font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
