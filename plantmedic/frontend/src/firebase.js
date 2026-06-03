import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, query, where, orderBy, limit } from 'firebase/firestore'

// Firebase configuration - prefer Vite env vars in production, fallback to current values
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDRNM7KpH83BMQWoEyVZXGqSdAmmQfQHj0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "leaflens-81f54.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "leaflens-81f54",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "leaflens-81f54.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1039809872546",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1039809872546:web:f3ff3c2ae148feb485cdfb",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-G1V7E32824"
}

// Initialize Firebase
let app, auth, db;

try {
  console.log('Initializing Firebase with config:', firebaseConfig)
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)

  // Configure auth settings
  auth.languageCode = 'en'

  // Enable Email/Password authentication
  auth.settings = {
    signInFlow: 'popup',
    persistence: 'local'
  }

  console.log('Firebase initialized successfully:', {
    projectId: firebaseConfig.projectId,
    authDomain: firebaseConfig.authDomain,
    app: !!app,
    auth: !!auth,
    db: !!db
  })
} catch (error) {
  console.error('Firebase initialization error:', error)
  // Fallback for development
  app = null
  auth = null
  db = null
}

// Firestore functions
export const saveChatToFirestore = async (userId, conversationId, messages) => {
  try {
    await setDoc(doc(db, `users/${userId}/conversations/${conversationId}`), {
      messages,
      updatedAt: new Date(),
      createdAt: new Date()
    })
  } catch (error) {
    console.error('Error saving chat to Firestore:', error)
  }
}

export const loadChatsFromFirestore = async (userId) => {
  try {
    const q = query(
      collection(db, `users/${userId}/conversations`),
      orderBy('updatedAt', 'desc'),
      limit(50)
    )
    const querySnapshot = await getDocs(q)
    const conversations = []
    querySnapshot.forEach((doc) => {
      conversations.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return conversations
  } catch (error) {
    console.error('Error loading chats from Firestore:', error)
    return []
  }
}

export const saveScanToFirestore = async (userId, result) => {
  try {
    if (!db) return null;

    const scanId = `scan-${Date.now()}`
    const diseaseName = result.disease || result.predicted_class || 'Unknown';
    const conf = typeof result.confidence === 'number' ? result.confidence : 0;

    await setDoc(doc(db, `users/${userId}/scans/${scanId}`), {
      disease: diseaseName,
      confidence: conf,
      healthy: Boolean(diseaseName.toLowerCase().includes("healthy")),
      timestamp: new Date(),
      createdAt: new Date().toISOString(),
      created_at: new Date().toISOString(),
      id: scanId
    })
    return scanId
  } catch (error) {
    console.error('Error saving scan to Firestore:', error)
    // Fix 3: Return null instead of throwing so UI doesn't get stuck at "analyzing"
    return null
  }
}

export const loadScansFromFirestore = async (userId) => {
  try {
    const q = query(
      collection(db, `users/${userId}/scans`),
      orderBy('createdAt', 'desc'),
      limit(100)
    )
    const querySnapshot = await getDocs(q)
    const scans = []
    querySnapshot.forEach((doc) => {
      scans.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return scans
  } catch (error) {
    console.error('Error loading scans from Firestore:', error)
    return []
  }
}

export { auth, db }
export default app
