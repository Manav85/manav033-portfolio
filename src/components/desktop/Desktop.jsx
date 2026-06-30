import React, { useCallback } from 'react'
import { useDesktopStore } from '@/store/useDesktopStore'
import DesktopIcon from './DesktopIcon'
import { zIndex as zTokens } from '@/theme/tokens'

/**
<<<<<<< HEAD
 * Desktop — right-side vertical column of icons, matching the screenshot.
 * Icons are stacked top-to-right, below the menu bar (28px offset).
=======
 * Desktop — renders floating desktop icons.
 * Clicking the bare desktop background deselects.
 * Double-clicking an icon opens its associated window.
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
 */
export default function Desktop() {
  const { desktopIcons, openWindow } = useDesktopStore()

  const handleIconOpen = useCallback((item) => {
    if (!item.windowConfig) return
    openWindow(item.windowConfig)
  }, [openWindow])

  return (
    <div
<<<<<<< HEAD
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
=======
      className="absolute inset-0"
      style={{ zIndex: zTokens.desktopIcons }}
    >
      {desktopIcons.map(icon => (
        <DesktopIcon
          key={icon.id}
          item={icon}
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
          onClick={handleIconOpen}
        />
      ))}
    </div>
  )
}
