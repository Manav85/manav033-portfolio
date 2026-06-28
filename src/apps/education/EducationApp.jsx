import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award, ExternalLink } from 'lucide-react'

const EDUCATION = [
  {
    id: 'degree',
    type: 'degree',
    institution: 'University — Gujarat, India',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    period: '2023 – 2027 (Expected)',
    status: 'In Progress',
    statusColor: '#3B82F6',
    description: 'Core coursework spanning algorithms, operating systems, database systems, AI fundamentals, computer networks, and software engineering principles.',
    highlights: [
      'AI & Machine Learning track',
      'Cloud Computing electives',
      'Mobile Application Development',
      'Data Structures & Algorithms',
    ],
    icon: GraduationCap,
    color: '#3B82F6',
    bg: 'linear-gradient(135deg, #1e3a8a 0%, #3B82F6 100%)',
  },
]

const SELF_LEARNING = [
  {
    id: 'sl-android',
    title: 'Android Mobile Application Development',
    provider: 'Meta via Coursera',
    type: 'Professional Certificate',
    date: 'Jun 2026',
    color: '#0866FF',
    icon: '📱',
  },
  {
    id: 'sl-aws',
    title: 'AWS Cloud Practitioner Essentials',
    provider: 'Amazon Web Services',
    type: 'Cloud Certification',
    date: 'May 2026',
    color: '#FF9900',
    icon: '☁️',
  },
  {
    id: 'sl-github',
    title: 'Introduction to GitHub',
    provider: 'Microsoft',
    type: 'Technical Certification',
    date: 'Jun 2026',
    color: '#00A4EF',
    icon: '🐙',
  },
  {
    id: 'sl-ibm-cloud',
    title: 'Introduction to Cloud',
    provider: 'IBM / CognitiveClass.ai',
    type: 'Cloud Fundamentals',
    date: 'May 2026',
    color: '#006699',
    icon: '🌐',
  },
  {
    id: 'sl-ibm-fund',
    title: 'Cloud Computing Fundamentals',
    provider: 'IBM SkillsBuild',
    type: 'IBM Badge',
    date: 'Apr 2026',
    color: '#054ADA',
    icon: '🏗️',
  },
  {
    id: 'sl-mongodb',
    title: 'Building AI Agents with MongoDB',
    provider: 'MongoDB University',
    type: 'Skill Certificate',
    date: 'Apr 2026',
    color: '#00ED64',
    icon: '🍃',
  },
]

function DegreeCard({ edu }) {
  const Icon = edu.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden mb-4"
      style={{ border: `1px solid ${edu.color}30` }}
    >
      {/* Header gradient */}
      <div
        className="px-4 py-4 flex items-start gap-3"
        style={{ background: edu.bg }}
      >
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-xl"
          style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.2)' }}
        >
          <Icon size={22} color="#fff" strokeWidth={1.8} />
        </div>
        <div>
          <span
            className="inline-flex items-center px-2 py-0.5 rounded-full font-semibold mb-1"
            style={{ fontSize: 9, background: 'rgba(255,255,255,0.2)', color: '#fff', letterSpacing: '0.06em' }}
          >
            {edu.status}
          </span>
          <h2 className="font-bold text-white leading-snug" style={{ fontSize: 14 }}>{edu.degree}</h2>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>{edu.field}</p>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-3 bg-white">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-gray-700" style={{ fontSize: 12 }}>{edu.institution}</span>
          <span className="font-medium" style={{ fontSize: 10, color: '#9CA3AF' }}>{edu.period}</span>
        </div>
        <p className="text-gray-500 leading-relaxed mb-3" style={{ fontSize: 11 }}>{edu.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {edu.highlights.map(h => (
            <span
              key={h}
              className="px-2 py-0.5 rounded-lg font-medium"
              style={{ fontSize: 10, background: `${edu.color}10`, border: `1px solid ${edu.color}25`, color: edu.color }}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function SelfLearnItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.22, delay: index * 0.05 }}
      className="flex items-center gap-3 py-2.5 px-3 rounded-xl"
      style={{ background: `${item.color}06`, border: `1px solid ${item.color}18` }}
    >
      <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-800 leading-snug" style={{ fontSize: 11 }}>{item.title}</p>
        <p style={{ fontSize: 10, color: item.color, fontWeight: 500 }}>{item.provider}</p>
      </div>
      <div className="flex-shrink-0 text-right">
        <span
          className="block px-1.5 py-0.5 rounded font-medium"
          style={{ fontSize: 9, background: `${item.color}15`, color: item.color }}
        >
          {item.type}
        </span>
        <span className="block mt-0.5" style={{ fontSize: 9, color: '#9CA3AF' }}>{item.date}</span>
      </div>
    </motion.div>
  )
}

export default function EducationApp() {
  return (
    <div className="flex flex-col bg-white h-full" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <div className="px-5 pt-4 pb-3 flex-shrink-0" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="flex items-center gap-2 mb-0.5">
          <GraduationCap size={16} color="#3B82F6" strokeWidth={2} />
          <h1 className="font-bold text-gray-900" style={{ fontSize: 17 }}>Education</h1>
        </div>
        <p style={{ fontSize: 11, color: '#9CA3AF' }}>Academic background & self-directed learning</p>
      </div>

      <div className="flex-1 overflow-y-auto scrollable px-4 py-4">
        {/* Formal education */}
        {EDUCATION.map(edu => <DegreeCard key={edu.id} edu={edu} />)}

        {/* Self-learning section */}
        <div className="mb-2 flex items-center gap-2">
          <BookOpen size={12} color="#6B7280" strokeWidth={2} />
          <span
            className="font-semibold text-gray-400 uppercase tracking-widest"
            style={{ fontSize: 9, letterSpacing: '0.1em' }}
          >
            Certifications & Self-directed Learning
          </span>
        </div>

        <div className="space-y-2">
          {SELF_LEARNING.map((item, i) => (
            <SelfLearnItem key={item.id} item={item} index={i} />
          ))}
        </div>

        <div style={{ height: 16 }} />
      </div>
    </div>
  )
}
