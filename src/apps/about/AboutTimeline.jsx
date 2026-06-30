import React from 'react'
import { motion } from 'framer-motion'
import { TIMELINE } from './aboutData'
import { Award } from 'lucide-react'

const ISSUER_COLORS = {
  'IBM': '#006699',
  'Amazon Web Services': '#FF9900',
  'Microsoft': '#00A4EF',
  'Meta / Coursera': '#0866FF',
  'MongoDB': '#00ED64',
  'IBM / CognitiveClass.ai': '#054ADA',
}

function getIssuerColor(org) {
  for (const [key, color] of Object.entries(ISSUER_COLORS)) {
    if (org.includes(key.split(' ')[0])) return color
  }
  return '#3B82F6'
}

/** Single timeline row */
function TimelineItem({ item, index }) {
  const color = getIssuerColor(item.org)

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.28, delay: 0.05 + index * 0.06 }}
      className="flex items-start gap-3 group"
    >
      {/* Line + dot */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 20 }}>
        <div
          className="rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            width: 20,
            height: 20,
            background: `${color}18`,
            border: `1.5px solid ${color}55`,
          }}
        >
          <Award size={9} color={color} strokeWidth={2.5} />
        </div>
        {/* Connector */}
        <div
          className="flex-1 mt-1"
          style={{
            width: 1.5,
            minHeight: 20,
            background: 'rgba(0,0,0,0.07)',
          }}
        />
      </div>

      {/* Content */}
      <div className="pb-4 flex-1 min-w-0">
        <p
          className="font-semibold text-gray-900 leading-snug"
          style={{ fontSize: 12 }}
        >
          {item.title}
        </p>
        <div className="flex items-center justify-between mt-0.5">
          <span style={{ fontSize: 11, color: color, fontWeight: 500 }}>
            {item.org}
          </span>
          <span
            className="font-medium text-gray-400 flex-shrink-0 ml-2"
            style={{ fontSize: 10 }}
          >
            {item.year}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutTimeline() {
  return (
    <div className="px-5 py-4">
      <p
        className="font-semibold text-gray-500 uppercase tracking-widest mb-4"
        style={{ fontSize: 9, letterSpacing: '0.1em' }}
      >
        Certifications & Timeline
      </p>

      <div>
        {TIMELINE.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}
