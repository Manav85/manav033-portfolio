import React from 'react'
import ProjectsApp from './ProjectsApp'

/**
 * Projects module public API.
 * Import PROJECTS_WINDOW_CONFIG into App.jsx to wire up
 * the desktop icon and dock item for this app.
 */
export const PROJECTS_WINDOW_CONFIG = {
  appId: 'projects',
  title: 'Manav Patel — Projects',
  content: () => <ProjectsApp />,
  size: { width: 520, height: 580 },
  position: {
    x: typeof window !== 'undefined' ? Math.max(36, window.innerWidth / 2 - 260) : 180,
    y: typeof window !== 'undefined' ? Math.max(36, window.innerHeight / 2 - 290) : 50,
  },
}

export { default as ProjectsApp } from './ProjectsApp'
