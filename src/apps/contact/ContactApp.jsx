import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Instagram, MapPin, Send, CheckCircle } from 'lucide-react'
import { PROFILE } from '@/apps/about/aboutData'

const CONTACT_LINKS = [
  {
    id: 'email',
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
    color: '#3B82F6',
    bg: 'linear-gradient(135deg, #1e40af, #3B82F6)',
    desc: 'Best for project inquiries',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/manavpatel',
    href: PROFILE.github,
    icon: Github,
    color: '#24292e',
    bg: 'linear-gradient(135deg, #24292e, #57606a)',
    desc: 'Code & open source',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/manavpatel',
    href: PROFILE.linkedin,
    icon: Linkedin,
    color: '#0a66c2',
    bg: 'linear-gradient(135deg, #0a66c2, #0e86d4)',
    desc: 'Professional network',
  },
  {
    id: 'twitter',
    label: 'X / Twitter',
    value: 'x.com/manavpatel',
    href: PROFILE.twitter,
    icon: Twitter,
    color: '#000000',
    bg: 'linear-gradient(135deg, #000, #333)',
    desc: 'Thoughts & updates',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: 'instagram.com/manavpatel',
    href: PROFILE.instagram,
    icon: Instagram,
    color: '#E1306C',
    bg: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    desc: 'Personal moments',
  },
]

function ContactLink({ item, index }) {
  const Icon = item.icon
  return (
    <motion.a
      href={item.href}
      target={item.id !== 'email' ? '_blank' : '_self'}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay: index * 0.06 }}
      whileHover={{ scale: 1.015, x: 2 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-3 px-3 py-3 rounded-xl no-underline"
      style={{
        background: `${item.color}08`,
        border: `1px solid ${item.color}20`,
        textDecoration: 'none',
        display: 'flex',
      }}
      onClick={e => e.stopPropagation()}
    >
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-xl"
        style={{ width: 40, height: 40, background: item.bg }}
      >
        <Icon size={18} color="#fff" strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900" style={{ fontSize: 12 }}>{item.label}</p>
        <p className="truncate" style={{ fontSize: 10, color: item.color }}>{item.value}</p>
        <p style={{ fontSize: 9, color: '#9CA3AF' }}>{item.desc}</p>
      </div>
      <div
        className="flex-shrink-0 rounded-lg px-2 py-1 font-medium"
        style={{ fontSize: 9, background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25` }}
      >
        Open →
      </div>
    </motion.a>
  )
}

function QuickMessageForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!form.name || !form.message) return
    // Compose mailto link
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:${PROFILE.email}?subject=${subject}&body=${body}`, '_self')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div
      className="mt-4 p-4 rounded-2xl"
      style={{ background: 'rgba(59,130,246,0.04)', border: '1px solid rgba(59,130,246,0.12)' }}
    >
      <p className="font-semibold text-gray-700 mb-3 flex items-center gap-1.5" style={{ fontSize: 12 }}>
        <Send size={12} color="#3B82F6" />
        Quick Message
      </p>

      <div className="space-y-2">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
          className="w-full px-3 py-2 rounded-lg outline-none transition-all"
          style={{
            fontSize: 12,
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.12)',
            fontFamily: 'inherit',
          }}
          onFocus={e => e.target.style.borderColor = '#3B82F6'}
          onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
        />
        <input
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
          className="w-full px-3 py-2 rounded-lg outline-none transition-all"
          style={{
            fontSize: 12,
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.12)',
            fontFamily: 'inherit',
          }}
          onFocus={e => e.target.style.borderColor = '#3B82F6'}
          onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
        />
        <textarea
          placeholder="What's on your mind?"
          rows={3}
          value={form.message}
          onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
          className="w-full px-3 py-2 rounded-lg outline-none resize-none transition-all"
          style={{
            fontSize: 12,
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.12)',
            fontFamily: 'inherit',
          }}
          onFocus={e => e.target.style.borderColor = '#3B82F6'}
          onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
        />
        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-lg font-semibold transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-1.5"
          style={{ fontSize: 12, background: '#3B82F6', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.span
                key="sent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1"
              >
                <CheckCircle size={12} /> Opened in Mail
              </motion.span>
            ) : (
              <motion.span key="send" className="flex items-center gap-1">
                <Send size={11} /> Send via Mail
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  )
}

export default function ContactApp() {
  return (
    <div className="flex flex-col bg-white h-full" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <div className="px-5 pt-4 pb-3 flex-shrink-0" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="flex items-center gap-2 mb-0.5">
          <Mail size={15} color="#3B82F6" strokeWidth={2} />
          <h1 className="font-bold text-gray-900" style={{ fontSize: 17 }}>Contact</h1>
        </div>
        <div className="flex items-center gap-1.5 mt-1" style={{ color: '#9CA3AF' }}>
          <MapPin size={10} strokeWidth={2} />
          <span style={{ fontSize: 11 }}>{PROFILE.location} · Open to remote opportunities</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollable px-4 py-4">
        <p
          className="font-semibold text-gray-400 uppercase tracking-widest mb-3"
          style={{ fontSize: 9, letterSpacing: '0.1em' }}
        >
          Reach Out
        </p>
        <div className="space-y-2">
          {CONTACT_LINKS.map((item, i) => (
            <ContactLink key={item.id} item={item} index={i} />
          ))}
        </div>
        <QuickMessageForm />
        <div style={{ height: 16 }} />
      </div>
    </div>
  )
}
