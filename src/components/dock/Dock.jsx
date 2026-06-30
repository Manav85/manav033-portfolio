import React from 'react'
import { motion } from 'framer-motion'
import { useDesktopStore } from '@/store/useDesktopStore'
import DockIcon from './DockIcon'
import { spacing, zIndex as zTokens } from '@/theme/tokens'

/**
 * Dock — frosted-glass bar at the bottom of the desktop.
 * Items and separators are driven by the Zustand store.
 */
export default function Dock() {
  const { dockItems, openWindow, windows } = useDesktopStore()

  const handleLaunch = (item) => {
    if (!item.appId || !item.windowConfig) return
    openWindow(item.windowConfig)
  }

  // Enrich items with isActive flag
  const enrichedItems = dockItems.map(item => ({
    ...item,
    isActive: windows.some(w => w.appId === item.appId && !w.isMinimized),
  }))

  return (
    <div
      className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-auto"
      style={{ zIndex: zTokens.dock }}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="dock-glass flex items-end gap-2 px-3 py-2 rounded-2xl"
        style={{ minHeight: spacing.dockHeight }}
      >
        {enrichedItems.map((item) => (
          <DockIcon
            key={item.id}
            item={item}
            onLaunch={handleLaunch}
          />
        ))}
      </motion.div>
    </div>
  )
}
