import React, { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * ProjectCard — a small floating thumbnail+label that sits over
 * the B&W editorial photo inside the Projects window.
 * Mirrors the interaction shown in the reference video exactly.
 *
 * Props:
 *   project   — project data object
 *   isActive  — whether this card's detail panel is open
 *   onClick   — called with project when clicked
 */
export default function ProjectCard({ project, isActive, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="absolute flex flex-col items-center cursor-pointer"
      style={{ left: project.cardPos.x, top: project.cardPos.y }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 22,
        delay: PROJECTS_ORDER[project.id] * 0.12,
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onClick(project)}
    >
      {/* Thumbnail tile */}
      <motion.div
        animate={{
          scale: hovered ? 1.08 : isActive ? 1.05 : 1,
          boxShadow: isActive
            ? `0 0 0 2px ${project.accentColor}, 0 8px 24px rgba(0,0,0,0.5)`
            : hovered
            ? '0 6px 20px rgba(0,0,0,0.5)'
            : '0 3px 10px rgba(0,0,0,0.4)',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="rounded-lg overflow-hidden flex-shrink-0"
        style={{
          width: 36,
          height: 36,
          background: project.thumbColor,
        }}
      >
        {/* Inner icon / colour block — matches reference video thumbnails */}
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
          }}
        >
          <span style={{ fontSize: 16 }}>
            {project.id === 'healthai' ? '❤️' : '🔬'}
          </span>
        </div>
      </motion.div>

      {/* Label pill — highlighted blue when hovered, as per reference */}
      <motion.div
        animate={{
          opacity: hovered || isActive ? 1 : 0.85,
          backgroundColor: isActive
            ? project.accentColor
            : hovered
            ? '#3B82F6'
            : 'rgba(0,0,0,0.55)',
          y: hovered ? -1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="mt-1 px-1.5 py-0.5 rounded-md whitespace-nowrap"
        style={{ backdropFilter: 'blur(6px)' }}
      >
        <span
          className="text-white font-medium"
          style={{ fontSize: 9, lineHeight: 1.2 }}
        >
          {project.name}
        </span>
      </motion.div>
    </motion.div>
  )
}

// Stagger order for entrance animation
const PROJECTS_ORDER = { healthai: 0, ibepis: 1 }
