import React from 'react'
import { colors } from '@/theme/tokens'

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
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'grayscale(100%) contrast(1.1) brightness(0.82)',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
      ) : (
        /* Fallback gradient when no image is loaded yet */
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 50%, #111827 100%)',
          }}
        />
      )}

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{ background: colors.surface.vignette }}
      />

      {/* Subtle dark tint */}
      <div
        className="absolute inset-0"
        style={{ background: colors.surface.dark }}
      />
    </div>
  )
}
