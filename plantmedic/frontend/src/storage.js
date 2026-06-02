const USER_KEY = 'leaflens-user'
const REPORT_KEY = 'leaflens-last-report'
const CHAT_KEY = 'leaflens-chat-history'
const SCAN_KEY = 'leaflens-scan-history'

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY) || 'null')
  } catch {
    return null
  }
}

export function setCurrentUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function clearCurrentUser() {
  localStorage.removeItem(USER_KEY)
}

export function saveLastReport(report) {
  localStorage.setItem(REPORT_KEY, JSON.stringify(report))
}

export function getLastReport() {
  try {
    return JSON.parse(localStorage.getItem(REPORT_KEY) || 'null')
  } catch {
    return null
  }
}

export function getChatHistory() {
  try {
    return JSON.parse(localStorage.getItem(CHAT_KEY) || '[]')
  } catch {
    return []
  }
}

export function saveChatHistory(history) {
  localStorage.setItem(CHAT_KEY, JSON.stringify(history))
}

export function getScanHistory() {
  try {
    return JSON.parse(localStorage.getItem(SCAN_KEY) || '[]')
  } catch {
    return []
  }
}

export function addScanHistory(item) {
  const list = getScanHistory()
  const next = [{ ...item, id: `${Date.now()}`, created_at: new Date().toISOString() }, ...list]
  localStorage.setItem(SCAN_KEY, JSON.stringify(next))
  // Notify other parts of the app (same-window listeners) that a scan was added
  try {
    window.dispatchEvent(new CustomEvent('leaflens:scanAdded', { detail: next[0] }))
  } catch (e) {
    // ignore in non-browser environments
  }
  return next
}
