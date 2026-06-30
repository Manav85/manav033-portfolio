import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDesktopStore } from '@/store/useDesktopStore'
import { zIndex as zTokens } from '@/theme/tokens'

export default function Toast() {
  const { toast } = useDesktopStore()

  return (
    <div
      className="fixed left-1/2 pointer-events-none flex justify-center"
      style={{ top: 44, transform: 'translateX(-50%)', zIndex: zTokens.menuBar + 10 }}
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="px-4 py-2 rounded-xl"
            style={{
              background: 'rgba(30,30,30,0.85)',
              backdropFilter: 'blur(16px) saturate(1.6)',
              WebkitBackdropFilter: 'blur(16px) saturate(1.6)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
              color: '#fff',
              fontSize: 12.5,
              fontWeight: 500,
            }}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
