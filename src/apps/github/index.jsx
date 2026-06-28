import React from 'react'
import GitHubApp from './GitHubApp'

export const GITHUB_WINDOW_CONFIG = {
  appId: 'github',
  title: 'GitHub — manavpatel',
  content: () => <GitHubApp />,
  size: { width: 440, height: 580 },
  position: {
    x: typeof window !== 'undefined' ? Math.max(200, window.innerWidth / 2 - 220) : 300,
    y: typeof window !== 'undefined' ? Math.max(60, window.innerHeight / 2 - 290) : 70,
  },
}

export { default as GitHubApp } from './GitHubApp'
