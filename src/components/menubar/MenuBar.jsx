import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic } from 'lucide-react'
import { zIndex as zTokens } from '@/theme/tokens'
import { useDesktopStore } from '@/store/useDesktopStore'
import { useVoiceCommands, matchVoiceCommand } from '@/hooks/useVoiceCommands'
import { WALLPAPERS } from '@/components/wallpaper/Wallpaper'
import Toast from './Toast'
import HelpModal from './HelpModal'

import { ABOUT_WINDOW_CONFIG } from '@/apps/about/index.js'
import { PROJECTS_WINDOW_CONFIG } from '@/apps/projects/index.js'
import { SKILLS_WINDOW_CONFIG } from '@/apps/skills/index.js'
import { CERTIFICATES_WINDOW_CONFIG } from '@/apps/certificates/index.js'
import { RESUME_WINDOW_CONFIG } from '@/apps/resume/index.js'
import { EDUCATION_WINDOW_CONFIG } from '@/apps/education/index.js'
import { CONTACT_WINDOW_CONFIG } from '@/apps/contact/index.js'
import { TERMINAL_WINDOW_CONFIG } from '@/apps/terminal/index.js'
import { PROFILE } from '@/apps/about/aboutData'

// ── Clock ────────────────────────────────────────────────────
function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const day = days[time.getDay()]
  const date = time.getDate()
  const month = months[time.getMonth()]
  const hrs = time.getHours().toString().padStart(2, '0')
  const mins = time.getMinutes().toString().padStart(2, '0')
  const secs = time.getSeconds().toString().padStart(2, '0')

  return (
    <span className="text-white font-medium select-none" style={{ fontSize: 13, letterSpacing: '0.01em' }}>
      {day} {month} {date} &nbsp;{hrs}:{mins}:{secs}
    </span>
  )
}

// ── Battery SVG ──────────────────────────────────────────────
function BatteryIcon({ level = 72 }) {
  return (
    <div className="flex items-center gap-1">
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
        <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="white" strokeOpacity="0.9" strokeWidth="1"/>
        <rect x="22" y="3.5" width="2.5" height="5" rx="1" fill="white" fillOpacity="0.7"/>
        <rect x="1.5" y="1.5" width={Math.round(19 * level / 100)} height="9" rx="1.5"
          fill={level > 20 ? 'white' : '#FF3B30'} fillOpacity="0.9"/>
      </svg>
      <span className="text-white font-medium" style={{ fontSize: 12, opacity: 0.9 }}>{level}%</span>
    </div>
  )
}

// ── WiFi SVG ─────────────────────────────────────────────────
function WiFiIcon() {
  return (
    <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
      <path d="M8 11.5C8.55228 11.5 9 11.9477 9 12.5C9 13.0523 8.55228 13.5 8 13.5C7.44772 13.5 7 13.0523 7 12.5C7 11.9477 7.44772 11.5 8 11.5Z" fill="white"/>
      <path d="M4.5 8.5C5.5 7.5 6.7 7 8 7C9.3 7 10.5 7.5 11.5 8.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M1.5 5.5C3.2 3.8 5.5 2.8 8 2.8C10.5 2.8 12.8 3.8 14.5 5.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.7"/>
      <path d="M0 2.5C2.1 0.9 4.9 0 8 0C11.1 0 13.9 0.9 16 2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.4"/>
    </svg>
  )
}

// ── Search icon ──────────────────────────────────────────────
function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.5" strokeOpacity="0.9"/>
      <path d="M10 10L13 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.9"/>
    </svg>
  )
}

// ── Apple logo ───────────────────────────────────────────────
function AppleLogo() {
  return (
    <svg width="14" height="17" viewBox="0 0 14 17" fill="white">
      <path d="M13.2 12.9c-.3.7-.6 1.3-1 1.8-.6.7-1 1.1-1.5 1.1-.4 0-.8-.1-1.4-.4-.6-.3-1.1-.4-1.5-.4-.5 0-1 .1-1.6.4-.6.3-1 .4-1.4.4-.5 0-1-.4-1.6-1.1-.5-.7-.9-1.4-1.2-2.2C1 11.5.7 10.2.7 9c0-1.3.3-2.4.9-3.3.5-.7 1.1-1.1 1.8-1.1.4 0 .8.1 1.4.4.6.2.9.3 1.1.3.2 0 .6-.1 1.2-.4.6-.2 1.1-.3 1.5-.3 1.3 0 2.2.7 2.8 2-.5.3-.9.7-1.2 1.2-.3.5-.4 1-.4 1.5 0 .6.2 1.2.5 1.7.3.5.7.9 1.2 1.2.2.1.3.2.3.3-.1.2-.2.3-.3.4z"/>
      <path d="M9.8 0C9.9.6 9.7 1.2 9.3 1.7c-.3.5-.8.9-1.3 1.1-.1 0-.2 0-.4 0 0-.6.2-1.1.5-1.6C8.5.7 9.1.3 9.8 0z"/>
    </svg>
  )
}

