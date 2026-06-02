import { useLanguage } from '../LanguageContext'
import { t } from '../translations'

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={`inline-flex rounded-xl border border-leaf-200 bg-white p-0.5 shadow-sm ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`min-h-[44px] min-w-[44px] rounded-lg px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500 ${
          lang === 'en'
            ? 'bg-leaf-600 text-white shadow'
            : 'text-earth-700 hover:bg-leaf-50'
        }`}
      >
        {t('langEnglish', lang)}
      </button>
      <button
        type="button"
        onClick={() => setLang('ur')}
        aria-pressed={lang === 'ur'}
        className={`min-h-[44px] min-w-[44px] rounded-lg px-3 py-2 text-sm font-semibold font-urdu transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500 ${
          lang === 'ur'
            ? 'bg-leaf-600 text-white shadow'
            : 'text-earth-700 hover:bg-leaf-50'
        }`}
      >
        {t('langUrdu', lang)}
      </button>
    </div>
  )
}
