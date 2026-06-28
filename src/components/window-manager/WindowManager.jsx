import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useDesktopStore } from '@/store/useDesktopStore'
import Window from './Window'
import { zIndex as zTokens } from '@/theme/tokens'

/**
 * WindowManager — renders all open windows.
 * Each window is a sibling positioned via react-rnd's own absolute coords.
 * The container is pointer-events-none so only the windows themselves are interactive.
 */
export default function WindowManager() {
  const { windows } = useDesktopStore()

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: zTokens.windows }}
    >
      <AnimatePresence mode="popLayout">
        {windows.map(win => (
          <Window key={win.id} win={win} />
        ))}
      </AnimatePresence>
    </div>
  )
}
