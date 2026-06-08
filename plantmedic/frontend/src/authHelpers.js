/**
 * Firebase Google sign-in only allows domains listed in the Firebase Console.
 * `localhost` is allowed by default; `127.0.0.1` is not — redirect so OAuth works locally.
 */
export function ensureLocalhostForAuth() {
  if (typeof window === 'undefined') return false
  const { hostname, port, protocol, pathname, search, hash } = window.location
  if (hostname !== '127.0.0.1') return false
  const portPart = port ? `:${port}` : ''
  window.location.replace(`${protocol}//localhost${portPart}${pathname}${search}${hash}`)
  return true
}

export function getAuthErrorMessage(err, isUr = false) {
  const code = err?.code || ''
  if (code === 'auth/unauthorized-domain') {
    return isUr
      ? 'یہ ڈومین Firebase میں مجاز نہیں ہے۔ Firebase Console میں Authentication → Settings → Authorized domains سے localhost شامل کریں۔'
      : 'This domain is not authorized in Firebase. Add "localhost" (and your production domain) under Firebase Console → Authentication → Settings → Authorized domains.'
  }
  if (code === 'auth/popup-closed-by-user') {
    return isUr ? 'سائن ان منسوخ کر دیا گیا۔' : 'Sign-in was cancelled.'
  }
  if (code === 'auth/popup-blocked') {
    return isUr ? 'پاپ اپ بلاک ہو گیا۔ براؤزر میں پاپ اپس کی اجازت دیں۔' : 'Popup was blocked. Please allow popups for this site.'
  }
  if (code === 'auth/user-not-found') return isUr ? 'اکاؤنٹ نہیں ملا۔' : 'No account found.'
  if (code === 'auth/wrong-password') return isUr ? 'غلط پاس ورڈ۔' : 'Wrong password.'
  if (code === 'auth/invalid-credential') return isUr ? 'غلط ای میل یا پاس ورڈ۔' : 'Invalid email or password.'
  return err?.message || (isUr ? 'سائن ان ناکام۔ دوبارہ کوشش کریں۔' : 'Sign in failed. Please try again.')
}
