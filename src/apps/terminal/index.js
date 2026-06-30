import React from 'react'
import TerminalApp from './TerminalApp'

export const TERMINAL_WINDOW_CONFIG = {
  appId: 'terminal',
  title: 'Terminal — zsh',
  content: () => <TerminalApp />,
  size: { width: 540, height: 380 },
  position: {
    x: typeof window !== 'undefined' ? Math.max(36, window.innerWidth / 2 - 270) : 200,
    y: typeof window !== 'undefined' ? Math.max(36, window.innerHeight / 2 - 190) : 100,
  },
}

export { default as TerminalApp } from './TerminalApp'