// ── Generic dropdown menu item ──────────────────────────────
function DropdownItem({ label, shortcut, onClick, disabled, divider }) {
  if (divider) {
    return <div style={{ height: 1, background: 'rgba(0,0,0,0.08)', margin: '4px 0' }} />
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full text-left flex items-center justify-between px-3 py-1.5 rounded-md transition-colors"
      style={{
        fontSize: 12.5,
        border: 'none',
        background: 'transparent',
        cursor: disabled ? 'default' : 'pointer',
        color: disabled ? 'rgba(0,0,0,0.3)' : '#1f2937',
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = 'rgba(59,130,246,0.85)'; if (!disabled) e.currentTarget.style.color = '#fff' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = disabled ? 'rgba(0,0,0,0.3)' : '#1f2937' }}
    >
      <span>{label}</span>
      {shortcut && <span style={{ fontSize: 10.5, opacity: 0.6 }}>{shortcut}</span>}
    </button>
  )
}

// ── Dropdown panel wrapper ───────────────────────────────────
function DropdownPanel({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.97 }}
      transition={{ duration: 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute left-0 top-full mt-1 rounded-lg overflow-hidden py-1"
      style={{
        minWidth: 220,
        background: 'rgba(246,246,246,0.98)',
        backdropFilter: 'blur(20px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
        boxShadow: '0 12px 32px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06)',
        zIndex: zTokens.menuBar + 5,
      }}
      onClick={e => e.stopPropagation()}
    >
      {items.map((item, i) => (
        <DropdownItem key={item.label ? `${item.label}-${i}` : `div-${i}`} {...item} />
      ))}
    </motion.div>
  )
}

// ── Top-level menu bar button + its dropdown ────────────────
function MenuBarItem({ label, items, activeMenu, setActiveMenu }) {
  const isOpen = activeMenu === label
  return (
    <div className="relative">
      <button
        className="px-2 py-0.5 rounded text-white font-medium select-none transition-colors duration-100"
        style={{
          fontSize: 13,
          background: isOpen ? 'rgba(255,255,255,0.2)' : 'transparent',
          border: 'none',
          cursor: 'default',
        }}
        onClick={(e) => {
          e.stopPropagation()
          setActiveMenu(isOpen ? null : label)
        }}
        onMouseEnter={() => {
          // Keyboard/mouse hover behavior: if another menu is already open, switch to this one
          setActiveMenu(prev => (prev && prev !== label ? label : prev))
        }}
      >
        {label}
      </button>
      <AnimatePresence>
        {isOpen && <DropdownPanel items={items} />}
      </AnimatePresence>
    </div>
  )
}

