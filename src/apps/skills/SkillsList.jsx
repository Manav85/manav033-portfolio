import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SKILLS, CATEGORIES } from './skillsData'
import SkillBar from './SkillBar'

/**
 * SkillsList — filtered skill rows in a scroll container.
 * IntersectionObserver triggers GSAP bar animations on reveal.
 * Category changes reset bars then re-trigger after DOM settles.
 */
export default function SkillsList({ activeCategory }) {
  const containerRef = useRef(null)
  const [inView, setInView] = useState(false)
  // Incrementing token forces SkillBar to re-run its GSAP effect
  const [animToken, setAnimToken] = useState(0)

  // Mount-time IntersectionObserver
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // On category change: mark not-in-view, then re-trigger after paint
  useLayoutEffect(() => {
    setInView(false)
    const raf = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        setInView(true)
        setAnimToken(t => t + 1)
      })
      return () => cancelAnimationFrame(raf2)
    })
    return () => cancelAnimationFrame(raf)
  }, [activeCategory])

  const filtered = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory)

  const categoryLabel = CATEGORIES.find(c => c.id === activeCategory)?.label ?? 'All Skills'

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto scrollable px-1 py-2"
      style={{ minHeight: 0 }}
    >
      <div className="flex items-center justify-between px-3 mb-1">
        <span
          className="font-semibold text-gray-400 uppercase tracking-widest"
          style={{ fontSize: 9, letterSpacing: '0.1em' }}
        >
          {categoryLabel}
        </span>
        <span className="text-gray-300 font-medium" style={{ fontSize: 9 }}>
          {filtered.length} skill{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      <AnimatePresence mode="popLayout">
        {filtered.map((skill, i) => (
          <SkillBar
            key={`${skill.id}-${animToken}`}
            skill={skill}
            index={i}
            inView={inView}
          />
        ))}
      </AnimatePresence>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center py-12 text-gray-300"
          style={{ fontSize: 13 }}
        >
          No skills in this category yet.
        </motion.div>
      )}

      <div style={{ height: 12 }} />
    </div>
  )
}
