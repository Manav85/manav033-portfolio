import React, { useCallback } from 'react'
import { useDesktopStore } from '@/store/useDesktopStore'
import DesktopIcon from './DesktopIcon'
import { zIndex as zTokens } from '@/theme/tokens'

/**
 * Desktop — right-side vertical column of icons, matching the screenshot.
 * Icons are stacked top-to-right, below the menu bar (28px offset).
 */
export default function Desktop() {
  const { desktopIcons, openWindow } = useDesktopStore()

  const handleIconOpen = useCallback((item) => {
    if (!item.windowConfig) return
    openWindow(item.windowConfig)
  }, [openWindow])

  return (
    <div
      className="absolute top-0 right-0 bottom-0 flex flex-col items-center pt-2 pb-24 gap-2"
      style={{
        zIndex: zTokens.desktopIcons,
        width: 96,
        // Start below menu bar
        paddingTop: 36,
      }}
    >
      {desktopIcons.map((icon, index) => (
        <DesktopIcon
          key={icon.id}
          item={icon}
          index={index}
          onClick={handleIconOpen}
        />
      ))}
    </div>
  )
}
