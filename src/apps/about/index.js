import React from 'react'
import AboutApp from './AboutApp'

/**
 * About module public API.
 * Import ABOUT_WINDOW_CONFIG into App.jsx to wire up
 * the desktop icon and dock item for this app.
 */
export const ABOUT_WINDOW_CONFIG = {
  appId: 'about',
  title: 'Manav Patel — About Me',
  content: () => <AboutApp />,
  size: { width: 480, height: 620 },
  position: {
    x: typeof window !== 'undefined' ? Math.max(36, window.innerWidth / 2 - 240) : 160,
    y: typeof window !== 'undefined' ? Math.max(36, window.innerHeight / 2 - 310) : 60,
  },
}

export { default as AboutApp } from './AboutApp'
