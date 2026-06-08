import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useLanguage } from '../LanguageContext'
import { getApiBase, predictLeafImage, formatDiseaseName } from '../api'
import { findDiseaseByApiLabel } from '../diseasesData'
import { addScanHistory, saveLastReport } from '../storage'
import { saveScanToFirestore } from '../firebase'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { t } from '../translations'
import Spinner from '../components/Spinner'

const ACCEPT = 'image/png,image/jpeg,image/jpg,image/webp'
const MAX_BYTES = 10 * 1024 * 1024

export default function Diagnose() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const inputRef = useRef(null)
  const errorId = useId()
  const helpId = useId()
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [user, setUser] = useState(null)

  // Get current user for Firestore
  useEffect(() => {
    if (!auth) {
      setUser(null)
      console.log('Auth not initialized; running anonymously')
      return
    }

    let unsubscribe = () => {}
    try {
      unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser)
        console.log('User state changed:', firebaseUser?.uid || 'No user')
      })
    } catch (e) {
      console.error('Auth listener error in Diagnose:', e)
    }
    return () => {
      try {
        unsubscribe()
      } catch (e) {}
    }
  }, [])

  const revokePreview = useCallback(() => {
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev)
      return null
    })
  }, [])

  const resetAll = useCallback(() => {
    setFile(null)
    revokePreview()
    setError(null)
    setResult(null)
    setLoading(false)
    if (inputRef.current) inputRef.current.value = ''
  }, [revokePreview])

  const onPick = useCallback(
    (f) => {
      setError(null)
      setResult(null)
      if (!f) return
      if (!['image/png', 'image/jpeg'].includes(f.type)) {
        setError(t('errInvalidType', lang))
        return
      }
      if (typeof f.size === 'number' && f.size > MAX_BYTES) {
        setError(t('errFileTooLarge', lang))
        return
      }
      setFile(f)
      revokePreview()
      setPreviewUrl(URL.createObjectURL(f))
    },
    [lang, revokePreview]
  )

  const onDrop = useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()
      const f = e.dataTransfer?.files?.[0]
      onPick(f)
    },
    [onPick]
  )


  const onAnalyze = async () => {
    setError(null)
    if (!file) {
      setError(t('errNoImage', lang))
      return
    }
    if (loading) return
    setLoading(true)
    setResult(null)
    try {

      const data = await predictLeafImage(file)

      console.log('Analysis successful:', data)
      setResult(data)
      addScanHistory(data)
      saveLastReport(data)


      // Save to Firestore if user is logged in
      if (user) {
        try {
          await saveScanToFirestore(user.uid, data)
          console.log('Scan saved to Firestore for user:', user.uid)
        } catch (error) {
          console.error('Failed to save scan to Firestore:', error)
        }
      }

    } catch (e) {
      console.error('Analysis failed:', e)
      const base = t('errNetwork', lang)
      const apiBase = getApiBase()
      if (e.message?.includes('Failed to fetch') || e.name === 'TypeError') {
        setError(`${base}${apiBase}?`)
      } else {
        setError(e.message || t('errGeneric', lang))
      }
    } finally {
      setLoading(false)
    }
  }
  console.log('result is ' + result);
  const treatmentText =
    result && (lang === 'ur' ? result.treatment_ur ?? result.treatment_en : result.treatment_en ?? result.treatment_ur)

  const diseaseMatch = result?.disease ? findDiseaseByApiLabel(result.disease) : null
  const diseaseUrText = result?.disease_ur ?? diseaseMatch?.nameUr

  return (
    <div className="space-y-10">
      <header className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="text-center sm:text-start">
          <h1 className={`text-3xl font-bold text-leaf-950 ${isUr ? 'font-urdu' : ''}`}>{t('diagnoseTitle', lang)}</h1>
          <p className={`mt-2 text-earth-700 ${isUr ? 'font-urdu leading-relaxed' : ''}`}>{t('diagnoseSubtitle', lang)}</p>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <div
            role="button"
            tabIndex={0}
            aria-describedby={helpId}
            aria-controls="leaf-image-input"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                inputRef.current?.click()
              }
            }}
            onDragOver={(e) => {
              e.preventDefault()
              e.dataTransfer.dropEffect = 'copy'
            }}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
            className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-leaf-300 bg-white p-6 text-center shadow-sm transition hover:border-leaf-500 hover:bg-leaf-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500"
          >
            <input
              ref={inputRef}
              id="leaf-image-input"
              type="file"
              accept={ACCEPT}
              className="hidden"
              onChange={(e) => onPick(e.target.files?.[0])}
              aria-describedby={`${helpId}${error ? ` ${errorId}` : ''}`}
            />
            <span className={`mb-2 text-earth-800 ${isUr ? 'font-urdu leading-relaxed' : ''}`}>{t('dropzoneIdle', lang)}</span>
            <span id={helpId} className={`text-sm text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
              {t('dropzoneHint', lang)} · {t('dropzoneTip', lang)}
            </span>
          </div>

          {previewUrl && (
            <div className="overflow-hidden rounded-xl border border-leaf-200 bg-earth-50 shadow-inner">
              <img
                src={previewUrl}
                alt={lang === 'ur' ? 'منتخب پتے کی تصویر' : 'Selected leaf image preview'}
                className="mx-auto max-h-72 w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {file && (
              <button
                type="button"
                onClick={resetAll}
                className="pm-btn-secondary px-5 py-2.5 text-sm font-medium"
              >
                {t('changeImage', lang)}
              </button>
            )}
            <button
              type="button"
              onClick={onAnalyze}
              disabled={loading || !file}
              className="pm-btn-primary min-w-[140px] gap-2 py-2.5"
            >
              {loading ? (
                <>
                  <Spinner className="h-5 w-5 border-2 border-white/30 border-t-white" />
                  {t('analyzing', lang)}
                </>
              ) : (
                t('analyze', lang)
              )}
            </button>
          </div>

          {error && (
            <div
              role="alert"
              id={errorId}
              aria-live="assertive"
              className={`rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-900 ${isUr ? 'font-urdu' : ''}`}
            >
              {error}
            </div>
          )}
        </div>

        <div
          className="pm-card p-6"
          aria-live="polite"
          aria-busy={loading}
        >
          <h2 className={`mb-4 text-xl font-bold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>{t('resultTitle', lang)}</h2>

          {!result && !loading && (
            <p className={`text-earth-600 ${isUr ? 'font-urdu leading-relaxed' : ''}`}>
              {t('resultIdle', lang)}
            </p>
          )}

          {loading && (
            <div className="flex flex-col items-center gap-4 py-12">
              <Spinner />
              <p className={`text-earth-700 ${isUr ? 'font-urdu' : ''}`}>{t('analyzing', lang)}</p>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-6">
              {!result.success && (
                <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-900">
                  {result.message || (lang === 'ur' ? 'غلط تصویر۔ براہِ کرم صرف پودے کے پتے کی واضح تصویر اپ لوڈ کریں۔' : 'Invalid image. Please upload a clear image of a plant leaf only.')}
                </div>
              )}
              <div>
                <p className={`text-sm font-medium text-earth-600 ${isUr ? 'font-urdu' : ''}`}>{t('detectedLabel', lang)}</p>
                <p className="mt-1 text-lg font-semibold text-earth-900" dir="ltr">
                  {formatDiseaseName(result.disease)}
                </p>
                {diseaseUrText && (
                  <p className="mt-2 font-urdu text-lg text-earth-800" dir="rtl">
                    {diseaseUrText}
                  </p>
                )}
              </div>
              <div>
                <p className={`text-sm font-medium text-earth-600 ${isUr ? 'font-urdu' : ''}`}>{t('confidenceLabel', lang)}</p>
                <p className="mt-1 text-2xl font-bold text-leaf-700">
                  {formatConfidence(result.confidence)}
                </p>
              </div>
              <div>
                <p className={`text-sm font-medium text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? 'صحت کا اندازہ' : 'Estimated plant health'}
                </p>
                <p className="mt-1 text-2xl font-bold text-[#185FA5]">
                  {formatConfidence(result.health_percentage)}
                </p>
              </div>
              <div>
                <p className={`mb-2 text-sm font-medium text-earth-600 ${isUr ? 'font-urdu' : ''}`}>{t('treatmentLabel', lang)}</p>
                <div
                  className={`max-w-none rounded-xl bg-leaf-50/80 p-4 text-base text-earth-900 ${isUr ? 'font-urdu text-right leading-relaxed' : ''
                    }`}
                >
                  <TreatmentContent text={treatmentText} isUrdu={isUr} />
                </div>
              </div>
              <button
                type="button"
                onClick={resetAll}
                className="pm-btn-secondary w-full border-2 border-leaf-500 text-leaf-800"
              >
                {t('uploadAnother', lang)}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function formatConfidence(c) {
  if (c == null || Number.isNaN(Number(c))) return '—'
  const n = Number(c)
  const pct = n <= 1 && n >= 0 ? Math.round(n * 100) : Math.round(n)
  return `${Math.min(100, Math.max(0, pct))}%`
}

function TreatmentContent({ text, isUrdu }) {
  if (!text || !String(text).trim()) {
    return <p className={isUrdu ? 'font-urdu' : ''}>—</p>
  }
  const lines = String(text).split(/\n+/)
  return (
    <div className="space-y-2 whitespace-pre-wrap">
      {lines.map((line, i) => (
        <p key={i} className={isUrdu ? 'font-urdu' : ''}>
          {line}
        </p>
      ))}
    </div>
  )
}
