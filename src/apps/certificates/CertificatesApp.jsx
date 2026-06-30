import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Award, X } from 'lucide-react'
import {
  CERT_META, CERT_AWS, CERT_IBM_CLOUD,
  CERT_GITHUB, CERT_IBM_FUND, CERT_MONGODB,
} from '@/assets/images/certs.js'

const CERTS = [
  {
    id: 'meta-android',
    title: 'Introduction to Android Mobile Application Development',
    issuer: 'Meta',
    platform: 'Coursera',
    date: 'Jun 5, 2026',
    color: '#0866FF',
    bg: 'linear-gradient(135deg, #0866FF 0%, #1877F2 100%)',
    verifyUrl: 'https://coursera.org/verify/A3D6H1B1VEYJ',
    image: CERT_META,
    badge: '📱',
  },
  {
    id: 'aws-cpe',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    platform: 'AWS Training',
    date: 'May 9, 2026',
    color: '#FF9900',
    bg: 'linear-gradient(135deg, #232F3E 0%, #FF9900 100%)',
    verifyUrl: null,
    image: CERT_AWS,
    badge: '☁️',
  },
  {
    id: 'ibm-cloud',
    title: 'Introduction to Cloud',
    issuer: 'IBM',
    platform: 'CognitiveClass.ai',
    date: 'May 6, 2026',
    color: '#006699',
    bg: 'linear-gradient(135deg, #006699 0%, #054ADA 100%)',
    verifyUrl: 'https://courses.cognitiveclass.ai/certificates/80239275...',
    image: CERT_IBM_CLOUD,
    badge: '🌐',
  },
  {
    id: 'ms-github',
    title: 'Introduction to GitHub',
    issuer: 'Microsoft',
    platform: 'Microsoft Learn',
    date: 'Jun 7, 2026',
    color: '#00A4EF',
    bg: 'linear-gradient(135deg, #00A4EF 0%, #0078D4 100%)',
    verifyUrl: null,
    image: CERT_GITHUB,
    badge: '🐙',
  },
  {
    id: 'ibm-fund',
    title: 'Cloud Computing Fundamentals',
    issuer: 'IBM',
    platform: 'IBM SkillsBuild',
    date: 'Apr 26, 2026',
    color: '#054ADA',
    bg: 'linear-gradient(135deg, #054ADA 0%, #006699 100%)',
    verifyUrl: 'https://www.credly.com/badges/3ac183a0-51b6-4eeb-a4b8-290fa571b81f',
    image: CERT_IBM_FUND,
    badge: '🏗️',
  },
  {
    id: 'mongodb-ai',
    title: 'Building AI Agents with MongoDB',
    issuer: 'MongoDB',
    platform: 'MongoDB University',
    date: 'Apr 23, 2026',
    color: '#00ED64',
    bg: 'linear-gradient(135deg, #001E2B 0%, #00684A 100%)',
    verifyUrl: 'https://www.credly.com/badges/d732ad74-58c3-4fb8-ba39-e9b2284f7314',
    image: CERT_MONGODB,
    badge: '🍃',
  },
]

function CertCard({ cert, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, boxShadow: `0 8px 24px ${cert.color}30` }}
      onClick={() => onClick(cert)}
      className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-shadow"
      style={{
        border: `1px solid ${cert.color}25`,
        background: `${cert.color}08`,
      }}
    >
      {/* Badge */}
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-xl"
        style={{ width: 44, height: 44, background: cert.bg }}
      >
        <span style={{ fontSize: 20 }}>{cert.badge}</span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 leading-snug line-clamp-2" style={{ fontSize: 12 }}>
          {cert.title}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="font-medium" style={{ fontSize: 10, color: cert.color }}>
            {cert.issuer}
          </span>
          <span style={{ fontSize: 10, color: '#D1D5DB' }}>·</span>
          <span style={{ fontSize: 10, color: '#9CA3AF' }}>{cert.date}</span>
        </div>
      </div>

      {/* Arrow */}
      <div style={{ color: '#D1D5DB', flexShrink: 0 }}>
        <ExternalLink size={12} />
      </div>
    </motion.div>
  )
}

function CertViewer({ cert, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.18 }}
      className="absolute inset-0 bg-white flex flex-col z-10"
      style={{ borderRadius: '0 0 12px 12px' }}
    >
      {/* Viewer header */}
      <div
        className="flex items-center justify-between px-4 py-2.5 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#FAFAFA' }}
      >
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 14 }}>{cert.badge}</span>
          <span className="font-semibold text-gray-800 truncate" style={{ fontSize: 12, maxWidth: 260 }}>
            {cert.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded-lg font-medium"
              style={{ fontSize: 10, color: cert.color, background: `${cert.color}12`, border: `1px solid ${cert.color}25` }}
              onClick={e => e.stopPropagation()}
            >
              <ExternalLink size={9} />
              Verify
            </a>
          )}
          <button
            onClick={onClose}
            className="flex items-center justify-center rounded-full hover:bg-black/10 transition-colors"
            style={{ width: 24, height: 24, border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            <X size={13} color="#6B7280" />
          </button>
        </div>
      </div>

      {/* Certificate image */}
      <div className="flex-1 overflow-auto scrollable p-4">
        {cert.image ? (
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full rounded-xl shadow-md"
            draggable={false}
            style={{ border: '1px solid rgba(0,0,0,0.08)' }}
          />
        ) : (
          <div
            className="w-full rounded-xl flex flex-col items-center justify-center py-16"
            style={{ background: `${cert.color}08`, border: `2px dashed ${cert.color}30` }}
          >
            <span style={{ fontSize: 40 }}>{cert.badge}</span>
            <p className="font-semibold text-gray-600 mt-3" style={{ fontSize: 13 }}>{cert.title}</p>
            <p style={{ fontSize: 11, color: cert.color }}>{cert.issuer} — {cert.date}</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function CertificatesApp() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="relative flex flex-col bg-white h-full" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <div className="px-5 pt-4 pb-3 flex-shrink-0" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="flex items-center gap-2 mb-0.5">
          <Award size={16} color="#10B981" strokeWidth={2} />
          <h1 className="font-bold text-gray-900" style={{ fontSize: 17 }}>Certificates</h1>
        </div>
        <p style={{ fontSize: 11, color: '#9CA3AF' }}>
          {CERTS.length} verified credentials · Manav Patel
        </p>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto scrollable px-4 py-3 space-y-2 relative">
        {CERTS.map((cert, i) => (
          <motion.div key={cert.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <CertCard cert={cert} onClick={setSelected} />
          </motion.div>
        ))}
        <div style={{ height: 8 }} />

        {/* Certificate viewer overlay */}
        <AnimatePresence>
          {selected && (
            <CertViewer cert={selected} onClose={() => setSelected(null)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
