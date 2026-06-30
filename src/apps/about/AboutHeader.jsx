import React from 'react'
import { motion } from 'framer-motion'
import { HERO_PORTRAIT } from '@/assets/images/index.js'
import { PROFILE, STATS } from './aboutData'
import { MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.38, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

/** Circular avatar with gradient ring */
function Avatar() {
  return (
    <motion.div
      {...fadeUp(0.05)}
      className="relative flex-shrink-0"
      style={{ width: 88, height: 88 }}
    >
      {/* Gradient ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 50%, #7C3AED 100%)',
          padding: 2,
        }}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
          {HERO_PORTRAIT ? (
            <img
              src={HERO_PORTRAIT}
              alt="Manav Patel"
              className="w-full h-full object-cover object-top"
              style={{ filter: 'grayscale(20%) contrast(1.05)' }}
              draggable={false}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ background: 'linear-gradient(135deg, #1e3a8a, #3B82F6)' }}
            >
              M
            </div>
          )}
        </div>
      </div>

      {/* Online indicator */}
      <div
        className="absolute bottom-1 right-1 rounded-full border-2 border-white"
        style={{ width: 14, height: 14, background: '#22C55E' }}
      />
    </motion.div>
  )
}

/** Compact social link button */
function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className="flex items-center justify-center rounded-lg transition-all duration-150 hover:scale-105 active:scale-95"
      style={{
        width: 30,
        height: 30,
        background: 'rgba(59,130,246,0.08)',
        border: '1px solid rgba(59,130,246,0.18)',
        color: '#3B82F6',
      }}
      onClick={e => e.stopPropagation()}
    >
      <Icon size={14} strokeWidth={2} />
    </a>
  )
}

/** Four stat chips */
function StatGrid() {
  return (
    <motion.div
      {...fadeUp(0.25)}
      className="grid grid-cols-4 gap-2 mt-4"
    >
      {STATS.map(stat => (
        <div
          key={stat.label}
          className="flex flex-col items-center py-2 px-1 rounded-xl"
          style={{
            background: 'rgba(59,130,246,0.06)',
            border: '1px solid rgba(59,130,246,0.12)',
          }}
        >
          <span
            className="font-bold text-gray-900 leading-none"
            style={{ fontSize: 18 }}
          >
            {stat.value}
          </span>
          <span
            className="text-gray-400 mt-0.5 text-center leading-tight"
            style={{ fontSize: 9 }}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  )
}

export default function AboutHeader() {
  return (
    <div
      className="px-5 pt-5 pb-4"
      style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
    >
      {/* Top row: avatar + name block */}
      <div className="flex items-start gap-4">
        <Avatar />

        <div className="flex-1 min-w-0 pt-1">
          <motion.h1
            {...fadeUp(0.1)}
            className="font-bold text-gray-900 leading-tight tracking-tight"
            style={{ fontSize: 20 }}
          >
            {PROFILE.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.14)}
            className="font-medium mt-0.5"
            style={{ fontSize: 12, color: '#3B82F6' }}
          >
            {PROFILE.title}
          </motion.p>

          <motion.div
            {...fadeUp(0.17)}
            className="flex items-center gap-1 mt-1.5"
            style={{ color: '#9CA3AF' }}
          >
            <MapPin size={11} strokeWidth={2} />
            <span style={{ fontSize: 11 }}>{PROFILE.location}</span>
          </motion.div>

          {/* Social row */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex items-center gap-1.5 mt-2.5"
          >
            <SocialLink href={PROFILE.github} icon={Github} label="GitHub" />
            <SocialLink href={PROFILE.linkedin} icon={Linkedin} label="LinkedIn" />
            <SocialLink href={PROFILE.twitter} icon={Twitter} label="X / Twitter" />
            <SocialLink href={`mailto:${PROFILE.email}`} icon={Mail} label="Email" />
          </motion.div>
        </div>
      </div>

      <StatGrid />
    </div>
  )
}
