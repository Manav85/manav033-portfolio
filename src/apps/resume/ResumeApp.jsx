import React from 'react'
import { motion } from 'framer-motion'
import { Download, MapPin, Mail, Github, Linkedin } from 'lucide-react'
import { PROFILE, TIMELINE } from '@/apps/about/aboutData'
import { PROJECTS } from '@/apps/projects/projectsData'

const SECTION = ({ title, children }) => (
  <div className="mb-5">
    <div className="flex items-center gap-2 mb-2">
      <h2 className="font-bold text-gray-900 uppercase tracking-widest" style={{ fontSize: 9, letterSpacing: '0.12em' }}>
        {title}
      </h2>
      <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.1)' }} />
    </div>
    {children}
  </div>
)

const SKILL_GROUPS = [
  { label: 'Languages',  items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'SQL'] },
  { label: 'Frontend',   items: ['React', 'Tailwind CSS', 'HTML5/CSS3', 'Vite'] },
  { label: 'Backend',    items: ['Node.js', 'Express', 'FastAPI', 'REST APIs'] },
  { label: 'Cloud',      items: ['AWS', 'IBM Cloud', 'Docker', 'GitHub Actions'] },
  { label: 'AI / ML',    items: ['TensorFlow', 'OpenCV', 'Biometric AI', 'LLM Agents'] },
  { label: 'Databases',  items: ['MongoDB', 'PostgreSQL', 'SQLite'] },
]

export default function ResumeApp() {
  return (
    <div className="flex flex-col bg-white h-full" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-4 py-2 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#FAFAFA' }}
      >
        <span className="font-medium text-gray-500" style={{ fontSize: 11 }}>
          Resume · Manav Patel
        </span>
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all hover:opacity-80"
          style={{ fontSize: 11, background: '#111', color: '#fff', border: 'none', cursor: 'pointer' }}
          onClick={() => window.print?.()}
        >
          <Download size={11} />
          Export PDF
        </button>
      </div>

      {/* Paper */}
      <div className="flex-1 overflow-y-auto scrollable p-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl p-6 mx-auto"
          style={{ maxWidth: 560, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.07)' }}
        >
          {/* Name block */}
          <div className="mb-5 pb-4" style={{ borderBottom: '2px solid #111' }}>
            <h1 className="font-bold text-gray-900 leading-none tracking-tight" style={{ fontSize: 26 }}>
              {PROFILE.name}
            </h1>
            <p className="font-medium mt-1" style={{ fontSize: 13, color: '#3B82F6' }}>
              {PROFILE.title}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                { icon: MapPin,  text: PROFILE.location },
                { icon: Mail,    text: PROFILE.email },
                { icon: Github,  text: 'github.com/manavpatel' },
                { icon: Linkedin,text: 'linkedin.com/in/manavpatel' },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1" style={{ fontSize: 10, color: '#6B7280' }}>
                  <Icon size={9} strokeWidth={2} />
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Summary */}
          <SECTION title="Summary">
            <p className="text-gray-600 leading-relaxed" style={{ fontSize: 12 }}>
              Full-stack developer and AI engineer building intelligent systems at the intersection of
              health technology, cloud infrastructure, and human impact. Certified across AWS, IBM Cloud,
              Android, and MongoDB AI — with hands-on project experience in biometric recognition and
              AI-powered health monitoring.
            </p>
          </SECTION>

          {/* Projects */}
          <SECTION title="Projects">
            {PROJECTS.map(p => (
              <div key={p.id} className="mb-3">
                <div className="flex items-start justify-between">
                  <span className="font-semibold text-gray-900" style={{ fontSize: 12 }}>{p.name}</span>
                  <span style={{ fontSize: 10, color: '#9CA3AF' }}>{p.year}</span>
                </div>
                <p style={{ fontSize: 11, color: '#3B82F6', fontWeight: 500 }}>{p.type} · {p.client}</p>
                <p className="text-gray-500 mt-0.5 leading-snug" style={{ fontSize: 11 }}>{p.shortDesc}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {p.stack.map(s => (
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
            ))}
          </SECTION>

          {/* Skills */}
          <SECTION title="Technical Skills">
            <div className="space-y-1.5">
              {SKILL_GROUPS.map(g => (
                <div key={g.label} className="flex items-start gap-2">
                  <span className="font-semibold text-gray-700 flex-shrink-0" style={{ fontSize: 11, minWidth: 72 }}>
                    {g.label}
                  </span>
                  <span className="text-gray-500" style={{ fontSize: 11 }}>
                    {g.items.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </SECTION>

          {/* Certifications */}
          <SECTION title="Certifications">
            <div className="space-y-1.5">
              {TIMELINE.map(t => (
                <div key={t.id} className="flex items-start justify-between">
                  <div>
                    <span className="font-medium text-gray-800" style={{ fontSize: 11 }}>{t.title}</span>
                    <span className="text-gray-400 ml-1.5" style={{ fontSize: 10 }}>— {t.org}</span>
                  </div>
                  <span className="text-gray-400 flex-shrink-0 ml-2" style={{ fontSize: 10 }}>{t.year}</span>
                </div>
              ))}
            </div>
          </SECTION>

        </motion.div>
        <div style={{ height: 16 }} />
      </div>
    </div>
  )
}
