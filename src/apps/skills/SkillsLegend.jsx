import React from 'react'
import { SKILL_LEVELS } from './skillsData'

/**
 * SkillsLegend — a compact footer strip showing what each level colour means.
 */
export default function SkillsLegend() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center gap-4 px-4 py-2"
      style={{
        borderTop: '1px solid rgba(0,0,0,0.07)',
        background: 'rgba(0,0,0,0.015)',
      }}
    >
      {Object.entries(SKILL_LEVELS).map(([key, level]) => (
        <div key={key} className="flex items-center gap-1.5">
          <div
            className="rounded-full flex-shrink-0"
            style={{ width: 7, height: 7, background: level.color }}
          />
          <span style={{ fontSize: 9, color: '#9CA3AF', fontWeight: 500 }}>
            {level.label}
          </span>
        </div>
      ))}
    </div>
  )
}
