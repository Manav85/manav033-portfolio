import React from 'react'
import { motion } from 'framer-motion'
import { BIO_PARAGRAPHS, PROFILE } from './aboutData'

export default function AboutBio() {
  return (
    <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-semibold text-gray-500 uppercase tracking-widest mb-3"
        style={{ fontSize: 9, letterSpacing: '0.1em' }}
      >
        About
      </motion.p>

      <div className="space-y-3">
        {BIO_PARAGRAPHS.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
            className="text-gray-700 leading-relaxed"
            style={{ fontSize: 13 }}
          >
            {para}
          </motion.p>
        ))}
      </div>

      {/* Tagline pill */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.32 }}
        className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(29,78,216,0.08) 100%)',
          border: '1px solid rgba(59,130,246,0.2)',
        }}
      >
        <div
          className="rounded-full flex-shrink-0"
          style={{ width: 6, height: 6, background: '#3B82F6' }}
        />
        <span
          className="font-medium"
          style={{ fontSize: 11, color: '#1D4ED8' }}
        >
          {PROFILE.tagline}
        </span>
      </motion.div>
    </div>
  )
}
