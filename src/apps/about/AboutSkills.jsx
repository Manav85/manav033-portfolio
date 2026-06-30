import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILLS } from './aboutData'
import { ChevronDown } from 'lucide-react'

/** A single skill tag pill */
function SkillTag({ name, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      className="inline-flex items-center px-2.5 py-1 rounded-lg font-medium transition-colors duration-150 cursor-default"
      style={{
        fontSize: 11,
        background: 'rgba(59,130,246,0.07)',
        border: '1px solid rgba(59,130,246,0.15)',
        color: '#1e40af',
      }}
      whileHover={{
        background: 'rgba(59,130,246,0.14)',
        borderColor: 'rgba(59,130,246,0.35)',
        transition: { duration: 0.1 },
      }}
    >
      {name}
    </motion.span>
  )
}

/** Collapsible skill category */
function SkillCategory({ category, items, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="mb-3">
      <button
        className="flex items-center justify-between w-full mb-2 group"
        onClick={() => setOpen(v => !v)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <span
          className="font-semibold text-gray-500 uppercase tracking-widest"
          style={{ fontSize: 9, letterSpacing: '0.1em' }}
        >
          {category}
        </span>
        <motion.div
          animate={{ rotate: open ? 0 : -90 }}
          transition={{ duration: 0.18 }}
        >
          <ChevronDown size={12} color="#9CA3AF" strokeWidth={2.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill, i) => (
                <SkillTag key={skill} name={skill} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AboutSkills() {
  return (
    <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
      <p
        className="font-semibold text-gray-500 uppercase tracking-widest mb-3"
        style={{ fontSize: 9, letterSpacing: '0.1em' }}
      >
        Skills
      </p>

      {SKILLS.map((group, i) => (
        <SkillCategory
          key={group.category}
          category={group.category}
          items={group.items}
          defaultOpen={i < 2}
        />
      ))}
    </div>
  )
}
