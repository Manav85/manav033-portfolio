import React, { useState, useRef, useEffect } from 'react'
import { gsap } from '@/hooks/useGSAP'
import SkillsHeader from './SkillsHeader'
import CategoryTabs from './CategoryTabs'
import SkillsList from './SkillsList'
import SkillsLegend from './SkillsLegend'

/**
 * SkillsApp — content rendered inside the Skills / Certificates window.
 *
 * Layout (vertical, full-height flex column):
 *   ┌─────────────────────────────┐
 *   │  Header (title + stat chips)│
 *   ├─────────────────────────────┤
 *   │  Category filter tabs       │
 *   ├─────────────────────────────┤
 *   │  Scrollable SkillBar list   │  ← flex-1, overflows
 *   ├─────────────────────────────┤
 *   │  Legend footer              │
 *   └─────────────────────────────┘
 */
export default function SkillsApp() {
  const [activeCategory, setActiveCategory] = useState('all')
  const containerRef = useRef(null)

  // GSAP entrance — whole window fades + slides up
  useEffect(() => {
    if (!containerRef.current) return
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', clearProps: 'transform' }
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex flex-col bg-white"
      style={{ height: '100%', fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <SkillsHeader />
      <CategoryTabs activeCategory={activeCategory} onChange={setActiveCategory} />
      <SkillsList activeCategory={activeCategory} />
      <SkillsLegend />
    </div>
  )
}
