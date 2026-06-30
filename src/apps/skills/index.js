import React from 'react'
import SkillsApp from './SkillsApp'

/**
 * Skills module public API.
 * Wired to the 'certificates' appId slot in App.jsx
 * (the third desktop icon / dock item).
 */
export const SKILLS_WINDOW_CONFIG = {
  appId: 'certificates',
  title: 'Manav Patel — Skills',
  content: () => <SkillsApp />,
  size: { width: 460, height: 600 },
  position: {
    x: typeof window !== 'undefined' ? Math.max(36, window.innerWidth / 2 - 230) : 200,
    y: typeof window !== 'undefined' ? Math.max(36, window.innerHeight / 2 - 300) : 60,
  },
}

export { default as SkillsApp } from './SkillsApp'
