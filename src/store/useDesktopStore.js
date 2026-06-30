import { create } from 'zustand'

let nextWindowId = 1

const getDefaultPosition = () => ({
  x: typeof window !== 'undefined' ? Math.max(60, Math.round(window.innerWidth / 2 - 260)) : 200,
  y: typeof window !== 'undefined' ? Math.max(36, Math.round(window.innerHeight / 2 - 270)) : 100,
})

const DEFAULT_WINDOW_SIZE = { width: 520, height: 540 }

export const useDesktopStore = create((set, get) => ({
  windows: [],
  activeWindowId: null,

  openWindow: (config) => {
    const existing = get().windows.find(w => w.appId === config.appId)
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
      isMaximized: false,
      // Store pre-maximize state for restore
      preMaximizeState: null,
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
        w.id === id ? { ...w, isMinimized: true, isMaximized: false } : w
      ),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    }))
  },

  maximizeWindow: (id) => {
    set(state => {
      const win = state.windows.find(w => w.id === id)
      if (!win) return state

      if (win.isMaximized) {
        // Restore to pre-maximize state
        const pre = win.preMaximizeState || {
          position: getDefaultPosition(),
          size: DEFAULT_WINDOW_SIZE,
        }
        return {
          windows: state.windows.map(w =>
            w.id === id ? {
              ...w,
              isMaximized: false,
              position: pre.position,
              size: pre.size,
              preMaximizeState: null,
            } : w
          ),
        }
      } else {
        // Maximize: save current state, go fullscreen minus menubar + dock
        const menuBarH = 28
        const dockH = 82
        const vw = typeof window !== 'undefined' ? window.innerWidth : 1280
        const vh = typeof window !== 'undefined' ? window.innerHeight : 800
        return {
          activeWindowId: id,
          windows: state.windows.map(w =>
            w.id === id ? {
              ...w,
              isMaximized: true,
              preMaximizeState: { position: w.position, size: w.size },
              position: { x: 0, y: menuBarH },
              size: { width: vw, height: vh - menuBarH - dockH },
            } : w
          ),
        }
      }
    })
  },

  restoreWindow: (id) => {
    set(state => ({
      windows: state.windows.map(w =>
        w.id === id ? { ...w, isMinimized: false, isMaximized: false } : w
      ),
      activeWindowId: id,
    }))
  },

  desktopIcons: [],
  setDesktopIcons: (icons) => set({ desktopIcons: icons }),

  dockItems: [],
  setDockItems: (items) => set({ dockItems: items }),

  closeAllWindows: () => set({ windows: [], activeWindowId: null }),

  // ── Theme ──────────────────────────────────────────────────
  theme: typeof window !== 'undefined' ? (localStorage.getItem('mp-theme') || 'dark') : 'dark',
  setTheme: (theme) => {
    if (typeof window !== 'undefined') localStorage.setItem('mp-theme', theme)
    set({ theme })
  },

  // ── Wallpaper ──────────────────────────────────────────────
  wallpaperIndex: typeof window !== 'undefined' ? Number(localStorage.getItem('mp-wallpaper') || 0) : 0,
  setWallpaperIndex: (i) => {
    if (typeof window !== 'undefined') localStorage.setItem('mp-wallpaper', String(i))
    set({ wallpaperIndex: i })
  },

  // ── Toast ──────────────────────────────────────────────────
  toast: null,
  showToast: (message) => {
    const id = Date.now()
    set({ toast: { id, message } })
    setTimeout(() => {
      set(state => (state.toast && state.toast.id === id) ? { toast: null } : {})
    }, 2200)
  },

  // ── Duplicate window (File > New Window) ──────────────────
  duplicateWindow: (appId) => {
    const state = get()
    const source = state.windows.find(w => w.appId === appId)
    if (!source) return null
    const id = `window-${nextWindowId++}`
    const offset = 28
    const newWindow = {
      ...source,
      id,
      appId: `${source.appId}__copy_${id}`,
      position: { x: source.position.x + offset, y: source.position.y + offset },
      isMinimized: false,
      isMaximized: false,
      preMaximizeState: null,
      zIndex: 20 + state.windows.length,
    }
    set(s => ({ windows: [...s.windows, newWindow], activeWindowId: id }))
    return id
  },

  // ── Window menu bulk actions ───────────────────────────────
  minimizeAllWindows: () => {
    set(state => ({
      windows: state.windows.map(w => ({ ...w, isMinimized: true, isMaximized: false })),
      activeWindowId: null,
    }))
  },

  cascadeWindows: () => {
    set(state => {
      const menuBarH = 28
      let x = 60, y = menuBarH + 16
      const windows = state.windows.map((w, i) => {
        const pos = { x: x + i * 30, y: y + i * 30 }
        return {
          ...w,
          isMinimized: false,
          isMaximized: false,
          position: pos,
          preMaximizeState: null,
        }
      })
      return { windows }
    })
  },

  tileWindows: () => {
    set(state => {
      const visible = state.windows.filter(w => !w.isMinimized)
      const count = visible.length
      if (count === 0) return state
      const menuBarH = 28
      const dockH = 96
      const vw = typeof window !== 'undefined' ? window.innerWidth : 1280
      const vh = typeof window !== 'undefined' ? window.innerHeight : 800
      const usableH = vh - menuBarH - dockH
      const cols = Math.ceil(Math.sqrt(count))
      const rows = Math.ceil(count / cols)
      const cellW = Math.floor(vw / cols)
      const cellH = Math.floor(usableH / rows)
      let idx = 0
      const windows = state.windows.map(w => {
        if (w.isMinimized) return w
        const col = idx % cols
        const row = Math.floor(idx / cols)
        idx++
        return {
          ...w,
          isMaximized: false,
          preMaximizeState: null,
          position: { x: col * cellW + 8, y: menuBarH + row * cellH + 8 },
          size: { width: cellW - 16, height: cellH - 16 },
        }
      })
      return { windows }
    })
  },
}))
