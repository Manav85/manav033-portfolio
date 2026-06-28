import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HERO_PORTRAIT } from '@/assets/images/index.js'
import { PROJECTS } from './projectsData'
import ProjectCard from './ProjectCard'

/**
 * ProjectsHero — full-bleed B&W editorial photo with floating project cards.
 * Must fill its parent via absolute inset-0; parent must set height explicitly.
 */
export default function ProjectsHero({ activeProjectId, onCardClick }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* B&W photo */}
      {HERO_PORTRAIT ? (
        <img
          src={HERO_PORTRAIT}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            filter: 'grayscale(100%) contrast(1.08) brightness(0.78)',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%)' }}
        />
      )}

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.52) 100%)',
        }}
      />

      {/* Dim overlay when a card is active */}
      <AnimatePresence>
        {activeProjectId && (
          <motion.div
            key="dim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'rgba(0,0,0,0.22)' }}
          />
        )}
      </AnimatePresence>

      {/* Floating project cards */}
      {PROJECTS.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          isActive={activeProjectId === project.id}
          onClick={onCardClick}
        />
      ))}

      {/* Hint label */}
      <motion.div
        className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none"
        animate={{ opacity: activeProjectId ? 0 : 0.72 }}
        transition={{ duration: 0.25 }}
      >
        <span
          className="text-white px-2.5 py-1 rounded-full"
          style={{
            fontSize: 10,
            background: 'rgba(0,0,0,0.48)',
            backdropFilter: 'blur(6px)',
            letterSpacing: '0.04em',
          }}
        >
          Click a project to explore →
        </span>
      </motion.div>
    </div>
  )
}
