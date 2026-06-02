import { useMemo, useState } from 'react'
import { useLanguage } from '../LanguageContext'
import { diseases } from '../diseasesData'
import { t } from '../translations'

export default function Diseases() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return diseases
    return diseases.filter((d) => {
      const hay = [
        d.nameEn,
        d.nameUr,
        d.plantEn,
        d.plantUr,
        d.descEn,
        d.descUr,
      ]
        .join(' ')
        .toLowerCase()
      return hay.includes(s)
    })
  }, [q])

  return (
    <div className="space-y-8">
      <header className="text-center sm:text-start">
        <h1 className={`text-3xl font-bold text-leaf-950 ${isUr ? 'font-urdu' : ''}`}>{t('diseasesTitle', lang)}</h1>
        <p className={`mt-2 max-w-2xl text-earth-700 ${isUr ? 'font-urdu leading-relaxed' : ''}`}>
          {t('diseasesSubtitle', lang)}
        </p>
      </header>

      <div className="max-w-xl">
        <label htmlFor="disease-search" className="sr-only">
          {t('searchPlaceholder', lang)}
        </label>
        <input
          id="disease-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t('searchPlaceholder', lang)}
          className={`w-full min-h-[48px] rounded-xl border border-leaf-200 bg-white px-4 py-3 text-earth-900 shadow-sm outline-none ring-leaf-500 placeholder:text-earth-400 focus:ring-2 ${
            isUr ? 'font-urdu text-right' : ''
          }`}
        />
      </div>

      <p className={`text-sm text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
        {lang === 'ur' ? `دکھائے گئے: ${filtered.length} / ${diseases.length}` : `Showing ${filtered.length} of ${diseases.length}`}
      </p>

      <ul className="grid gap-4 sm:grid-cols-2">
        {filtered.map((d) => (
          <li
            key={d.id}
            className="pm-card pm-card-hover flex flex-col p-5"
          >
            <h2 className={`text-lg font-semibold text-leaf-900 ${isUr ? 'font-urdu text-right' : ''}`}>
              {lang === 'ur' ? d.nameUr : d.nameEn}
            </h2>
            <p className={`mt-1 text-sm text-earth-600 ${isUr ? 'font-urdu text-right' : ''}`}>
              <span className="font-medium text-earth-700">{t('affectedPlant', lang)}:</span>{' '}
              {lang === 'ur' ? d.plantUr : d.plantEn}
            </p>
            <p className={`mt-3 flex-1 text-sm text-earth-800 ${isUr ? 'font-urdu text-right leading-relaxed' : ''}`}>
              {lang === 'ur' ? d.descUr : d.descEn}
            </p>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className={`text-center text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
          {lang === 'ur' ? 'کوئی نتیجہ نہیں۔ تلاش بدل کر دیکھیں۔' : 'No matches. Try a different search.'}
        </p>
      )}
    </div>
  )
}
