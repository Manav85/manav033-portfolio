import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

/**
 * DesktopIcon — right-side column icon.
 * Single click opens the window directly (macOS right-column behavior).
 */
export default function DesktopIcon({ item, onClick, index }) {
  const [pressed, setPressed] = useState(false)

  const handleClick = useCallback((e) => {
    e.stopPropagation()
    setPressed(true)
    setTimeout(() => setPressed(false), 200)
    onClick?.(item)
  }, [item, onClick])

  return (
    <motion.div
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
        }}
      >
        {item.label}
      </span>
    </motion.div>
  )
}
