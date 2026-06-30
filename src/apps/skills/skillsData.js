/**
 * skillsData.js
 * Comprehensive skills data for the Skills window.
 * Each skill has a name, proficiency (0–100), level label,
 * icon key (mapped to react-icons in SkillsApp), and optional note.
 *
 * Derived from: uploaded certificates, project tech stacks,
 * and Manav's documented work (HealthAI Pro, IBEPIS).
 */

export const SKILL_LEVELS = {
  LEARNING:     { label: 'Learning',     color: '#F59E0B', bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.25)' },
  FAMILIAR:     { label: 'Familiar',     color: '#3B82F6', bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.25)' },
  PROFICIENT:   { label: 'Proficient',   color: '#8B5CF6', bg: 'rgba(139,92,246,0.1)',  border: 'rgba(139,92,246,0.25)' },
  ADVANCED:     { label: 'Advanced',     color: '#10B981', bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.25)' },
}

export const CATEGORIES = [
  { id: 'all',      label: 'All Skills',     icon: 'grid' },
  { id: 'languages',label: 'Languages',      icon: 'code' },
  { id: 'frontend', label: 'Frontend',       icon: 'monitor' },
  { id: 'backend',  label: 'Backend',        icon: 'server' },
  { id: 'cloud',    label: 'Cloud & DevOps', icon: 'cloud' },
  { id: 'ai',       label: 'AI / ML',        icon: 'cpu' },
  { id: 'mobile',   label: 'Mobile',         icon: 'smartphone' },
  { id: 'data',     label: 'Databases',      icon: 'database' },
]

export const SKILLS = [
  // ── Languages ──────────────────────────────────────────────
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    proficiency: 82,
    level: 'ADVANCED',
    iconKey: 'python',
    note: 'Primary language for AI/ML and backend scripts',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'languages',
    proficiency: 78,
    level: 'PROFICIENT',
    iconKey: 'javascript',
    note: 'ES2022+, async/await, DOM manipulation',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'languages',
    proficiency: 65,
    level: 'FAMILIAR',
    iconKey: 'typescript',
    note: 'Typed React & Node projects',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'languages',
    proficiency: 70,
    level: 'PROFICIENT',
    iconKey: 'java',
    note: 'Android development and OOP fundamentals',
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'languages',
    proficiency: 58,
    level: 'FAMILIAR',
    iconKey: 'kotlin',
    note: 'Modern Android development',
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'languages',
    proficiency: 72,
    level: 'PROFICIENT',
    iconKey: 'sql',
    note: 'Queries, joins, schema design',
  },

  // ── Frontend ────────────────────────────────────────────────
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    proficiency: 80,
    level: 'ADVANCED',
    iconKey: 'react',
    note: 'Hooks, context, Framer Motion, Zustand',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    proficiency: 78,
    level: 'PROFICIENT',
    iconKey: 'tailwind',
    note: 'Utility-first styling, custom design tokens',
  },
  {
    id: 'html',
    name: 'HTML5 / CSS3',
    category: 'frontend',
    proficiency: 85,
    level: 'ADVANCED',
    iconKey: 'html',
    note: 'Semantic markup, responsive layout, animations',
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    proficiency: 70,
    level: 'PROFICIENT',
    iconKey: 'vite',
    note: 'Build tooling and asset pipeline',
  },

  // ── Backend ─────────────────────────────────────────────────
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    proficiency: 72,
    level: 'PROFICIENT',
    iconKey: 'nodejs',
    note: 'REST APIs, Express, async I/O',
  },
  {
    id: 'express',
    name: 'Express',
    category: 'backend',
    proficiency: 70,
    level: 'PROFICIENT',
    iconKey: 'express',
    note: 'Middleware, routing, auth patterns',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    proficiency: 68,
    level: 'FAMILIAR',
    iconKey: 'fastapi',
    note: 'Python async REST APIs with Pydantic',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'backend',
    proficiency: 80,
    level: 'ADVANCED',
    iconKey: 'github',
    note: 'Certified: Microsoft Introduction to GitHub (Jun 2026)',
  },

  // ── Cloud & DevOps ──────────────────────────────────────────
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    proficiency: 72,
    level: 'PROFICIENT',
    iconKey: 'aws',
    note: 'Cloud Practitioner Essentials certified (May 2026)',
  },
  {
    id: 'ibm-cloud',
    name: 'IBM Cloud',
    category: 'cloud',
    proficiency: 68,
    level: 'FAMILIAR',
    iconKey: 'ibm',
    note: 'Cloud Computing Fundamentals certified (Apr 2026)',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'cloud',
    proficiency: 55,
    level: 'LEARNING',
    iconKey: 'docker',
    note: 'Containerisation and image builds',
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    category: 'cloud',
    proficiency: 60,
    level: 'FAMILIAR',
    iconKey: 'githubactions',
    note: 'CI/CD pipelines and automated workflows',
  },

  // ── AI / ML ─────────────────────────────────────────────────
  {
    id: 'biometric',
    name: 'Biometric Recognition',
    category: 'ai',
    proficiency: 75,
    level: 'PROFICIENT',
    iconKey: 'ai',
    note: 'Face recognition for emergency patient ID (IBEPIS project)',
  },
  {
    id: 'health-ai',
    name: 'AI Health Analytics',
    category: 'ai',
    proficiency: 73,
    level: 'PROFICIENT',
    iconKey: 'ai',
    note: 'Predictive vitals monitoring (HealthAI Pro)',
  },
  {
    id: 'llm-agents',
    name: 'LLM Agents',
    category: 'ai',
    proficiency: 65,
    level: 'FAMILIAR',
    iconKey: 'ai',
    note: 'Building AI agents with MongoDB (certified Apr 2026)',
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'ai',
    proficiency: 58,
    level: 'LEARNING',
    iconKey: 'tensorflow',
    note: 'Model training for health prediction tasks',
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    category: 'ai',
    proficiency: 62,
    level: 'FAMILIAR',
    iconKey: 'ai',
    note: 'OpenCV, image preprocessing for biometrics',
  },

  // ── Mobile ──────────────────────────────────────────────────
  {
    id: 'android',
    name: 'Android SDK',
    category: 'mobile',
    proficiency: 72,
    level: 'PROFICIENT',
    iconKey: 'android',
    note: 'Certified: Meta Android Development (Jun 2026)',
  },
  {
    id: 'kotlin-android',
    name: 'Kotlin (Android)',
    category: 'mobile',
    proficiency: 60,
    level: 'FAMILIAR',
    iconKey: 'kotlin',
    note: 'Jetpack Compose, ViewModels, Coroutines',
  },

  // ── Databases ───────────────────────────────────────────────
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'data',
    proficiency: 74,
    level: 'PROFICIENT',
    iconKey: 'mongodb',
    note: 'AI Agents with MongoDB certified (Apr 2026)',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'data',
    proficiency: 65,
    level: 'FAMILIAR',
    iconKey: 'postgres',
    note: 'Relational schema design and queries',
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    category: 'data',
    proficiency: 68,
    level: 'FAMILIAR',
    iconKey: 'sql',
    note: 'Embedded DB for Android and local apps',
  },
]

/** Summary counts for the header */
export const SKILL_SUMMARY = {
  total: SKILLS.length,
  advanced: SKILLS.filter(s => s.level === 'ADVANCED').length,
  proficient: SKILLS.filter(s => s.level === 'PROFICIENT').length,
  familiar: SKILLS.filter(s => s.level === 'FAMILIAR').length,
  learning: SKILLS.filter(s => s.level === 'LEARNING').length,
}
