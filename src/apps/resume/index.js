import React from 'react'
import ResumeApp from './ResumeApp'

export const RESUME_WINDOW_CONFIG = {
  appId: 'resume',
  title: 'Manav Patel — Resume',
  content: () => <ResumeApp />,
  size: { width: 500, height: 620 },
  position: {
    x: typeof window !== 'undefined' ? Math.max(36, window.innerWidth / 2 - 250) : 240,
    y: typeof window !== 'undefined' ? Math.max(36, window.innerHeight / 2 - 310) : 50,
  },
}

export { default as ResumeApp } from './ResumeApp'
