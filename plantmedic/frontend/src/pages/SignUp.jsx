import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
import { useLanguage } from '../LanguageContext'
import { t } from '../translations'
import Spinner from '../components/Spinner'

export default function SignUp() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    // Validation
    if (!formData.fullName.trim()) {
      setError('Please enter your full name')
      return
    }
    if (!formData.email.trim()) {
      setError('Please enter your email')
      return
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    console.log('Starting sign up process...')
    console.log('Form data:', formData)
    
    try {
      // Check if auth is available
      if (!auth) {
        console.error('Firebase auth not available')
        setError('Authentication service not available. Please refresh and try again.')
        setLoading(false)
        return
      }

      console.log('Firebase auth available, attempting to create user...')
      console.log('Email:', formData.email)
      
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email.trim(), 
        formData.password.trim()
      )
      
      console.log('User created successfully:', userCredential.user.uid)
      
      // Update user profile with display name
      await updateProfile(userCredential.user, {
        displayName: formData.fullName.trim()
      })
      
      console.log('User profile updated successfully')
      console.log('Navigating to dashboard...')
      
      // Clear form and navigate
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      
      navigate('/dashboard')
    } catch (err) {
      console.error('Sign up error details:', {
        code: err.code,
        message: err.message,
        email: err.email,
        customData: err.customData
      })
      
      // Enhanced error handling
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('This email is already registered. Try signing in instead.')
          break
        case 'auth/invalid-email':
          setError('Please enter a valid email address.')
          break
        case 'auth/weak-password':
          setError('Password should be at least 6 characters long.')
          break
        case 'auth/network-request-failed':
          setError('Network error. Please check your internet connection.')
          break
        case 'auth/too-many-requests':
          setError('Too many requests. Please try again later.')
          break
        case 'auth/internal-error':
          setError('Internal error. Please try again later.')
          break
        case 'auth/operation-not-allowed':
          setError('Email/Password sign-up is disabled. Please contact support.')
          break
        default:
          setError(`Failed to create account: ${err.message || 'Unknown error occurred'}`)
      }
    } finally {
      setLoading(false)
      console.log('Sign up process completed')
    }
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
              Create Your Account
            </h1>
            <p className={`mt-2 text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
              Join LeafLens to protect your crops
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium text-earth-700 mb-1 ${isUr ? 'font-urdu' : ''}`}>
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-leaf-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium text-earth-700 mb-1 ${isUr ? 'font-urdu' : ''}`}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-leaf-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium text-earth-700 mb-1 ${isUr ? 'font-urdu' : ''}`}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-leaf-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent"
                placeholder="Create a password"
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium text-earth-700 mb-1 ${isUr ? 'font-urdu' : ''}`}>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-leaf-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent"
                placeholder="Confirm your password"
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
                  Creating Account...
                </>
              ) : (
                'Sign Up'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
              Already have an account?{' '}
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
