import React from 'react'
import EducationApp from './EducationApp'

export const EDUCATION_WINDOW_CONFIG = {
  appId: 'education',
  title: 'Manav Patel — Education',
  content: () => <EducationApp />,
  size: { width: 460, height: 600 },
  position: {
    x: typeof window !== 'undefined' ? Math.max(160, window.innerWidth / 2 - 230) : 260,
    y: typeof window !== 'undefined' ? Math.max(40, window.innerHeight / 2 - 300) : 50,
  },
}

export { default as EducationApp } from './EducationApp'
