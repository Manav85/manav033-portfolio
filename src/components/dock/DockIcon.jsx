import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { spacing } from '@/theme/tokens'

/**
 * DockIcon — one item in the dock.
 * Magnifies on hover, bounces on launch, shows active dot and tooltip.
 *
 * Avoids animate/whileHover conflict by separating bounce into a
 * conditional key that remounts the button briefly.
 */
export default function DockIcon({ item, onLaunch }) {
  const [hovered, setHovered] = useState(false)
  const [bounceKey, setBounceKey] = useState(0)

  const handleClick = () => {
    setBounceKey(k => k + 1)
    onLaunch?.(item)
  }

  if (item.isSeparator) {
    return (
      <div
        className="self-end mb-1 mx-1"
        style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.25)', flexShrink: 0 }}
        aria-hidden="true"
      />
    )
  }

  return (
    <div className="relative flex flex-col items-center" style={{ flexShrink: 0 }}>
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.12 }}
            className="absolute bottom-full mb-2 px-2 py-1 rounded-md text-white font-medium whitespace-nowrap pointer-events-none"
            style={{
              background: 'rgba(0,0,0,0.78)',
              backdropFilter: 'blur(8px)',
              fontSize: 11,
              zIndex: 100,
            }}
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon button — key changes on each click to trigger bounce animation */}
      <motion.button
        key={bounceKey}
        className="flex items-center justify-center cursor-pointer focus:outline-none rounded-xl"
        style={{
          width: spacing.iconSize,
          height: spacing.iconSize,
          background: item.background || 'rgba(255,255,255,0.15)',
          border: 'none',
          flexShrink: 0,
        }}
        initial={bounceKey > 0 ? { y: 0 } : false}
        animate={bounceKey > 0 ? { y: [0, -14, -3, 0] } : {}}
        transition={bounceKey > 0 ? { duration: 0.38, ease: 'easeOut' } : {}}
        whileHover={{ y: -10, scale: 1.25 }}
        whileTap={{ scale: 0.88 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={handleClick}
        aria-label={item.label}
        title={item.label}
      >
        {item.icon && (
          <item.icon
            size={27}
            color={item.iconColor || '#ffffff'}
            strokeWidth={1.5}
          />
        )}
        {item.image && (
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-full object-cover rounded-xl"
            draggable={false}
          />
        )}
      </motion.button>

      {/* Active dot */}
      <div style={{ height: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {item.isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="rounded-full"
            style={{ width: 4, height: 4, background: 'rgba(255,255,255,0.75)' }}
          />
        )}
      </div>
    </div>
  )
}
