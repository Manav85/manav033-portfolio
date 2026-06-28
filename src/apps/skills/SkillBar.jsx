import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from '@/hooks/useGSAP'
import { SKILL_LEVELS } from './skillsData'

// Icon glyphs keyed by iconKey — pure text/emoji, no external deps
const ICON_GLYPHS = {
  python:       '🐍',
  javascript:   'JS',
  typescript:   'TS',
  java:         '☕',
  kotlin:       'K',
  sql:          '🗄',
  react:        '⚛',
  tailwind:     '💨',
  html:         '🌐',
  vite:         '⚡',
  nodejs:       'N',
  express:      'Ex',
  fastapi:      'FA',
  github:       '🐙',
  aws:          '☁',
  ibm:          'IBM',
  docker:       '🐳',
  githubactions:'⚙',
  ai:           '🤖',
  tensorflow:   'TF',
  android:      '🤖',
  mongodb:      '🍃',
  postgres:     '🐘',
}

const ICON_COLORS = {
  python:       '#3776AB',
  javascript:   '#F7DF1E',
  typescript:   '#3178C6',
  java:         '#ED8B00',
  kotlin:       '#7F52FF',
  sql:          '#336791',
  react:        '#61DAFB',
  tailwind:     '#06B6D4',
  html:         '#E34F26',
  vite:         '#646CFF',
  nodejs:       '#339933',
  express:      '#888888',
  fastapi:      '#009688',
  github:       '#24292e',
  aws:          '#FF9900',
  ibm:          '#006699',
  docker:       '#2496ED',
  githubactions:'#2088FF',
  ai:           '#8B5CF6',
  tensorflow:   '#FF6F00',
  android:      '#3DDC84',
  mongodb:      '#47A248',
  postgres:     '#4169E1',
}

/**
 * SkillBar — one row in the skills list.
 * Shows: icon tile | name + level badge | animated proficiency bar | percentage
 */
export default function SkillBar({ skill, index, inView }) {
  const [hovered, setHovered] = useState(false)
  const barRef = useRef(null)
  const hasAnimated = useRef(false)

  const level = SKILL_LEVELS[skill.level]
  const glyph = ICON_GLYPHS[skill.iconKey] ?? '●'
  const iconColor = ICON_COLORS[skill.iconKey] ?? '#6B7280'

  // GSAP bar fill on first scroll-into-view
  useEffect(() => {
    if (!inView || hasAnimated.current || !barRef.current) return
    hasAnimated.current = true

    gsap.fromTo(
      barRef.current,
      { width: '0%' },
      {
        width: `${skill.proficiency}%`,
        duration: 0.7,
        delay: index * 0.04,
        ease: 'power2.out',
      }
    )
  }, [inView, skill.proficiency, index])

  return (
    <motion.div
      className="flex items-center gap-3 px-4 py-2.5 transition-colors duration-100 rounded-lg"
      style={{
        background: hovered ? 'rgba(59,130,246,0.04)' : 'transparent',
        cursor: 'default',
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.22, delay: index * 0.04 }}
    >
      {/* Icon tile */}
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-lg font-bold"
        style={{
          width: 32,
          height: 32,
          background: `${iconColor}18`,
          border: `1px solid ${iconColor}30`,
          fontSize: glyph.length > 2 ? 7 : glyph.length > 1 ? 9 : 14,
          color: iconColor,
          letterSpacing: '-0.02em',
        }}
      >
        {glyph}
      </div>

      {/* Name + bar */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold text-gray-800 truncate" style={{ fontSize: 12 }}>
            {skill.name}
          </span>
          <div className="flex items-center gap-1.5 ml-2 flex-shrink-0">
            {/* Level badge */}
            <span
              className="px-1.5 py-0.5 rounded-md font-semibold"
              style={{
                fontSize: 8,
                background: level.bg,
                border: `1px solid ${level.border}`,
                color: level.color,
                letterSpacing: '0.04em',
              }}
            >
              {level.label.toUpperCase()}
            </span>
            {/* Percentage */}
            <span className="font-mono font-bold" style={{ fontSize: 10, color: '#9CA3AF', minWidth: 28, textAlign: 'right' }}>
              {skill.proficiency}%
            </span>
          </div>
        </div>

        {/* Progress bar track */}
        <div
          className="w-full rounded-full overflow-hidden"
          style={{ height: 4, background: 'rgba(0,0,0,0.07)' }}
        >
          <div
            ref={barRef}
            className="h-full rounded-full"
            style={{
              width: '0%',  // starts at 0; GSAP animates to proficiency%
              background: `linear-gradient(90deg, ${level.color}cc, ${level.color})`,
            }}
          />
        </div>

        {/* Note — shown on hover */}
        <AnimatePresence>
          {hovered && skill.note && (
            <motion.p
              key="note"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 4 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.18 }}
              className="text-gray-400 leading-snug overflow-hidden"
              style={{ fontSize: 10 }}
            >
              {skill.note}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
