import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Calendar, Tag, User, Zap } from 'lucide-react'
import * as IMAGES from '@/assets/images/index.js'

const IMAGE_MAP = {
  HEALTHAI_COVER: IMAGES.HEALTHAI_COVER,
  IBEPIS_COVER:   IMAGES.IBEPIS_COVER,
}

const ICON_MAP = {
  heart:       '♥',
  brain:       '🧠',
  file:        '📋',
  shield:      '🛡',
  fingerprint: '🔏',
  cpu:         '🤖',
  folder:      '📂',
  siren:       '🚨',
}

/** Metadata row — label + value */
function MetaRow({ icon: Icon, label, value, valueColor }) {
  return (
    <div className="flex items-start gap-2">
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-md mt-0.5"
        style={{ width: 20, height: 20, background: 'rgba(0,0,0,0.06)' }}
      >
        <Icon size={11} color="#6B7280" strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-gray-400 block" style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {label}
        </span>
        <span
          className="font-medium block leading-tight"
          style={{ fontSize: 12, color: valueColor || '#111111' }}
        >
          {value}
        </span>
      </div>
    </div>
  )
}

/** Feature pill */
function FeaturePill({ feature, accentColor }) {
  return (
    <div
      className="flex items-start gap-2 p-2 rounded-lg"
      style={{
        background: 'rgba(0,0,0,0.03)',
        border: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      <span style={{ fontSize: 14, lineHeight: 1, marginTop: 1 }}>
        {ICON_MAP[feature.icon] || '●'}
      </span>
      <div>
        <p className="font-semibold text-gray-900" style={{ fontSize: 11 }}>
          {feature.label}
        </p>
        <p className="text-gray-500 leading-snug" style={{ fontSize: 10 }}>
          {feature.desc}
        </p>
      </div>
    </div>
  )
}

/** Tech stack tag */
function StackTag({ name, accentColor }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-md font-medium"
      style={{
        fontSize: 10,
        background: `${accentColor}12`,
        border: `1px solid ${accentColor}30`,
        color: accentColor,
      }}
    >
      {name}
    </span>
  )
}

/**
 * ProjectDetail — slides in from the right when a project card is clicked.
 * Matches the macOS app-window detail style in the reference video:
 *   traffic lights · title · description · metadata · hero image
 */
export default function ProjectDetail({ project, onClose }) {
  const heroImage = IMAGE_MAP[project.imageKey]

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 40, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 flex flex-col bg-white overflow-hidden"
          style={{ borderRadius: '0 0 12px 12px', zIndex: 10 }}
        >
          {/* ── Fake macOS titlebar ──────────────────────────── */}
          <div
            className="flex items-center gap-1.5 px-3 flex-shrink-0"
            style={{
              height: 32,
              background: 'rgba(246,246,246,0.97)',
              borderBottom: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            {/* Traffic lights (decorative — close handled by our button) */}
            <div className="flex gap-1.5">
              <div className="rounded-full" style={{ width: 10, height: 10, background: '#FF5F57' }} />
              <div className="rounded-full" style={{ width: 10, height: 10, background: '#FFBD2E' }} />
              <div className="rounded-full" style={{ width: 10, height: 10, background: '#28C840' }} />
            </div>
            <span
              className="flex-1 text-center text-gray-500 font-medium truncate"
              style={{ fontSize: 11 }}
            >
              {project.name}
            </span>
            {/* Real close button */}
            <button
              onClick={onClose}
              className="flex items-center justify-center rounded-full transition-all duration-150 hover:bg-black/10 active:scale-95"
              style={{ width: 20, height: 20, border: 'none', background: 'transparent', cursor: 'pointer' }}
              aria-label="Close project detail"
            >
              <X size={11} color="#6B7280" strokeWidth={2.5} />
            </button>
          </div>

          {/* ── Scrollable content ───────────────────────────── */}
          <div className="flex-1 overflow-y-auto scrollable">

            {/* Hero image */}
            {heroImage && (
              <div
                className="w-full flex-shrink-0 overflow-hidden"
                style={{ height: 160 }}
              >
                <img
                  src={heroImage}
                  alt={project.name}
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </div>
            )}

            {/* Content body */}
            <div className="px-4 pt-4 pb-6">

              {/* Status badge */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-medium"
                  style={{
                    fontSize: 10,
                    background: `${project.statusColor}18`,
                    border: `1px solid ${project.statusColor}40`,
                    color: project.statusColor,
                  }}
                >
                  <span
                    className="rounded-full"
                    style={{ width: 5, height: 5, background: project.statusColor, display: 'inline-block' }}
                  />
                  {project.status}
                </span>
                <button
                  className="flex items-center gap-1 text-gray-400 transition-colors hover:text-gray-600"
                  style={{ fontSize: 10, background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <ExternalLink size={10} strokeWidth={2} />
                  View
                </button>
              </div>

              {/* Title */}
              <h2
                className="font-bold text-gray-900 leading-tight tracking-tight mb-1"
                style={{ fontSize: 20 }}
              >
                {project.name}
              </h2>
              <p
                className="font-medium mb-3"
                style={{ fontSize: 11, color: project.accentColor }}
              >
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: 12 }}>
                {project.description}
              </p>

              {/* Metadata grid */}
              <div
                className="grid grid-cols-2 gap-3 p-3 rounded-xl mb-4"
                style={{ background: 'rgba(0,0,0,0.025)', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <MetaRow icon={Calendar} label="Year"         value={project.year} />
                <MetaRow icon={Tag}      label="Type"         value={project.type} />
                <MetaRow icon={User}     label="Client"       value={project.client} />
                <MetaRow
                  icon={Zap}
                  label="Status"
                  value={project.status}
                  valueColor={project.statusColor}
                />
              </div>

              {/* Features */}
              <p
                className="font-semibold text-gray-400 uppercase tracking-widest mb-2"
                style={{ fontSize: 9, letterSpacing: '0.1em' }}
              >
                Key Features
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.features.map(f => (
                  <FeaturePill key={f.label} feature={f} accentColor={project.accentColor} />
                ))}
              </div>

              {/* Tech stack */}
              <p
                className="font-semibold text-gray-400 uppercase tracking-widest mb-2"
                style={{ fontSize: 9, letterSpacing: '0.1em' }}
              >
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map(name => (
                  <StackTag key={name} name={name} accentColor={project.accentColor} />
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
