import React from 'react'
import { motion } from 'framer-motion'
import { SKILL_LEVELS, SKILL_SUMMARY } from './skillsData'

const SUMMARY_ITEMS = [
  { key: 'total',      label: 'Total',      color: '#6B7280' },
  { key: 'advanced',   label: 'Advanced',   color: SKILL_LEVELS.ADVANCED.color },
  { key: 'proficient', label: 'Proficient', color: SKILL_LEVELS.PROFICIENT.color },
  { key: 'familiar',   label: 'Familiar',   color: SKILL_LEVELS.FAMILIAR.color },
  { key: 'learning',   label: 'Learning',   color: SKILL_LEVELS.LEARNING.color },
]

export default function SkillsHeader() {
  return (
    <div
      className="flex-shrink-0 px-5 pt-4 pb-3"
      style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1
          className="font-bold text-gray-900 leading-tight tracking-tight"
          style={{ fontSize: 18 }}
        >
          Skills & Expertise
        </h1>
        <p className="text-gray-400 mt-0.5" style={{ fontSize: 11 }}>
          Manav Patel — technical proficiency overview
        </p>
      </motion.div>

      {/* Summary stat chips */}
      <motion.div
        className="flex gap-2 mt-3 overflow-x-auto pb-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {SUMMARY_ITEMS.map(({ key, label, color }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22, delay: 0.08 + i * 0.05 }}
            className="flex flex-col items-center px-3 py-1.5 rounded-xl flex-shrink-0"
            style={{
              background: key === 'total' ? 'rgba(0,0,0,0.04)' : `${color}12`,
              border: `1px solid ${key === 'total' ? 'rgba(0,0,0,0.08)' : `${color}30`}`,
              minWidth: 54,
            }}
          >
            <span
              className="font-bold leading-none"
              style={{ fontSize: 16, color: key === 'total' ? '#374151' : color }}
            >
              {SKILL_SUMMARY[key]}
            </span>
            <span
              className="mt-0.5 font-medium"
              style={{ fontSize: 9, color: key === 'total' ? '#9CA3AF' : color, opacity: 0.85 }}
            >
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
