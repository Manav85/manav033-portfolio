import React from 'react'
import CertificatesApp from './CertificatesApp'

export const CERTIFICATES_WINDOW_CONFIG = {
  appId: 'certificates-viewer',
  title: 'Manav Patel — Certificates',
  content: () => <CertificatesApp />,
  size: { width: 460, height: 580 },
  position: {
    x: typeof window !== 'undefined' ? Math.max(36, window.innerWidth / 2 - 230) : 220,
    y: typeof window !== 'undefined' ? Math.max(36, window.innerHeight / 2 - 290) : 60,
  },
}

export { default as CertificatesApp } from './CertificatesApp'