// ── Main MenuBar ─────────────────────────────────────────────
export default function MenuBar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [helpOpen, setHelpOpen] = useState(false)
  const containerRef = useRef(null)

  const {
    openWindow, windows, closeWindow,
    duplicateWindow, minimizeAllWindows, cascadeWindows, tileWindows,
    theme, setTheme, wallpaperIndex, setWallpaperIndex, showToast,
  } = useDesktopStore()

  // ── Close dropdown when clicking outside ──────────────────
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // ── Helpers ────────────────────────────────────────────────
  const copyToClipboard = useCallback((text, label) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast(`${label} copied to clipboard`))
    } else {
      showToast(`${label} copied to clipboard`)
    }
    setActiveMenu(null)
  }, [showToast])

  const downloadResume = useCallback(() => {
    openWindow(RESUME_WINDOW_CONFIG)
    showToast('Preparing resume for download…')
    setTimeout(() => {
      window.print?.()
    }, 400)
    setActiveMenu(null)
  }, [openWindow, showToast])

  const exportPortfolio = useCallback(() => {
    try {
      const manifest = {
        name: 'Manav-Patel-Portfolio',
        exportedAt: new Date().toISOString(),
        profile: PROFILE,
        note: 'This is a simulated portfolio export bundle.',
      }
      const blob = new Blob([JSON.stringify(manifest, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Manav-Patel-Portfolio-Export.json'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      showToast('Portfolio exported')
    } catch {
      showToast('Export failed')
    }
    setActiveMenu(null)
  }, [showToast])

  const newWindow = useCallback(() => {
    const active = windows[windows.length - 1]
    if (active) {
      duplicateWindow(active.appId)
      showToast('New window opened')
    } else {
      openWindow(ABOUT_WINDOW_CONFIG)
    }
    setActiveMenu(null)
  }, [windows, duplicateWindow, openWindow, showToast])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.()
      showToast('Entered fullscreen')
    } else {
      document.exitFullscreen?.()
      showToast('Exited fullscreen')
    }
    setActiveMenu(null)
  }, [showToast])

  const changeWallpaper = useCallback(() => {
    const next = (wallpaperIndex + 1) % WALLPAPERS.length
    setWallpaperIndex(next)
    showToast(`Wallpaper: ${WALLPAPERS[next].label}`)
    setActiveMenu(null)
  }, [wallpaperIndex, setWallpaperIndex, showToast])

  const applyTheme = useCallback((t) => {
    setTheme(t)
    showToast(`${t === 'dark' ? 'Dark' : 'Light'} mode enabled`)
    setActiveMenu(null)
  }, [setTheme, showToast])

  // ── Edit menu: lightweight undo/redo over window actions ──
  const actionStack = useRef([])
  const redoStack = useRef([])
  const pushAction = useCallback((entry) => {
    actionStack.current.push(entry)
    redoStack.current = []
  }, [])
  const undo = useCallback(() => {
    const entry = actionStack.current.pop()
    if (!entry) { showToast('Nothing to undo'); setActiveMenu(null); return }
    if (entry.type === 'open' && entry.id) {
      closeWindow(entry.id)
      redoStack.current.push(entry)
      showToast('Undid: Open Window')
    }
    setActiveMenu(null)
  }, [closeWindow, showToast])
  const redo = useCallback(() => {
    const entry = redoStack.current.pop()
    if (!entry) { showToast('Nothing to redo'); setActiveMenu(null); return }
    if (entry.type === 'open' && entry.config) {
      const id = openWindow(entry.config)
      actionStack.current.push({ ...entry, id })
      showToast('Redid: Open Window')
    }
    setActiveMenu(null)
  }, [openWindow, showToast])

  const trackedOpen = useCallback((config) => {
    const id = openWindow(config)
    pushAction({ type: 'open', id, config })
    setActiveMenu(null)
  }, [openWindow, pushAction])

  // ── Voice commands ──────────────────────────────────────────
  const handleVoiceCommand = useCallback((transcript) => {
    const cmd = matchVoiceCommand(transcript)
    if (!cmd) return
    switch (cmd) {
      case 'open-about': trackedOpen(ABOUT_WINDOW_CONFIG); break
      case 'open-projects': trackedOpen(PROJECTS_WINDOW_CONFIG); break
      case 'open-resume': trackedOpen(RESUME_WINDOW_CONFIG); break
      case 'open-contact': trackedOpen(CONTACT_WINDOW_CONFIG); break
      case 'open-terminal': trackedOpen(TERMINAL_WINDOW_CONFIG); break
      case 'open-finder':
      case 'go-home': trackedOpen(ABOUT_WINDOW_CONFIG); break
      case 'dark-mode': applyTheme('dark'); break
      case 'light-mode': applyTheme('light'); break
      case 'download-resume': downloadResume(); break
      default: break
    }
    showToast(`Voice: "${transcript}"`)
  }, [trackedOpen, applyTheme, downloadResume, showToast])

  const { supported: voiceSupported, listening, start: startVoice, stop: stopVoice } = useVoiceCommands(handleVoiceCommand)

  // ── Menu definitions ─────────────────────────────────────────
  const finderItems = [
    { label: 'About Me', onClick: () => trackedOpen(ABOUT_WINDOW_CONFIG) },
    { label: 'Skills', onClick: () => trackedOpen(SKILLS_WINDOW_CONFIG) },
    { label: 'Projects', onClick: () => trackedOpen(PROJECTS_WINDOW_CONFIG) },
    { label: 'Certifications', onClick: () => trackedOpen(CERTIFICATES_WINDOW_CONFIG) },
    { label: 'Resume', onClick: () => trackedOpen(RESUME_WINDOW_CONFIG) },
    { label: 'Contact', onClick: () => trackedOpen(CONTACT_WINDOW_CONFIG) },
    { divider: true },
    { label: 'Downloads', onClick: downloadResume },
  ]

  const fileItems = [
    { label: 'New Window', shortcut: '⌘N', onClick: newWindow },
    { label: 'Download Resume (PDF)', shortcut: '⌘D', onClick: downloadResume },
    { label: 'Export Portfolio', onClick: exportPortfolio },
  ]

  const editItems = [
    { label: 'Undo', shortcut: '⌘Z', onClick: undo },
    { label: 'Redo', shortcut: '⇧⌘Z', onClick: redo },
    { divider: true },
    { label: 'Copy Email', onClick: () => copyToClipboard(PROFILE.email, 'Email') },
    { label: 'Copy LinkedIn', onClick: () => copyToClipboard(PROFILE.linkedin, 'LinkedIn URL') },
    { label: 'Copy GitHub', onClick: () => copyToClipboard(PROFILE.github, 'GitHub URL') },
  ]

  const viewItems = [
    { label: 'Light Mode', onClick: () => applyTheme('light'), disabled: theme === 'light' },
    { label: 'Dark Mode', onClick: () => applyTheme('dark'), disabled: theme === 'dark' },
    { divider: true },
    { label: 'Change Wallpaper', onClick: changeWallpaper },
    { divider: true },
    { label: 'Fullscreen', shortcut: '⌃⌘F', onClick: toggleFullscreen },
  ]

  const goItems = [
    { label: 'Home', onClick: () => trackedOpen(ABOUT_WINDOW_CONFIG) },
    { label: 'About', onClick: () => trackedOpen(ABOUT_WINDOW_CONFIG) },
    { label: 'Projects', onClick: () => trackedOpen(PROJECTS_WINDOW_CONFIG) },
    { label: 'Experience', onClick: () => trackedOpen(ABOUT_WINDOW_CONFIG) },
    { label: 'Education', onClick: () => trackedOpen(EDUCATION_WINDOW_CONFIG) },
    { label: 'Contact', onClick: () => trackedOpen(CONTACT_WINDOW_CONFIG) },
    { label: 'Terminal', onClick: () => trackedOpen(TERMINAL_WINDOW_CONFIG) },
  ]

  const windowItems = [
    {
      label: 'Minimize All', shortcut: '⌘M', onClick: () => {
        minimizeAllWindows(); showToast('All windows minimized'); setActiveMenu(null)
      },
    },
    {
      label: 'Cascade Windows', onClick: () => {
        cascadeWindows(); showToast('Windows cascaded'); setActiveMenu(null)
      },
    },
    {
      label: 'Tile Windows', onClick: () => {
        tileWindows(); showToast('Windows tiled'); setActiveMenu(null)
      },
    },
  ]

  const helpItems = [
    { label: 'Contact Developer', onClick: () => { setHelpOpen(true); setActiveMenu(null) } },
  ]

  return (
    <>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-0 right-0 flex items-center px-3"
        style={{
          height: 28,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(20px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.6)',
          zIndex: zTokens.menuBar,
          userSelect: 'none',
        }}
      >
        {/* Left: Apple + app menus */}
        <div className="flex items-center gap-0.5">
          {/* Apple logo */}
          <button
            className="flex items-center justify-center px-2 py-0.5 rounded hover:bg-white/20 transition-colors"
            style={{ border: 'none', background: 'transparent', cursor: 'default', height: 22 }}
            onClick={() => trackedOpen(ABOUT_WINDOW_CONFIG)}
          >
            <AppleLogo />
          </button>

          <MenuBarItem label="Finder" items={finderItems} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          <MenuBarItem label="File" items={fileItems} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          <MenuBarItem label="Edit" items={editItems} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          <MenuBarItem label="View" items={viewItems} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          <MenuBarItem label="Go" items={goItems} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          <MenuBarItem label="Window" items={windowItems} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          <MenuBarItem label="Help" items={helpItems} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>

        {/* Right: system status icons */}
        <div className="ml-auto flex items-center gap-3 pr-1">
          {/* Voice command mic */}
          {voiceSupported && (
            <button
              onClick={listening ? stopVoice : startVoice}
              title="Voice commands"
              className="flex items-center justify-center hover:bg-white/20 rounded p-0.5 transition-colors"
              style={{
                border: 'none',
                background: listening ? 'rgba(255,59,48,0.5)' : 'transparent',
                cursor: 'default',
              }}
            >
              <Mic size={13} color="white" strokeWidth={2} />
            </button>
          )}

          {/* Battery */}
          <BatteryIcon level={72} />

          {/* WiFi */}
          <WiFiIcon />

          {/* Search */}
          <button
            className="flex items-center justify-center hover:bg-white/20 rounded p-0.5 transition-colors"
            style={{ border: 'none', background: 'transparent', cursor: 'default' }}
          >
            <SearchIcon />
          </button>

          {/* Date/Time */}
          <Clock />
        </div>
      </motion.div>

      <Toast />
      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </>
  )
}
