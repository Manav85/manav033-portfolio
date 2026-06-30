import React from 'react'
import ContactApp from './ContactApp'

export const CONTACT_WINDOW_CONFIG = {
  appId: 'contact',
  title: 'Manav Patel — Contact',
  content: () => <ContactApp />,
  size: { width: 420, height: 620 },
  position: {
    x: typeof window !== 'undefined' ? Math.max(36, window.innerWidth / 2 - 210) : 280,
    y: typeof window !== 'undefined' ? Math.max(36, window.innerHeight / 2 - 310) : 50,
  },
}

export { default as ContactApp } from './ContactApp'
