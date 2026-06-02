import { useLanguage } from '../LanguageContext'
import { t } from '../translations'

export default function LeafLensLogo() {
  const { lang, isUrdu } = useLanguage()
  const name = t('appName', lang)

  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
        <span className="text-white text-xl">🍃</span>
      </div>
      <span className={`text-2xl font-bold text-gray-800 ${isUrdu ? 'font-urdu' : ''}`}>
        {name}
      </span>
    </div>
  )
}
