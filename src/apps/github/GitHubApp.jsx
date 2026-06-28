import React from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitFork, ExternalLink, Code2, Calendar, Activity } from 'lucide-react'
import { PROFILE } from '@/apps/about/aboutData'

const REPOS = [
  {
    id: 'healthai',
    name: 'healthai-pro',
    description: 'AI-powered health monitoring system with real-time vitals tracking and predictive analytics.',
    language: 'Python',
    langColor: '#3776AB',
    stars: 0,
    forks: 0,
    topics: ['ai', 'health', 'machine-learning', 'fastapi'],
    updatedAt: 'Jun 2026',
    isPrivate: false,
  },
  {
    id: 'ibepis',
    name: 'ibepis',
    description: 'Intelligent Biometric Emergency Patient Identification System using face recognition and medical record retrieval.',
    language: 'Python',
    langColor: '#3776AB',
    stars: 0,
    forks: 0,
    topics: ['biometrics', 'healthcare', 'opencv', 'tensorflow'],
    updatedAt: 'Jun 2026',
    isPrivate: false,
  },
  {
    id: 'portfolio',
    name: 'portfolio',
    description: 'Interactive macOS-style desktop portfolio built with React, Framer Motion, and GSAP.',
    language: 'JavaScript',
    langColor: '#F7DF1E',
    stars: 0,
    forks: 0,
    topics: ['react', 'portfolio', 'framer-motion', 'tailwind'],
    updatedAt: 'Jun 2026',
    isPrivate: false,
  },
]

const CONTRIB_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
// Simulated contribution intensity grid (0–4)
const CONTRIB_GRID = Array.from({ length: 6 }, (_, mi) =>
  Array.from({ length: 4 }, (_, wi) => Math.floor(Math.random() * 5))
)

const CONTRIB_COLORS = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']

function ContribGraph() {
  return (
    <div
      className="p-3 rounded-xl"
      style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.07)' }}
    >
      <div className="flex items-center gap-1.5 mb-2">
        <Activity size={11} color="#6B7280" strokeWidth={2} />
        <span className="font-semibold text-gray-500" style={{ fontSize: 10 }}>
          Contribution activity · 2026
        </span>
      </div>
      <div className="flex gap-1">
        {CONTRIB_MONTHS.map((month, mi) => (
          <div key={month} className="flex flex-col gap-0.5 flex-1">
            {Array.from({ length: 4 }).map((_, wi) => {
              const level = (mi * 4 + wi) % 5
              return (
                <motion.div
                  key={wi}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (mi * 4 + wi) * 0.01 }}
                  className="rounded-sm"
                  style={{
                    height: 10,
                    background: CONTRIB_COLORS[level],
                  }}
                  title={`${month} W${wi + 1}`}
                />
              )
            })}
            <span style={{ fontSize: 7, color: '#9CA3AF', textAlign: 'center', marginTop: 2 }}>
              {month}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RepoCard({ repo, index }) {
  return (
    <motion.a
      href={`${PROFILE.github}/${repo.name}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay: index * 0.07 }}
      whileHover={{ y: -1, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
      className="block p-3 rounded-xl no-underline"
      style={{
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.09)',
        textDecoration: 'none',
      }}
      onClick={e => e.stopPropagation()}
    >
      <div className="flex items-start justify-between mb-1.5">
        <div className="flex items-center gap-1.5">
          <Code2 size={12} color="#6B7280" strokeWidth={2} />
          <span className="font-semibold text-blue-600" style={{ fontSize: 12 }}>
            {repo.name}
          </span>
          {repo.isPrivate && (
            <span
              className="px-1.5 py-0.5 rounded-full font-medium"
              style={{ fontSize: 8, background: 'rgba(0,0,0,0.06)', color: '#6B7280', border: '1px solid rgba(0,0,0,0.1)' }}
            >
              Private
            </span>
          )}
        </div>
        <ExternalLink size={10} color="#9CA3AF" />
      </div>

      <p className="text-gray-500 leading-snug mb-2" style={{ fontSize: 11 }}>
        {repo.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-2">
        {repo.topics.map(t => (
          <span
            key={t}
            className="px-1.5 py-0.5 rounded-full"
            style={{ fontSize: 9, background: 'rgba(59,130,246,0.08)', color: '#3B82F6', border: '1px solid rgba(59,130,246,0.2)' }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <span
            className="rounded-full"
            style={{ width: 9, height: 9, background: repo.langColor, display: 'inline-block' }}
          />
          <span style={{ fontSize: 10, color: '#6B7280' }}>{repo.language}</span>
        </span>
        <span className="flex items-center gap-0.5" style={{ fontSize: 10, color: '#6B7280' }}>
          <Star size={9} strokeWidth={2} />
          {repo.stars}
        </span>
        <span className="flex items-center gap-0.5" style={{ fontSize: 10, color: '#6B7280' }}>
          <GitFork size={9} strokeWidth={2} />
          {repo.forks}
        </span>
        <span className="flex items-center gap-0.5 ml-auto" style={{ fontSize: 9, color: '#9CA3AF' }}>
          <Calendar size={8} strokeWidth={2} />
          {repo.updatedAt}
        </span>
      </div>
    </motion.a>
  )
}

export default function GitHubApp() {
  return (
    <div className="flex flex-col bg-white h-full" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <div
        className="px-5 pt-4 pb-4 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.07)', background: '#FAFAFA' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center rounded-2xl"
            style={{ width: 44, height: 44, background: '#24292e' }}
          >
            <Github size={22} color="#fff" strokeWidth={1.8} />
          </div>
          <div>
            <h1 className="font-bold text-gray-900" style={{ fontSize: 16 }}>manavpatel</h1>
            <p style={{ fontSize: 11, color: '#6B7280' }}>github.com/manavpatel</p>
          </div>
          <motion.a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium no-underline"
            style={{
              fontSize: 11,
              background: '#24292e',
              color: '#fff',
              border: 'none',
              textDecoration: 'none',
            }}
            onClick={e => e.stopPropagation()}
          >
            <ExternalLink size={11} />
            Open
          </motion.a>
        </div>

        {/* Stats row */}
        <div className="flex gap-4 mt-3">
          {[
            { label: 'Repositories', value: REPOS.length },
            { label: 'Followers',    value: 0 },
            { label: 'Following',    value: 0 },
          ].map(s => (
            <div key={s.label}>
              <span className="font-bold text-gray-900" style={{ fontSize: 14 }}>{s.value}</span>
              <span className="ml-1" style={{ fontSize: 10, color: '#9CA3AF' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollable px-4 py-4 space-y-3">
        <ContribGraph />

        <p
          className="font-semibold text-gray-400 uppercase tracking-widest pt-1"
          style={{ fontSize: 9, letterSpacing: '0.1em' }}
        >
          Repositories
        </p>

        {REPOS.map((repo, i) => (
          <RepoCard key={repo.id} repo={repo} index={i} />
        ))}

        <div style={{ height: 12 }} />
      </div>
    </div>
  )
}
