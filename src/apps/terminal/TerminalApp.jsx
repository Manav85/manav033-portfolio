import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useDesktopStore } from '@/store/useDesktopStore'
import { PROFILE } from '@/apps/about/aboutData'
import { ABOUT_WINDOW_CONFIG } from '@/apps/about/index.js'
import { PROJECTS_WINDOW_CONFIG } from '@/apps/projects/index.js'
import { SKILLS_WINDOW_CONFIG } from '@/apps/skills/index.js'
import { RESUME_WINDOW_CONFIG } from '@/apps/resume/index.js'
import { CONTACT_WINDOW_CONFIG } from '@/apps/contact/index.js'

const WELCOME = [
  "Last login: " + new Date().toDateString(),
  "Welcome to manav@portfolio — type 'help' to see available commands.",
]

export default function TerminalApp() {
  const { openWindow, setTheme, theme, showToast } = useDesktopStore()
  const [lines, setLines] = useState(WELCOME)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const print = useCallback((text) => {
    setLines(prev => [...prev, ...(Array.isArray(text) ? text : [text])])
  }, [])

  const openApp = useCallback((cfg) => {
    if (cfg) openWindow(cfg)
  }, [openWindow])

  const runCommand = useCallback((raw) => {
    const cmd = raw.trim()
    if (!cmd) return
    setLines(prev => [...prev, `manav@portfolio ~ % ${cmd}`])
    const [base, ...args] = cmd.split(' ')
    const lc = base.toLowerCase()

    switch (lc) {
      case 'help':
        print([
          'Available commands:',
          '  about        — open About Me',
          '  projects     — open Projects',
          '  skills       — open Skills',
          '  resume       — open Resume',
          '  contact      — open Contact',
          '  whoami       — print profile summary',
          '  theme dark|light — switch theme',
          '  clear        — clear the terminal',
          '  date         — print current date',
          '  echo [text]  — print text',
        ])
        break
      case 'about':
        openApp(ABOUT_WINDOW_CONFIG); print('Opening About Me…'); break
      case 'projects':
        openApp(PROJECTS_WINDOW_CONFIG); print('Opening Projects…'); break
      case 'skills':
        openApp(SKILLS_WINDOW_CONFIG); print('Opening Skills…'); break
      case 'resume':
        openApp(RESUME_WINDOW_CONFIG); print('Opening Resume…'); break
      case 'contact':
        openApp(CONTACT_WINDOW_CONFIG); print('Opening Contact…'); break
      case 'whoami':
        print([`${PROFILE.name} — ${PROFILE.title}`, PROFILE.tagline])
        break
      case 'theme':
        if (args[0] === 'dark' || args[0] === 'light') {
          setTheme(args[0])
          showToast(`Switched to ${args[0]} mode`)
          print(`Theme set to ${args[0]}.`)
        } else {
          print(`Current theme: ${theme}. Usage: theme dark|light`)
        }
        break
      case 'clear':
        setLines([])
        break
      case 'date':
        print(new Date().toString())
        break
      case 'echo':
        print(args.join(' '))
        break
      default:
        print(`command not found: ${base}`)
    }
  }, [openApp, print, setTheme, theme, showToast])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input)
      setHistory(prev => [...prev, input])
      setHistoryIdx(-1)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const newIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1)
      setHistoryIdx(newIdx)
      setInput(history[newIdx] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx === -1) return
      const newIdx = historyIdx + 1
      if (newIdx >= history.length) {
        setHistoryIdx(-1)
        setInput('')
      } else {
        setHistoryIdx(newIdx)
        setInput(history[newIdx] || '')
      }
    }
  }

  return (
    <div
      className="flex flex-col h-full"
      style={{ background: '#0d0d0f', fontFamily: "'SF Mono', Menlo, Consolas, monospace" }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-y-auto scrollable px-4 py-3" style={{ fontSize: 12.5, lineHeight: 1.6 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ color: l.startsWith('manav@portfolio') ? '#34D399' : '#D1D5DB', whiteSpace: 'pre-wrap' }}>
            {l}
          </div>
        ))}
        <div className="flex items-center" style={{ color: '#34D399' }}>
          <span className="flex-shrink-0">manav@portfolio ~ %&nbsp;</span>
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none"
            style={{ color: '#fff', fontFamily: 'inherit', fontSize: 'inherit' }}
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
