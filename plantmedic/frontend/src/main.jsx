import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ensureLocalhostForAuth } from './authHelpers'

// Firebase Google OAuth only allows `localhost`, not `127.0.0.1`
if (typeof window !== 'undefined') {
  ensureLocalhostForAuth()
}
// Try dynamic import for the PWA register (works only when plugin is present)
if (typeof window !== 'undefined') {
  import('virtual:pwa-register')
    .then(({ registerSW }) => {
      try {
        registerSW({ immediate: true })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('registerSW invocation failed:', e)
      }
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.warn('PWA register not available:', e && e.message)
    })
}
import { LanguageProvider } from './LanguageContext'
import App from './App'
import './index.css'


import ErrorBoundary from './components/ErrorBoundary'

const container = document.getElementById('root')
if (!container) {
  // eslint-disable-next-line no-console
  console.error('Root container not found: #root')
} else {
  createRoot(container).render(
    <StrictMode>
      <ErrorBoundary>
        <HashRouter>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </HashRouter>
      </ErrorBoundary>
    </StrictMode>
  )
}
