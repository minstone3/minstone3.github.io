const AUTH_KEY = 'oaxis-news-admin'
const AUTH_EVENT = 'oaxis-news-auth'
const FALLBACK_HASH = 'bb34f33ac8644538733997c49ca3fd3b17b8782cc18daa06936bbec8eb6950f3'

export function getNewsAdminHash() {
  const fromEnv = import.meta.env.VITE_NEWS_ADMIN_HASH
  return typeof fromEnv === 'string' && fromEnv.trim() ? fromEnv.trim() : FALLBACK_HASH
}

export async function hashNewsPassword(password: string) {
  const data = new TextEncoder().encode(password)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

function hashesMatch(left: string, right: string) {
  if (left.length !== right.length) return false
  let mismatch = 0
  for (let i = 0; i < left.length; i += 1) {
    mismatch |= left.charCodeAt(i) ^ right.charCodeAt(i)
  }
  return mismatch === 0
}

export function isNewsAdmin() {
  try {
    return hashesMatch(sessionStorage.getItem(AUTH_KEY) ?? '', getNewsAdminHash())
  } catch {
    return false
  }
}

export function getNewsAdminToken() {
  return isNewsAdmin() ? getNewsAdminHash() : ''
}

export async function loginNewsAdmin(password: string) {
  const hash = await hashNewsPassword(password)
  if (!hashesMatch(hash, getNewsAdminHash())) return false
  sessionStorage.setItem(AUTH_KEY, hash)
  window.dispatchEvent(new Event(AUTH_EVENT))
  return true
}

export function logoutNewsAdmin() {
  sessionStorage.removeItem(AUTH_KEY)
  window.dispatchEvent(new Event(AUTH_EVENT))
}

export function subscribeNewsAdmin(onChange: () => void) {
  window.addEventListener(AUTH_EVENT, onChange)
  return () => window.removeEventListener(AUTH_EVENT, onChange)
}
