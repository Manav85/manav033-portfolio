import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from '@/hooks/useGSAP'
import { PROJECTS } from './projectsData'
import ProjectsHero from './ProjectsHero'
import ProjectDetail from './ProjectDetail'

/**
 * ProjectsApp — content rendered inside the Projects window.
 *
 * Layout (vertical stack):
 *   ┌─────────────────────────────┐
 *   │  B&W Hero + floating cards  │  ← ProjectsHero (fixed height)
 *   ├─────────────────────────────┤
 *   │  Project detail panel       │  ← ProjectDetail (AnimatePresence)
 *   └─────────────────────────────┘
 *
 * When a card is clicked the detail panel slides up over the hero
 * (positioned absolutely), matching the reference video behaviour.
 */
export default function ProjectsApp() {
  const [activeProject, setActiveProject] = useState(null)
  const containerRef = useRef(null)

  // GSAP entrance — hero photo fades in, then cards pop
  useEffect(() => {
    if (!containerRef.current) return
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: 'power2.out' }
    )
  }, [])

  const handleCardClick = (project) => {
    // Toggle: clicking the active project closes the detail
    setActiveProject(prev => prev?.id === project.id ? null : project)
  }

  const handleCloseDetail = () => setActiveProject(null)

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col bg-black"
      style={{ height: '100%', minHeight: 480, fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* ── Hero canvas with floating cards ───────────────── */}
      <div className="relative" style={{ flex: '1 1 0', minHeight: 320, overflow: 'hidden' }}>
        <ProjectsHero
          activeProjectId={activeProject?.id ?? null}
          onCardClick={handleCardClick}
        />

        {/* Detail panel — absolutely overlays the hero from below */}
        <AnimatePresence>
          {activeProject && (
            <ProjectDetail
              key={activeProject.id}
              project={activeProject}
              onClose={handleCloseDetail}
            />
          )}
        </AnimatePresence>
      </div>

      {/* ── Project index strip ────────────────────────────── */}
      <AnimatePresence>
        {!activeProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 flex gap-2 px-4 py-3 overflow-x-auto"
            style={{
              background: 'rgba(255,255,255,0.05)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {PROJECTS.map((project, i) => (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleCardClick(project)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl flex-shrink-0 text-left transition-all duration-150"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  cursor: 'pointer',
                  minWidth: 160,
                }}
                whileHover={{ scale: 1.02, background: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Colour tile */}
                <div
                  className="rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 32,
                    height: 32,
                    background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                  }}
                >
                  <span style={{ fontSize: 14 }}>
                    {project.id === 'healthai' ? '❤️' : '🔬'}
                  </span>
                </div>

                <div className="min-w-0">
                  <p
                    className="text-white font-semibold truncate leading-tight"
                    style={{ fontSize: 12 }}
                  >
                    {project.name}
                  </p>
                  <p
                    className="truncate leading-tight"
                    style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)' }}
                  >
                    {project.type}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
