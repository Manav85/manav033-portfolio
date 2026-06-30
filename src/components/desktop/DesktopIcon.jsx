import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

/**
<<<<<<< HEAD
 * DesktopIcon — right-side column icon.
 * Single click opens the window directly (macOS right-column behavior).
 */
export default function DesktopIcon({ item, onClick, index }) {
  const [pressed, setPressed] = useState(false)

  const handleClick = useCallback((e) => {
    e.stopPropagation()
    setPressed(true)
    setTimeout(() => setPressed(false), 200)
=======
 * DesktopIcon — absolute-positioned icon on the desktop.
 * Single click selects; double-click opens the window.
 * No drag (conflicts with absolute positioning reset on re-render).
 */
export default function DesktopIcon({ item, onClick }) {
  const [selected, setSelected] = useState(false)

  const handleClick = useCallback((e) => {
    e.stopPropagation()
    setSelected(s => !s)
  }, [])

  const handleDoubleClick = useCallback((e) => {
    e.stopPropagation()
    setSelected(false)
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
    onClick?.(item)
  }, [item, onClick])

  return (
    <motion.div
<<<<<<< HEAD
      className="flex flex-col items-center gap-1.5 cursor-pointer"
      style={{ width: 76 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24, delay: index * 0.06 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={handleClick}
      aria-label={item.label}
    >
      {/* Icon tile */}
      <div
        className="flex items-center justify-center rounded-2xl transition-all duration-100"
        style={{
          width: 60,
          height: 60,
          background: item.background || 'rgba(255,255,255,0.15)',
          boxShadow: pressed
            ? '0 0 0 3px rgba(255,255,255,0.4), 0 4px 16px rgba(0,0,0,0.5)'
            : '0 4px 14px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(8px)',
          border: pressed
            ? '1px solid rgba(255,255,255,0.5)'
            : '1px solid rgba(255,255,255,0.18)',
        }}
      >
        {item.icon && (
          <item.icon size={30} color={item.iconColor || '#ffffff'} strokeWidth={1.5} />
        )}
      </div>

      {/* Label */}
      <span
        className="text-white text-center leading-tight font-medium"
        style={{
          fontSize: 12,
          maxWidth: 76,
          textShadow: '0 1px 4px rgba(0,0,0,0.8)',
          wordBreak: 'break-word',
          textAlign: 'center',
=======
      className="absolute flex flex-col items-center gap-1 cursor-pointer"
      style={{ left: item.position.x, top: item.position.y, width: 72 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      aria-label={item.label}
    >
      <div
        className="flex items-center justify-center rounded-xl transition-shadow duration-150"
        style={{
          width: 56,
          height: 56,
          background: item.background || 'rgba(255,255,255,0.15)',
          boxShadow: selected
            ? '0 0 0 2px rgba(59,130,246,0.7), 0 4px 16px rgba(0,0,0,0.5)'
            : '0 4px 12px rgba(0,0,0,0.35)',
          backdropFilter: 'blur(8px)',
          border: selected
            ? '1px solid rgba(59,130,246,0.6)'
            : '1px solid rgba(255,255,255,0.2)',
        }}
      >
        {item.icon && (
          <item.icon size={28} color={item.iconColor || '#ffffff'} strokeWidth={1.5} />
        )}
        {item.image && (
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-full object-cover rounded-xl"
            draggable={false}
          />
        )}
      </div>

      <span
        className="desktop-icon-label text-white text-center leading-tight"
        style={{
          fontSize: 11,
          fontWeight: 500,
          maxWidth: 70,
          wordBreak: 'break-word',
          background: selected ? 'rgba(59,130,246,0.65)' : 'transparent',
          borderRadius: 3,
          padding: '1px 3px',
          userSelect: 'none',
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
        }}
      >
        {item.label}
      </span>
    </motion.div>
  )
}
