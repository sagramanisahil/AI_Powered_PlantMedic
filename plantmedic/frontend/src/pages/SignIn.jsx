import { useState, useEffect } from "react"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate, Link } from "react-router-dom"
import { useLanguage } from '../LanguageContext'
import { firebaseInitError } from '../firebase'
import { ensureLocalhostForAuth, getAuthErrorMessage } from '../authHelpers'

export default function SignIn() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    ensureLocalhostForAuth()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      if (!auth) throw new Error('Authentication not configured')
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/dashboard")
    } catch (err) {
      setError(getAuthErrorMessage(err, isUr))
    }
    setLoading(false)
  }

  const handleGoogle = async () => {
    setError("")
    if (ensureLocalhostForAuth()) return
    setGoogleLoading(true)
    try {
      if (!auth) throw new Error('Authentication not configured')
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({ prompt: "select_account" })
      await signInWithPopup(auth, provider)
      navigate("/dashboard")
    } catch (err) {
      setError(getAuthErrorMessage(err, isUr))
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f6f9f4",
      padding: "20px"
    }}>
      <div style={{
        background: "white",
        borderRadius: "16px",
        padding: "40px",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          {firebaseInitError && (
            <div style={{ background: '#fff7e6', border: '1px solid #ffecb5', color: '#7a4b00', padding: '8px', borderRadius: 8, marginBottom: 12 }}>
              Firebase not configured: {firebaseInitError}. Google sign-in will not work until you set VITE_FIREBASE_* env vars and add localhost to OAuth domains.
            </div>
          )}
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1a2e1a" }}>
            {isUr ? "خوش آمدید" : "Welcome Back"}
          </h2>
          <p style={{ color: "#666", marginTop: "8px" }}>
            {isUr ? "اپنے LeafLens اکاؤنٹ میں سائن ان کریں" : "Sign in to your LeafLens account"}
          </p>
        </div>

        {error && (
          <div style={{
            background: "#fff0f0", border: "1px solid #ffcccc",
            borderRadius: "8px", padding: "12px", marginBottom: "16px",
            color: "#cc0000", fontSize: "14px"
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "6px", 
              fontWeight: "600", fontSize: "14px", color: "#333" }}>
              {isUr ? "ای میل پتہ" : "Email Address"}
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={isUr ? "اپنا ای میل درج کریں" : "Enter your email"}
              required
              style={{
                width: "100%", padding: "12px 16px",
                border: "1.5px solid #e0e8dc", borderRadius: "8px",
                fontSize: "14px", outline: "none", boxSizing: "border-box"
              }}
            />
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label style={{ display: "block", marginBottom: "6px",
              fontWeight: "600", fontSize: "14px", color: "#333" }}>
              {isUr ? "پاس ورڈ" : "Password"}
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder={isUr ? "اپنا پاس ورڈ درج کریں" : "Enter your password"}
              required
              style={{
                width: "100%", padding: "12px 16px",
                border: "1.5px solid #e0e8dc", borderRadius: "8px",
                fontSize: "14px", outline: "none", boxSizing: "border-box"
              }}
            />
          </div>
          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <Link to="/forgot-password" 
              style={{ color: "#2d7a22", fontSize: "13px", textDecoration: "none" }}>
              {isUr ? "پاس ورڈ بھول گئے؟" : "Forgot Password?"}
            </Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%", padding: "13px",
              background: loading ? "#88bb84" : "#2d7a22",
              color: "white", border: "none", borderRadius: "8px",
              fontSize: "15px", fontWeight: "600", cursor: "pointer"
            }}
          >
            {loading ? (isUr ? "سائن ان ہو رہا ہے..." : "Signing in...") : (isUr ? "سائن ان کریں" : "Sign In")}
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogle}
          disabled={googleLoading || loading}
          style={{
            width: "100%", padding: "13px", marginTop: "12px",
            background: "white", border: "1.5px solid #e0e8dc",
            borderRadius: "8px", fontSize: "15px", fontWeight: "600",
            cursor: googleLoading || loading ? "not-allowed" : "pointer",
            opacity: googleLoading || loading ? 0.7 : 1,
            color: "#333", display: "flex",
            alignItems: "center", justifyContent: "center", gap: "8px"
          }}
        >
          <span>🔵</span> {googleLoading
            ? (isUr ? "گوگل سائن ان ہو رہا ہے..." : "Signing in with Google...")
            : (isUr ? "گوگل کے ساتھ سائن ان کریں" : "Sign in with Google")}
        </button>

        <p style={{ textAlign: "center", marginTop: "24px", 
          fontSize: "14px", color: "#666" }}>
          {isUr ? "اکاؤنٹ نہیں ہے؟" : "Don't have an account?"}{" "}
          <Link to="/signup" 
            style={{ color: "#2d7a22", fontWeight: "600", textDecoration: "none" }}>
            {isUr ? "سائن اپ کریں" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  ) 
}
