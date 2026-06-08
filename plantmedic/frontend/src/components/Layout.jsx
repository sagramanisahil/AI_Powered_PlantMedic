import { useEffect, useId, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import { clearCurrentUser, getCurrentUser, setCurrentUser } from '../storage'
import { auth, firebaseInitError } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { t } from '../translations'
import FloatingChatbot from './FloatingChatbot'
import LanguageToggle from './LanguageToggle'
import LeafLensLogo from './LeafLensLogo'

const navClass = ({ isActive }) =>
  `pm-navlink ${isActive ? 'pm-navlink-active' : ''}`

export default function Layout({ children }) {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const [mobileOpen, setMobileOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const titleId = useId()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    // If Firebase `auth` failed to initialize, skip attaching listeners
    if (!auth) {
      setLoading(false)
      setUser(null)
      clearCurrentUser()
      return
    }

    let unsubscribe = () => {}
    try {
      unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setLoading(false)
        if (firebaseUser) {
          const userData = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
            photoURL: firebaseUser.photoURL
          }
          setUser(userData)
          setCurrentUser(userData)
        } else {
          setUser(null)
          clearCurrentUser()
        }
      })
    } catch (e) {
      console.error('Auth listener error:', e)
      setLoading(false)
      setUser(null)
      clearCurrentUser()
    }

    return () => {
      try {
        unsubscribe()
      } catch (e) {
        // ignore
      }
    }
  }, [])

  const handleSignOut = async () => {
    if (!auth) {
      // If auth isn't initialized just navigate home
      navigate('/')
      return
    }

    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {firebaseInitError && (
        <div className="w-full bg-yellow-100 border-b border-yellow-200 text-yellow-900 text-sm">
          <div className="mx-auto max-w-6xl px-4 py-2">
            Firebase not configured: {firebaseInitError}. To enable Google sign-in, set VITE_FIREBASE_* env vars and add localhost to OAuth authorized domains.
          </div>
        </div>
      )}
      <header className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2">
              <LeafLensLogo />
            </Link>
            <div className="flex items-center gap-2">
              <nav className="hidden flex-1 flex-wrap items-center justify-end gap-1 sm:flex sm:gap-2" aria-label="Main">
                <NavLink to="/" className={navClass} end>
                  {t('navHome', lang)}
                </NavLink>
                <NavLink to="/diagnose" className={navClass}>
                  {t('navDiagnose', lang)}
                </NavLink>
                <NavLink to="/chat" className={navClass}>
                  {t('navChat', lang)}
                </NavLink>
                <NavLink to="/dashboard" className={navClass}>
                  {t('navDashboard', lang)}
                </NavLink>
                <NavLink to="/about" className={navClass}>
                  {t('navAbout', lang)}
                </NavLink>
                <LanguageToggle className="ms-1" />
                {loading ? (
                  <div className="pm-btn-secondary px-4 py-2 text-xs">
                    {t('loading', lang)}
                  </div>
                ) : user ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-earth-600">{t('welcomePrefix', lang)} {user.name}</span>
                    <button className="pm-btn-secondary px-3 py-1 text-xs" onClick={handleSignOut}>
                      {t('signOut', lang)}
                    </button>
                  </div>
                ) : (
                  <Link to="/signin" className="pm-btn-primary px-4 py-2 text-xs">
                    {t('signIn', lang)}
                  </Link>
                )}
              </nav>
              <button
                type="button"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-leaf-200 bg-white text-earth-800 shadow-sm transition hover:bg-leaf-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500 sm:hidden"
                aria-label="Open menu"
                aria-haspopup="dialog"
                aria-controls="mobile-menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 4 6.5ZM4 12a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 4 12Zm0 5.5A1.5 1.5 0 0 1 5.5 16h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 4 17.5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        <div key={location.pathname} className="animate-fade-up motion-reduce:animate-none">
          {children}
        </div>
      </main>

      <footer className="mt-10 border-t border-leaf-200 bg-[#1B1D1A] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold"><span className="text-[#97C459]">Leaf</span><span className="text-[#185FA5] font-light">Lens</span></p>
            <p className="mt-3 text-sm text-white/70">{t('footerTaglineShort', lang)}</p>
          </div>
          <div>
            <p className="font-semibold">{t('footerQuickLinks', lang)}</p>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <Link to="/">{t('navHome', lang)}</Link>
              <Link to="/chat">{t('navChat', lang)}</Link>
              <Link to="/dashboard">{t('navDashboard', lang)}</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold">{t('footerResources', lang)}</p>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <Link to="/about">{t('navAbout', lang)}</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold">{t('footerSupport', lang)}</p>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <Link to="/help-center">Help Center</Link>
              <Link to="/faqs">FAQs</Link>
              <Link to="/community">Community</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
          {t('footerText', lang)}
        </div>
      </footer>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 sm:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`absolute top-0 h-full w-[min(92vw,380px)] bg-white shadow-2xl outline-none ${
              isUr ? 'left-0' : 'right-0'
            }`}
          >
            <div className="flex items-center justify-between gap-2 border-b border-leaf-200 px-4 py-4">
              <p id={titleId} className={`text-base font-semibold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
                {t('appName', lang)}
              </p>
              <button
                type="button"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-leaf-200 bg-white text-earth-800 shadow-sm transition hover:bg-leaf-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M18.3 5.71a1 1 0 0 1 0 1.42L13.41 12l4.89 4.88a1 1 0 1 1-1.42 1.42L12 13.41l-4.88 4.89a1 1 0 1 1-1.42-1.42L10.59 12 5.7 7.12A1 1 0 0 1 7.12 5.7L12 10.59l4.88-4.88a1 1 0 0 1 1.42 0Z"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4 px-4 py-5">
              <div className="flex justify-between">
                <LanguageToggle />
              </div>

              <nav className="grid gap-2" aria-label="Mobile">
                <NavLink to="/" className={navClass} end>
                  {t('navHome', lang)}
                </NavLink>
                <NavLink to="/diagnose" className={navClass}>
                  {t('navDiagnose', lang)}
                </NavLink>
                <NavLink to="/about" className={navClass}>
                  {t('navAbout', lang)}
                </NavLink>
                <NavLink to="/chat" className={navClass}>
                  AI Chat
                </NavLink>
                <NavLink to="/dashboard" className={navClass}>
                  Dashboard
                </NavLink>
              </nav>

              <div className="border-t border-leaf-200 pt-4">
                {loading ? (
                  <div className="pm-btn-secondary w-full text-center">
                    Loading...
                  </div>
                ) : user ? (
                  <div className="space-y-2">
                    <div className="text-sm text-earth-600 text-center">
                      Welcome, {user.name}
                    </div>
                    <button 
                      onClick={handleSignOut}
                      className="pm-btn-secondary w-full"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link to="/signin" className="pm-btn-primary w-full text-center block">
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <FloatingChatbot />
    </div>
  )
}
