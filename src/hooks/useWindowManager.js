import { useCallback } from 'react'
import { useDesktopStore } from '@/store/useDesktopStore'

/**
 * useWindowManager — thin hook exposing common window operations
 * to any component without direct store coupling.
 */
export function useWindowManager() {
  const {
    openWindow,
    closeWindow,
    focusWindow,
    minimizeWindow,
    restoreWindow,
    windows,
    activeWindowId,
  } = useDesktopStore()

  const isOpen = useCallback(
    (appId) => windows.some(w => w.appId === appId),
    [windows]
  )

  const getWindow = useCallback(
    (appId) => windows.find(w => w.appId === appId) ?? null,
    [windows]
  )

  const toggleWindow = useCallback(
    (config) => {
      const existing = windows.find(w => w.appId === config.appId)
      if (existing) {
        closeWindow(existing.id)
      } else {
        openWindow(config)
      }
    },
    [windows, openWindow, closeWindow]
  )

  return {
    openWindow,
    closeWindow,
    focusWindow,
    minimizeWindow,
    restoreWindow,
    toggleWindow,
    isOpen,
    getWindow,
    windows,
    activeWindowId,
  }
}
