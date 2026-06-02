import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { getScanHistory, getChatHistory } from '../storage'
import { loadScansFromFirestore, loadChatsFromFirestore } from '../firebase'
import { useLanguage } from '../LanguageContext'

export default function Dashboard() {
  const navigate = useNavigate()
  const { lang, isUrdu } = useLanguage()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [scans, setScans] = useState([])
  const [chats, setChats] = useState([])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(false)
      if (!firebaseUser) {
        navigate('/signin')
        return
      }
      
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
        photoURL: firebaseUser.photoURL
      })
      
      // Load user data from Firestore
      try {
        const firestoreScans = await loadScansFromFirestore(firebaseUser.uid)
        const firestoreChats = await loadChatsFromFirestore(firebaseUser.uid)
        
        if (firestoreScans.length > 0) {
          setScans(firestoreScans)
        } else {
          // Fallback to localStorage if Firestore is empty
          setScans(getScanHistory())
        }
        
        if (firestoreChats.length > 0) {
          setChats(firestoreChats)
        } else {
          // Fallback to localStorage if Firestore is empty
          setChats(getChatHistory())
        }
      } catch (error) {
        console.error('Error loading from Firestore, using localStorage:', error)
        // Fallback to localStorage
        setScans(getScanHistory())
        setChats(getChatHistory())
      }
    })

    return () => unsubscribe()
  }, [navigate])

  // Listen for local scan additions and refresh scans list
  useEffect(() => {
    const onScanAdded = () => {
      try {
        const stored = getScanHistory()
        setScans(stored)
      } catch (e) {
        console.error('Error updating scans after addition:', e)
      }
    }
    window.addEventListener('leaflens:scanAdded', onScanAdded)
    return () => window.removeEventListener('leaflens:scanAdded', onScanAdded)
  }, [])

  const total = scans.length
  const diseased = scans.filter((s) => !String(s.disease || '').toLowerCase().includes('healthy')).length
  const healthy = total - diseased
  const avgHealth = (() => {
    if (total === 0) return 0
    const sum = scans.reduce((sum, s) => {
      let v = Number(s.health_percentage ?? 0)
      if (Number.isNaN(v)) return sum
      // Normalize values: backend uses 0..1, but some legacy entries may be 0..100
      if (v > 1) v = v / 100
      // Clamp each value to 0..1 to avoid negatives or >100%
      v = Math.min(1, Math.max(0, v))
      return sum + v
    }, 0)
    const avg = Math.round((sum / total) * 100)
    return Math.min(100, Math.max(0, avg))
  })()

  const stats = [
    ['Total Scans', String(total)],
    ['Diseases Found', String(diseased)],
    ['Healthy Plants', String(healthy)],
    ['Avg Health', `${avgHealth}%`],
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-leaf-600"></div>
          <p className="mt-4 text-earth-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }
  return (
    <section className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-[#27500A] to-[#639922] p-8 text-white">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name || 'Farmer'}</h1>
        <p className="mt-2 text-white/90">Track your latest scans, diseases, and plant health.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([label, value]) => (
          <article key={label} className="pm-card p-5">
            <p className="text-sm text-earth-700">{label}</p>
            <p className="mt-2 text-3xl font-bold text-leaf-900">{value}</p>
          </article>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <section className="pm-card overflow-hidden">
            <div className="border-b border-leaf-200 p-4">
              <h2 className="text-xl font-bold text-leaf-900">Recent Scans</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-leaf-50">
                  <tr>
                    <th className="px-4 py-3 text-left">Plant</th>
                    <th className="px-4 py-3 text-left">Disease</th>
                    <th className="px-4 py-3 text-left">Date</th>
                    <th className="px-4 py-3 text-left">Severity</th>
                    <th className="px-4 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {scans.slice(0, 8).map((scan) => (
                    <tr key={scan.id} className="border-t border-leaf-100">
                      <td className="px-4 py-3 font-medium">Tomato</td>
                      <td className="px-4 py-3">{scan.disease?.replaceAll('___', ' - ').replaceAll('_', ' ')}</td>
                      <td className="px-4 py-3">{new Date(scan.created_at).toLocaleDateString()}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          Math.round(Number(scan.confidence || 0) * 100) > 70 
                            ? 'bg-red-100 text-red-800' 
                            : Math.round(Number(scan.confidence || 0) * 100) > 40 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {Math.round(Number(scan.confidence || 0) * 100) > 70 ? 'High' : 
                           Math.round(Number(scan.confidence || 0) * 100) > 40 ? 'Medium' : 'Low'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Treated
                        </span>
                      </td>
                    </tr>
                  ))}
                  {scans.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-4 py-6 text-center text-earth-600">No scan history yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="pm-card p-6">
            <h3 className="text-lg font-bold text-leaf-900 mb-4">Seasonal Alert</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-sm text-yellow-800 font-medium">Cotton Leaf Curl season</p>
              <p className="text-xs text-yellow-700 mt-1">Protect your cotton crops now</p>
              <button className="mt-3 text-sm text-leaf-600 hover:text-leaf-700 font-medium">
                Learn More →
              </button>
            </div>
          </section>

          <section className="pm-card p-6">
            <h3 className="text-lg font-bold text-leaf-900 mb-4">Saved Treatments</h3>
            <div className="space-y-2">
              {['Tomato Late Blight', 'Cotton Leaf Curl'].map((treatment) => (
                <div key={treatment} className="flex items-center justify-between py-2 border-b border-leaf-100 last:border-0">
                  <span className="text-sm text-earth-800">{treatment}</span>
                  <button className="text-xs text-leaf-600 hover:text-leaf-700">View</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
