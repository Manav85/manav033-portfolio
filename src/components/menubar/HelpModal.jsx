import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Github, Linkedin, X } from 'lucide-react'
import { PROFILE } from '@/apps/about/aboutData'
import { zIndex as zTokens } from '@/theme/tokens'

const VERSION = '2.4.0'

export default function HelpModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: zTokens.menuBar + 20, background: 'rgba(0,0,0,0.45)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="rounded-2xl overflow-hidden"
            style={{
              width: 340,
              background: '#fff',
              boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
            >
              <span className="font-semibold text-gray-900" style={{ fontSize: 13 }}>
                Contact Developer
              </span>
              <button
                onClick={onClose}
                className="flex items-center justify-center rounded-full hover:bg-black/5"
                style={{ width: 22, height: 22, border: 'none', background: 'transparent', cursor: 'pointer' }}
              >
                <X size={14} color="#6B7280" />
              </button>
            </div>

            <div className="px-4 py-4 space-y-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-2.5 no-underline"
                style={{ textDecoration: 'none' }}
              >
                <Mail size={15} color="#3B82F6" />
                <span style={{ fontSize: 12.5, color: '#374151' }}>{PROFILE.email}</span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 no-underline"
                style={{ textDecoration: 'none' }}
              >
                <Linkedin size={15} color="#0a66c2" />
                <span style={{ fontSize: 12.5, color: '#374151' }}>linkedin.com/in/manavpatel</span>
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 no-underline"
                style={{ textDecoration: 'none' }}
              >
                <Github size={15} color="#24292e" />
                <span style={{ fontSize: 12.5, color: '#374151' }}>github.com/manavpatel</span>
              </a>

              <div className="pt-2" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <p style={{ fontSize: 10.5, color: '#9CA3AF' }}>Portfolio Version {VERSION}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
