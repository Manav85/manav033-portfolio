import React, { useRef, useEffect } from 'react'
import { gsap } from '@/hooks/useGSAP'
import AboutHeader from './AboutHeader'
import AboutBio from './AboutBio'
import AboutSkills from './AboutSkills'
import AboutTimeline from './AboutTimeline'

/**
 * AboutApp — the content rendered inside the About Me window.
 * Composed of: Header (avatar + stats) → Bio → Skills → Timeline.
 * Uses GSAP for the staggered section reveal on first mount.
 */
export default function AboutApp() {
  const containerRef = useRef(null)

  // GSAP entrance on mount
  useEffect(() => {
    if (!containerRef.current) return
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', clearProps: 'transform' }
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex flex-col bg-white"
      style={{ minHeight: '100%', fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div>
        <AboutHeader />
      </div>

      <div>
        <AboutBio />
      </div>

      <div>
        <AboutSkills />
      </div>

      <div>
        <AboutTimeline />
      </div>

      {/* Bottom padding so last item doesn't clip */}
      <div style={{ height: 24 }} />
    </div>
  )
}
