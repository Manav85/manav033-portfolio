import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutGrid, Code2, Monitor, Server,
  Cloud, Cpu, Smartphone, Database,
} from 'lucide-react'
import { CATEGORIES } from './skillsData'

const ICON_MAP = {
  grid:       LayoutGrid,
  code:       Code2,
  monitor:    Monitor,
  server:     Server,
  cloud:      Cloud,
  cpu:        Cpu,
  smartphone: Smartphone,
  database:   Database,
}

export default function CategoryTabs({ activeCategory, onChange }) {
  const scrollRef = useRef(null)

  // Auto-scroll active tab into view
  useEffect(() => {
    if (!scrollRef.current) return
    const activeEl = scrollRef.current.querySelector('[data-active="true"]')
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [activeCategory])

  return (
    <div
      className="flex-shrink-0 px-4 py-2"
      style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
    >
      <div
        ref={scrollRef}
        className="flex gap-1.5 overflow-x-auto pb-0.5"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {CATEGORIES.map((cat) => {
          const Icon = ICON_MAP[cat.icon] || LayoutGrid
          const isActive = activeCategory === cat.id

          return (
            <motion.button
              key={cat.id}
              data-active={isActive}
              onClick={() => onChange(cat.id)}
              className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg flex-shrink-0 font-medium transition-colors duration-150"
              style={{
                fontSize: 11,
                color: isActive ? '#ffffff' : '#6B7280',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Sliding background pill */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: '#3B82F6', zIndex: 0 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 5 }}>
                <Icon
                  size={12}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  color={isActive ? '#ffffff' : '#9CA3AF'}
                />
                {cat.label}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
