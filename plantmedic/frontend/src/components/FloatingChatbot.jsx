import { useEffect, useMemo, useRef, useState } from 'react'
import { sendChatMessage } from '../api'

// Replace **text** with <strong>text</strong>
const formatMessage = (text) => {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
}

const initialMessage = {
  role: 'assistant',
  content: 'Assalam-o-Alaikum! I am LeafLens AI Assistant. Ask me about diagnosis results, disease guidance, or how to use LeafLens.',
  timestamp: new Date()
}

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([initialMessage])
  const endRef = useRef(null)

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    
    // Add user message
    const userMessage = { role: "user", content: text, timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setLoading(true)
    
    try {
      const reply = await sendChatMessage(
        text,      // the message user typed
        null,     // no scan result in floating chatbot
        messages  // array of previous messages
      )
      
      // Add AI message
      const aiMessage = { role: "assistant", content: reply, timestamp: new Date() }
      setMessages(prev => [...prev, aiMessage])
    } catch (err) {
      console.error("Chat failed:", err)
      const errorMessage = { role: "assistant", content: err?.message || 'Sorry, I could not respond right now. Please try again.', timestamp: new Date() }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#27500A] to-[#639922] text-white shadow-xl transition hover:scale-105"
        aria-label="Toggle LeafLens AI assistant"
      >
        <span className="text-xl">💬</span>
      </button>

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-2xl border-l border-leaf-200 bg-white shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-leaf-200 px-5 py-4">
            <h2 className="text-lg font-semibold text-leaf-900">LeafLens AI Assistant</h2>
            <button onClick={() => setOpen(false)} className="pm-btn-secondary min-h-[38px] px-3 py-1 text-sm">Close</button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-leaf-50/30 p-4">
            {messages.map((msg, index) => (
              <div key={index} style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                marginBottom: "12px"
              }}>
                <div style={{
                  maxWidth: "75%",
                  padding: "12px 16px",
                  borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  background: msg.role === "user" ? "#2d7a22" : "#f0f4ef",
                  color: msg.role === "user" ? "white" : "#1a2e1a",
                  fontSize: "14px",
                  lineHeight: "1.5"
                }}>
                  {msg.role === "assistant" ? 
                    <span dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }} /> :
                    msg.content
                  }
                </div>
              </div>
            ))}
            {loading && (
              <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "12px"
              }}>
                <div style={{
                  maxWidth: "75%",
                  padding: "12px 16px",
                  borderRadius: "18px 18px 18px 4px",
                  background: "#f0f4ef",
                  color: "#1a2e1a",
                  fontSize: "14px",
                  lineHeight: "1.5"
                }}>
                  LeafLens AI is typing...
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-leaf-200 p-4">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ask LeafLens..."
                className="min-h-[44px] flex-1 rounded-xl border border-leaf-200 px-3 py-2 outline-none focus:ring-2 focus:ring-leaf-500"
              />
              <button onClick={send} disabled={!canSend} className="pm-btn-primary min-h-[44px] px-5">
                Send
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
