/**
 * Design tokens — single source of truth for all visual decisions.
 * Mirrors tailwind.config.js for use in inline styles / JS logic.
 */

export const colors = {
  accent: {
    blue: '#3B82F6',
    blueDark: '#1D4ED8',
    gray: '#6B7280',
  },
  surface: {
    dark: 'rgba(0,0,0,0.25)',
    card: 'rgba(255,255,255,0.12)',
    cardHover: 'rgba(255,255,255,0.2)',
    social: 'rgba(255,255,255,0.15)',
    window: '#ffffff',
    dock: 'rgba(255,255,255,0.18)',
    dockBorder: 'rgba(255,255,255,0.25)',
    vignette: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)',
  },
  text: {
    primary: '#ffffff',
    dark: '#111111',
    meta: '#6B7280',
    metaLabel: '#9CA3AF',
  },
  trafficLights: {
    close: '#FF5F57',
    minimize: '#FFBD2E',
    maximize: '#28C840',
  },
}

export const spacing = {
  dockHeight: 72,
  dockPadding: 10,
  iconSize: 52,
  iconGap: 8,
  cardThumb: 32,
  windowMinWidth: 380,
  windowMaxWidth: 560,
}

export const typography = {
  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
  sizes: {
    cardLabel: '10px',
    uiSm: '11px',
    ui: '13px',
    windowTitle: '24px',
    windowBody: '13px',
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
}

export const motion = {
  window: {
    initial: { opacity: 0, scale: 0.88, y: 8 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.88, y: 8 },
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  card: {
    hover: { scale: 1.06, transition: { duration: 0.15 } },
    tap: { scale: 0.97 },
  },
  dock: {
    icon: {
      hover: { y: -10, scale: 1.25, transition: { type: 'spring', stiffness: 400, damping: 18 } },
    },
  },
  backdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.15 },
  },
}

export const zIndex = {
  wallpaper: 0,
  desktopIcons: 10,
  windows: 20,
  dock: 50,
  tooltip: 60,
  menuBar: 100,
}
