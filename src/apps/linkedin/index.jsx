import React from 'react'
import LinkedInApp from './LinkedInApp'

export const LINKEDIN_WINDOW_CONFIG = {
  appId: 'linkedin',
  title: 'LinkedIn — Manav Patel',
  content: () => <LinkedInApp />,
  size: { width: 440, height: 600 },
  position: {
    x: typeof window !== 'undefined' ? Math.max(220, window.innerWidth / 2 - 220) : 320,
    y: typeof window !== 'undefined' ? Math.max(60, window.innerHeight / 2 - 300) : 60,
  },
}

export { default as LinkedInApp } from './LinkedInApp'
