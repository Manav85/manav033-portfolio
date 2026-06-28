import React, { useCallback } from 'react'
import { useDesktopStore } from '@/store/useDesktopStore'
import DesktopIcon from './DesktopIcon'
import { zIndex as zTokens } from '@/theme/tokens'

/**
 * Desktop — renders floating desktop icons.
 * Clicking the bare desktop background deselects.
 * Double-clicking an icon opens its associated window.
 */
export default function Desktop() {
  const { desktopIcons, openWindow } = useDesktopStore()

  const handleIconOpen = useCallback((item) => {
    if (!item.windowConfig) return
    openWindow(item.windowConfig)
  }, [openWindow])

  return (
    <div
      className="absolute inset-0"
      style={{ zIndex: zTokens.desktopIcons }}
    >
      {desktopIcons.map(icon => (
        <DesktopIcon
          key={icon.id}
          item={icon}
          onClick={handleIconOpen}
        />
      ))}
    </div>
  )
}
