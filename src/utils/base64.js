/**
 * Utilities for working with base64 image assets.
 * In production these would be imported directly from assets/
 * or embedded via Vite's `?inline` query.
 */

/**
 * Converts a File or Blob to a base64 data URI.
 * @param {File|Blob} file
 * @returns {Promise<string>}
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsDataURL(file)
  })
}

/**
 * Prefixes a raw base64 string with the correct data URI scheme.
 * @param {string} base64 - raw base64 string without data: prefix
 * @param {string} mimeType - e.g. 'image/jpeg'
 * @returns {string}
 */
export function toDataURI(base64, mimeType = 'image/jpeg') {
  if (base64.startsWith('data:')) return base64
  return `data:${mimeType};base64,${base64}`
}

/**
 * Returns true if the string looks like a valid data URI.
 */
export function isDataURI(str) {
  return typeof str === 'string' && str.startsWith('data:')
}
