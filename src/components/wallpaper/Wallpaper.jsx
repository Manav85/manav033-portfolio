import React from 'react'
import { colors } from '@/theme/tokens'
<<<<<<< HEAD
import { useDesktopStore } from '@/store/useDesktopStore'

// Built-in wallpaper variants. Index 0 preserves the original look exactly.
export const WALLPAPERS = [
  { id: 'portrait', label: 'Editorial Portrait', type: 'image' },
  { id: 'aurora', label: 'Aurora', type: 'gradient', css: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)' },
  { id: 'sunset', label: 'Sunset', type: 'gradient', css: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' },
  { id: 'mono', label: 'Monochrome', type: 'gradient', css: 'linear-gradient(160deg, #232526 0%, #414345 100%)' },
]

/**
 * Wallpaper — full-viewport editorial B&W background.
 * Accepts a `src` prop (base64 or URL) for the default portrait wallpaper.
 * Switching wallpaperIndex in the store changes the background while
 * preserving all overlay/vignette behavior. Theme affects overall tint.
 */
export default function Wallpaper({ src }) {
  const { wallpaperIndex, theme } = useDesktopStore()
  const wallpaper = WALLPAPERS[wallpaperIndex] || WALLPAPERS[0]
  const isLight = theme === 'light'

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex: 0, transition: 'filter 0.4s ease' }}
      aria-hidden="true"
    >
      {/* Photo layer */}
      {wallpaper.type === 'image' && src ? (
=======

/**
 * Wallpaper — full-viewport editorial B&W background.
 * Accepts a `src` prop (base64 or URL). Falls back to a dark gradient.
 * Applies grayscale filter + vignette overlay per DESIGN_SPEC.md §2.1
 */
export default function Wallpaper({ src }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Photo layer */}
      {src ? (
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{
<<<<<<< HEAD
            filter: isLight
              ? 'grayscale(100%) contrast(1.05) brightness(1.05)'
              : 'grayscale(100%) contrast(1.1) brightness(0.82)',
            pointerEvents: 'none',
            transition: 'filter 0.4s ease',
=======
            filter: 'grayscale(100%) contrast(1.1) brightness(0.82)',
            pointerEvents: 'none',
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
          }}
          draggable={false}
        />
      ) : (
<<<<<<< HEAD
        <div
          className="w-full h-full"
          style={{
            background: wallpaper.type === 'gradient'
              ? wallpaper.css
              : 'linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 50%, #111827 100%)',
            transition: 'background 0.4s ease',
=======
        /* Fallback gradient when no image is loaded yet */
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 50%, #111827 100%)',
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
          }}
        />
      )}

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{ background: colors.surface.vignette }}
      />

<<<<<<< HEAD
      {/* Subtle dark/light tint */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight ? 'rgba(255,255,255,0.12)' : colors.surface.dark,
          transition: 'background 0.4s ease',
        }}
=======
      {/* Subtle dark tint */}
      <div
        className="absolute inset-0"
        style={{ background: colors.surface.dark }}
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
      />
    </div>
  )
}
