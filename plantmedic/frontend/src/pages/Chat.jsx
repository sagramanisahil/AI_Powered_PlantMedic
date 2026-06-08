import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { sendChatMessage, predictLeafImage } from '../api'
import { getCurrentUser, getLastReport, saveLastReport, saveChatHistory, getChatHistory } from '../storage'
import { saveChatToFirestore, loadChatsFromFirestore, saveScanToFirestore } from '../firebase'

const formatDate = (dateValue) => {
  try {
    const date = dateValue?.toDate ? dateValue.toDate() : new Date(dateValue)
    if (isNaN(date.getTime())) return "Today"
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  } catch {
    return "Today"
  }
}

// Replace **text** with <strong>text</strong>
const formatMessage = (text) => {
  const s = (typeof text === 'string' ? text : String(text || ''))
  return s.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
}

const starter = {
  id: 'init',
  role: 'assistant',
  content: "Assalam-o-Alaikum! I'm LeafLens AI. Show me your plant or ask me anything about crop health.",
  createdAt: Date.now(),
}

export default function Chat() {
  const navigate = useNavigate()
  const galleryInputRef = useRef(null)
  const messagesEndRef = useRef(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [conversations, setConversations] = useState([])
  const [activeConversation, setActiveConversation] = useState(null)
  const [messages, setMessages] = useState([
  {
    role: "assistant",
    content: "Assalam-o-Alaikum! I'm LeafLens AI. Show me your plant or ask me anything about crop health.",
    timestamp: new Date()
  }
])
  const [text, setText] = useState('')
  const [messageLoading, setMessageLoading] = useState(false)
  const report = getLastReport()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, messageLoading])

  useEffect(() => {
    if (!auth) {
      // No firebase: treat as anonymous
      setLoading(false)
      setUser(null)
      const history = getChatHistory()
      if (history.length > 0) {
        const defaultConv = {
          id: 'default',
          title: 'Chat with LeafLens AI',
          messages: history,
          createdAt: Date.now()
        }
        setConversations([defaultConv])
        setActiveConversation(defaultConv)
        setMessages(history)
      } else {
        const newConv = {
          id: 'default',
          title: 'New Chat',
          messages: [starter],
          createdAt: Date.now()
        }
        setConversations([newConv])
        setActiveConversation(newConv)
        setMessages([starter])
        saveChatHistory([starter])
      }
      return
    }

    let unsubscribe = () => {}
    try {
      unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        setLoading(false)
        if (!firebaseUser) {
        // Allow anonymous access to Chat: load local chat history and continue
          setUser(null)
          const history = getChatHistory()
          if (history.length > 0) {
            const defaultConv = {
              id: 'default',
              title: 'Chat with LeafLens AI',
              messages: history,
              createdAt: Date.now()
            }
            setConversations([defaultConv])
            setActiveConversation(defaultConv)
            setMessages(history)
          } else {
            const newConv = {
              id: 'default',
              title: 'New Chat',
              messages: [starter],
              createdAt: Date.now()
            }
            setConversations([newConv])
            setActiveConversation(newConv)
            setMessages([starter])
            saveChatHistory([starter])
          }
          return
      }

      // Authenticated user: load Firestore-backed chat history (with fallback to localStorage)
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
        photoURL: firebaseUser.photoURL
      })
      try {
        const firestoreConvs = await loadChatsFromFirestore(firebaseUser.uid)
        if (firestoreConvs.length > 0) {
          setConversations(firestoreConvs)
          setActiveConversation(firestoreConvs[0])
          setMessages(firestoreConvs[0].messages || [])
        } else {
          const history = getChatHistory()
          if (history.length > 0) {
            const defaultConv = {
              id: 'default',
              title: 'Chat with LeafLens AI',
              messages: history,
              createdAt: Date.now()
            }
            setConversations([defaultConv])
            setActiveConversation(defaultConv)
            setMessages(history)
          } else {
            const newConv = {
              id: 'default',
              title: 'New Chat',
              messages: [starter],
              createdAt: Date.now()
            }
            setConversations([newConv])
            setActiveConversation(newConv)
            setMessages([starter])
          }
        }
      } catch (error) {
        console.error('Error loading from Firestore, using localStorage:', error)
        const history = getChatHistory()
        if (history.length > 0) {
          const defaultConv = {
            id: 'default',
            title: 'Chat with LeafLens AI',
            messages: history,
            createdAt: Date.now()
          }
          setConversations([defaultConv])
          setActiveConversation(defaultConv)
          setMessages(history)
        } else {
          const newConv = {
            id: 'default',
            title: 'New Chat',
            messages: [starter],
            createdAt: Date.now()
          }
          setConversations([newConv])
          setActiveConversation(newConv)
          setMessages([starter])
        }
      }
    })
    } catch (e) {
      console.error('Auth listener setup failed in Chat:', e)
    }

    return () => {
      try {
        unsubscribe()
      } catch (e) {}
    }
  }, [navigate])

  const createNewChat = () => {
    const newConv = {
      id: `conv-${Date.now()}`,
      title: 'New Chat',
      messages: [starter],
      createdAt: Date.now()
    }
    setConversations(prev => [newConv, ...prev])
    setActiveConversation(newConv)
    setMessages([starter])
    saveChatHistory([starter])
  }

  const selectConversation = (conv) => {
    setActiveConversation(conv)
    setMessages(conv.messages)
  }

  const push = async (message) => {
    if (!activeConversation) {
      await createNewChat()
    }
    if (!activeConversation) return

    const updatedMessages = [...(activeConversation.messages || []), message]

    // Generate title from first user message
    const firstUserMsg = updatedMessages.find(m => m.role === "user")
    const title = firstUserMsg?.content?.substring(0, 35) || "New Chat"

    const updatedConv = {
      ...activeConversation,
      title,
      messages: updatedMessages,
      updatedAt: Date.now()
    }

    // Update UI immediately
    setActiveConversation(updatedConv)
    setConversations(prev => prev.map(conv => 
      conv.id === activeConversation.id ? updatedConv : conv
    ))
    setMessages(updatedMessages)

    // Persist: to Firestore if logged in, otherwise to localStorage
    try {
      if (user) {
        await saveChatToFirestore(user.uid, activeConversation.id, updatedMessages)
      } else {
        saveChatHistory(updatedMessages)
      }
    } catch (error) {
      console.error('Failed to persist chat:', error)
    }
  }

  const send = async () => {
    const q = text.trim()
    if (!q || messageLoading) return
    
    // Add user message immediately
    const userMessage = { role: "user", content: q, timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])
    setText("")
    setMessageLoading(true)
    
    try {
      const reply = await sendChatMessage(
        q,      // the message user typed
        report,     // scan result if available
        messages  // array of previous messages
      )
      
      // Add AI message
      const aiMessage = { role: "assistant", content: reply, timestamp: new Date() }
      setMessages(prev => [...prev, aiMessage])
      
      // Save to Firestore if user is logged in
      if (activeConversation) {
        const updatedMessages = [...(activeConversation.messages || messages), userMessage, aiMessage]
        if (user) {
          try {
            await saveChatToFirestore(user.uid, activeConversation.id, updatedMessages)
          } catch (error) {
            console.error('Failed to save chat to Firestore:', error)
          }
        } else {
          // persist locally for anonymous users
          try {
            saveChatHistory(updatedMessages)
          } catch (err) {
            console.error('Failed to save chat to localStorage:', err)
          }
        }
      }
    // FIXED: removed a stray extra closing brace '}' here that previously
    // caused a "Missing catch or finally clause" parse error. The outer
    // try/catch is now balanced. (This was the parsing error reported near line ~215.)
    } catch (err) {
      console.error("Chat failed:", err)
      const errorMessage = { role: "assistant", content: err.message || 'Chat failed. Please try again.', timestamp: new Date() }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setMessageLoading(false)
    }
  }

  const onImage = async (file) => {
    if (!file) return
    push({ id: `${Date.now()}-u`, role: 'user', text: `Uploaded image: ${file.name}`, createdAt: Date.now() })
    setMessageLoading(true)
    try {
      const pred = await predictLeafImage(file)
      saveLastReport(pred)
      const summary = `Detected: ${pred.disease} | Confidence: ${Math.round(pred.confidence * 100)}% | Health: ${Math.round((pred.health_percentage || 0) * 100)}%`
      push({ id: `${Date.now()}-p`, role: 'assistant', text: `${summary}\nTreatment:\n${pred.treatment_en}`, createdAt: Date.now() })
    } catch (err) {
      push({ id: `${Date.now()}-pe`, role: 'assistant', text: err.message || 'Image scan failed.', createdAt: Date.now() })
    } finally {
      setMessageLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-leaf-600"></div>
          <p className="mt-4 text-earth-600">Loading chat...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="chat-layout flex -mx-4 h-[calc(100dvh-13rem)] min-h-[480px] overflow-hidden sm:-mx-6">
      {/* Sidebar */}
      <div className="w-80 border-r border-leaf-200 bg-white flex flex-col">
        <div className="p-6 border-b border-leaf-200">
          <h2 className="text-xl font-semibold text-leaf-900">LeafLens AI Chat</h2>
          <p className="text-sm text-earth-600 mt-1">Ask about your crops</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => selectConversation(conv)}
              className={`p-3 rounded-lg cursor-pointer transition-colors ${
                activeConversation?.id === conv.id
                  ? 'bg-leaf-100 border border-leaf-300'
                  : 'hover:bg-leaf-50 border border-transparent'
              }`}
            >
              <div className="font-medium text-earth-900 truncate">{conv.title}</div>
              <div className="text-sm text-earth-600 mt-1">
                {formatDate(conv.createdAt)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-leaf-200">
          <button
            onClick={createNewChat}
            className="w-full pm-btn-primary"
          >
            New Chat
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-leaf-600 text-white'
                      : 'bg-gray-100 text-earth-900'
                  }`}
                >
                  {(() => {
                    const content = message.content ?? message.text ?? ''
                    if (message.role === 'assistant') {
                      return <span dangerouslySetInnerHTML={{ __html: formatMessage(content) }} />
                    }
                    return content
                  })()}
                </div>
              </div>
            ))}
            {messageLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-earth-900 px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="border-t border-leaf-200 p-4">
          <div className="max-w-3xl mx-auto">
            {/* Suggested prompts */}
            <div className="flex flex-wrap gap-2 mb-3">
              {['Is my plant sick?', 'Suggest fertilizer', 'Seasonal diseases', 'Translate to Urdu', 'Nearby agri store'].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setText(prompt)}
                  className="px-3 py-1 text-xs bg-leaf-50 hover:bg-leaf-100 text-leaf-700 rounded-full transition"
                >
                  {prompt}
                </button>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && send()}
                placeholder="Ask about your crops..."
                className="flex-1 px-4 py-2 border border-leaf-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-500"
                disabled={messageLoading}
              />
              <label className="pm-btn-secondary cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <input type="file" className="hidden" accept="image/*" onChange={(e) => onImage(e.target.files?.[0])} />
              </label>
              <button
                onClick={send}
                disabled={messageLoading || !text.trim()}
                className="pm-btn-primary"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
