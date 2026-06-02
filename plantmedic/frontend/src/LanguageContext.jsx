import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'leaflens-lang'

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  isUrdu: false,
})

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      if (s === 'ur' || s === 'en') return s
    } catch {
      /* ignore */
    }
    return 'en'
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === 'ur' ? 'ur' : 'en'
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr'
  }, [lang])

  // Listen for language changes across tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === STORAGE_KEY && (e.newValue === 'ur' || e.newValue === 'en')) {
        setLangState(e.newValue)
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const setLang = useCallback((next) => {
    setLangState(next === 'ur' ? 'ur' : 'en')
  }, [])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      isUrdu: lang === 'ur',
    }),
    [lang, setLang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
