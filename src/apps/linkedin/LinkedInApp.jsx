import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, MapPin, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react'
import { HERO_PORTRAIT } from '@/assets/images/index.js'
import { PROFILE, TIMELINE } from '@/apps/about/aboutData'
import { PROJECTS } from '@/apps/projects/projectsData'

const EXPERIENCES = [
  {
    id: 'exp-freelance',
    role: 'Freelance Developer',
    company: 'Self-employed',
    period: '2025 – Present',
    type: 'Part-time',
    description: 'Building AI-powered applications and custom software solutions for clients. Specialising in health technology and cloud-integrated systems.',
    skills: ['React', 'Python', 'FastAPI', 'MongoDB'],
    color: '#3B82F6',
  },
]

function Banner() {
  return (
    <div className="relative flex-shrink-0">
      {/* Banner gradient */}
      <div
        className="w-full"
        style={{
          height: 80,
          background: 'linear-gradient(135deg, #0a66c2 0%, #004182 50%, #0a66c2 100%)',
        }}
      />
      {/* Avatar */}
      <div className="absolute left-4" style={{ bottom: -24 }}>
        <div
          className="rounded-full overflow-hidden"
          style={{
            width: 56,
            height: 56,
            border: '3px solid #fff',
            background: '#e0e0e0',
          }}
        >
          {HERO_PORTRAIT ? (
            <img
              src={HERO_PORTRAIT}
              alt="Manav Patel"
              className="w-full h-full object-cover object-top"
              style={{ filter: 'grayscale(20%)' }}
              draggable={false}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-white font-bold"
              style={{ background: '#0a66c2', fontSize: 20 }}
            >
              M
            </div>
          )}
        </div>
      </div>

      {/* Open LinkedIn button */}
      <motion.a
        href={PROFILE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="absolute right-4 bottom-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold no-underline"
        style={{
          fontSize: 11,
          background: '#0a66c2',
          color: '#fff',
          textDecoration: 'none',
        }}
        onClick={e => e.stopPropagation()}
      >
        <ExternalLink size={10} />
        Open Profile
      </motion.a>
    </div>
  )
}

function Section({ title, icon: Icon, children }) {
  return (
    <div className="mb-4">
      <div
        className="flex items-center gap-2 px-4 py-2"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
      >
        <Icon size={13} color="#0a66c2" strokeWidth={2} />
        <h2 className="font-bold text-gray-900" style={{ fontSize: 13 }}>{title}</h2>
      </div>
      <div className="px-4 pt-2">{children}</div>
    </div>
  )
}

export default function LinkedInApp() {
  return (
    <div className="flex flex-col bg-white h-full" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Banner />

<<<<<<< HEAD
      <div className="flex-1 overflow-y-auto scrollable" style={{ minHeight: 0 }}>
=======
      <div className="flex-1 overflow-y-auto scrollable">
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
        {/* Identity block */}
        <div
          className="px-4 pb-4 pt-8"
          style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
        >
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h1 className="font-bold text-gray-900 leading-tight" style={{ fontSize: 18 }}>
              {PROFILE.name}
            </h1>
            <p className="font-medium text-gray-700 mt-0.5" style={{ fontSize: 12 }}>
              {PROFILE.title}
            </p>
            <div className="flex items-center gap-1 mt-1.5" style={{ color: '#6B7280' }}>
              <MapPin size={10} strokeWidth={2} />
              <span style={{ fontSize: 11 }}>{PROFILE.location}</span>
            </div>
            <p className="text-gray-500 leading-relaxed mt-2" style={{ fontSize: 11 }}>
              {PROFILE.tagline}
            </p>
          </motion.div>
        </div>

        {/* Experience */}
        <Section title="Experience" icon={Briefcase}>
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="flex gap-3 pb-3"
              style={{ borderBottom: i < EXPERIENCES.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-lg"
                style={{ width: 36, height: 36, background: `${exp.color}15`, border: `1px solid ${exp.color}25` }}
              >
                <Briefcase size={16} color={exp.color} strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900" style={{ fontSize: 12 }}>{exp.role}</p>
                <p style={{ fontSize: 11, color: '#0a66c2', fontWeight: 500 }}>{exp.company} · {exp.type}</p>
                <p style={{ fontSize: 10, color: '#9CA3AF' }}>{exp.period}</p>
                <p className="text-gray-500 mt-1 leading-snug" style={{ fontSize: 11 }}>{exp.description}</p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {exp.skills.map(s => (
                    <span
                      key={s}
                      className="px-1.5 py-0.5 rounded font-medium"
                      style={{ fontSize: 9, background: 'rgba(0,0,0,0.05)', color: '#374151' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </Section>

        {/* Projects */}
        <Section title="Projects" icon={Briefcase}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="flex gap-3 pb-3"
              style={{ borderBottom: i < PROJECTS.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
            >
              <div
                className="flex-shrink-0 rounded-lg flex items-center justify-center"
                style={{
                  width: 36,
                  height: 36,
                  background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`,
                }}
              >
                <span style={{ fontSize: 16 }}>{p.id === 'healthai' ? '❤️' : '🔬'}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900" style={{ fontSize: 12 }}>{p.name}</p>
                <p style={{ fontSize: 11, color: p.accentColor, fontWeight: 500 }}>{p.type} · {p.year}</p>
                <p className="text-gray-500 mt-0.5 leading-snug" style={{ fontSize: 11 }}>{p.shortDesc}</p>
              </div>
            </motion.div>
          ))}
        </Section>

        {/* Education */}
        <Section title="Education" icon={GraduationCap}>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3 pb-3"
          >
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-lg"
              style={{ width: 36, height: 36, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
            >
              <GraduationCap size={16} color="#3B82F6" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-semibold text-gray-900" style={{ fontSize: 12 }}>Bachelor of Technology — CSE</p>
              <p style={{ fontSize: 11, color: '#0a66c2', fontWeight: 500 }}>University · Gujarat, India</p>
              <p style={{ fontSize: 10, color: '#9CA3AF' }}>2023 – 2027 (Expected)</p>
            </div>
          </motion.div>
        </Section>

        {/* Certifications */}
        <Section title="Licences & Certifications" icon={Award}>
          <div className="space-y-2 pb-3">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.04 }}
                className="flex items-start justify-between"
              >
                <div>
                  <p className="font-medium text-gray-800" style={{ fontSize: 11 }}>{t.title}</p>
                  <p style={{ fontSize: 10, color: '#0a66c2' }}>{t.org}</p>
                </div>
                <span style={{ fontSize: 10, color: '#9CA3AF', flexShrink: 0, marginLeft: 8 }}>{t.year}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        <div style={{ height: 16 }} />
      </div>
    </div>
  )
}
