import { useCallback, useRef, useState } from 'react'

/**
 * useVoiceCommands — wraps the Web Speech API (webkitSpeechRecognition)
 * to listen for a single utterance and pass the transcript to a handler.
 * Silently no-ops if the browser doesn't support speech recognition.
 */
export function useVoiceCommands(onCommand) {
  const [listening, setListening] = useState(false)
  const recognitionRef = useRef(null)

  const supported = typeof window !== 'undefined' &&
    (window.SpeechRecognition || window.webkitSpeechRecognition)

  const start = useCallback(() => {
    if (!supported) return
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => setListening(true)
    recognition.onend = () => setListening(false)
    recognition.onerror = () => setListening(false)
    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || ''
      if (transcript) onCommand(transcript.toLowerCase().trim())
    }

    recognitionRef.current = recognition
    try {
      recognition.start()
    } catch {
      setListening(false)
    }
  }, [onCommand, supported])

  const stop = useCallback(() => {
    recognitionRef.current?.stop()
    setListening(false)
  }, [])

  return { supported: !!supported, listening, start, stop }
}

/**
 * matchVoiceCommand — maps a free-form transcript to a known command key.
 * Returns null when nothing recognizable was said (ignored, per spec).
 */
export function matchVoiceCommand(transcript) {
  const t = transcript.toLowerCase()
  if (t.includes('open about')) return 'open-about'
  if (t.includes('open project')) return 'open-projects'
  if (t.includes('open resume')) return 'open-resume'
  if (t.includes('open contact')) return 'open-contact'
  if (t.includes('open terminal')) return 'open-terminal'
  if (t.includes('open finder')) return 'open-finder'
  if (t.includes('go home') || t === 'home') return 'go-home'
  if (t.includes('dark mode')) return 'dark-mode'
  if (t.includes('light mode')) return 'light-mode'
  if (t.includes('download resume')) return 'download-resume'
  return null
}
