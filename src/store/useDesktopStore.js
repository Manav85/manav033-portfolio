import { create } from 'zustand'

/**
 * Central Zustand store for the desktop OS layer.
 * Manages windows, desktop icons, dock, and active states.
 *
 * IMPORTANT: windowConfig.content must be a factory function () => ReactNode,
 * not a pre-instantiated JSX element. openWindow calls it to get a fresh tree.
 */

let nextWindowId = 1

const getDefaultPosition = () => ({
  x: typeof window !== 'undefined' ? Math.max(60, Math.round(window.innerWidth / 2 - 260)) : 200,
  y: typeof window !== 'undefined' ? Math.max(40, Math.round(window.innerHeight / 2 - 270)) : 100,
})

const DEFAULT_WINDOW_SIZE = { width: 520, height: 540 }

export const useDesktopStore = create((set, get) => ({
  // ── Windows ──────────────────────────────────────────────
  windows: [],
  activeWindowId: null,

  openWindow: (config) => {
    const existing = get().windows.find(w => w.appId === config.appId)

    // Already open — just focus it (unmimimize if needed)
    if (existing) {
      if (existing.isMinimized) {
        set(state => ({
          windows: state.windows.map(w =>
            w.id === existing.id ? { ...w, isMinimized: false } : w
          ),
          activeWindowId: existing.id,
        }))
      } else {
        get().focusWindow(existing.id)
      }
      return existing.id
    }

    const id = `window-${nextWindowId++}`

    // content is a factory fn — call it to get a fresh React tree
    const contentNode = typeof config.content === 'function'
      ? config.content()
      : config.content

    const newWindow = {
      id,
      appId: config.appId,
      title: config.title,
      content: contentNode,
      position: config.position || getDefaultPosition(),
      size: config.size || { ...DEFAULT_WINDOW_SIZE },
      isMinimized: false,
      zIndex: 20 + get().windows.length,
    }

    set(state => ({
      windows: [...state.windows, newWindow],
      activeWindowId: id,
    }))

    return id
  },

  closeWindow: (id) => {
    set(state => {
      const remaining = state.windows.filter(w => w.id !== id)
      const newActive = state.activeWindowId === id
        ? (remaining.length > 0 ? remaining[remaining.length - 1].id : null)
        : state.activeWindowId
      return { windows: remaining, activeWindowId: newActive }
    })
  },

  focusWindow: (id) => {
    set(state => {
      const maxZ = state.windows.reduce((m, w) => Math.max(m, w.zIndex), 20)
      return {
        activeWindowId: id,
        windows: state.windows.map(w =>
          w.id === id ? { ...w, zIndex: maxZ + 1 } : w
        ),
      }
    })
  },

  updateWindowPosition: (id, position) => {
    set(state => ({
      windows: state.windows.map(w => w.id === id ? { ...w, position } : w),
    }))
  },

  updateWindowSize: (id, size) => {
    set(state => ({
      windows: state.windows.map(w => w.id === id ? { ...w, size } : w),
    }))
  },

  minimizeWindow: (id) => {
    set(state => ({
      windows: state.windows.map(w =>
        w.id === id ? { ...w, isMinimized: true } : w
      ),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    }))
  },

  restoreWindow: (id) => {
    set(state => ({
      windows: state.windows.map(w =>
        w.id === id ? { ...w, isMinimized: false } : w
      ),
      activeWindowId: id,
    }))
  },

  // ── Desktop Icons ─────────────────────────────────────────
  desktopIcons: [],
  setDesktopIcons: (icons) => set({ desktopIcons: icons }),

  // ── Dock ─────────────────────────────────────────────────
  dockItems: [],
  setDockItems: (items) => set({ dockItems: items }),

  // ── Helpers ───────────────────────────────────────────────
  closeAllWindows: () => set({ windows: [], activeWindowId: null }),
}))
