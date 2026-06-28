/**
 * aboutData.js
 * All static content for the About Me window.
 * Extracted from uploaded assets (certificates, project covers, portrait).
 */

export const PROFILE = {
  name: 'Manav Patel',
  fullName: 'Manavkumar Girishbhai Patel',
  title: 'Full-Stack Developer & AI Engineer',
  tagline: 'Building intelligent systems at the intersection of health, cloud, and human experience.',
  location: 'Gujarat, India',
  email: 'manav@example.com',        // placeholder — update with real address
  github: 'https://github.com/manav85',
  linkedin: 'https://www.linkedin.com/in/manavpatel85?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  twitter: 'https://x.com/manavpatel',
  instagram: 'https://instagram.com/manavpatel',
}

export const BIO_PARAGRAPHS = [
  "I'm a developer and builder obsessed with creating software that solves real problems. My work spans AI-powered health applications, emergency biometric systems, and cloud-native architectures — always with a focus on impact over aesthetics.",
  "Currently deepening my expertise across Android development, cloud infrastructure (AWS, IBM), and AI agent systems. I learn by building: every project is a chance to push further into what technology can do for people.",
]

export const SKILLS = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express', 'Android SDK', 'TensorFlow', 'FastAPI'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'IBM Cloud', 'Docker', 'GitHub Actions', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'AI / ML',
    items: ['Biometric Recognition', 'AI Health Analytics', 'LLM Agents', 'Computer Vision'],
  },
]

export const TIMELINE = [
  {
    id: 'tl-1',
    year: 'Apr 2026',
    title: 'Cloud Computing Fundamentals',
    org: 'IBM SkillsBuild',
    type: 'cert',
  },
  {
    id: 'tl-2',
    year: 'Apr 2026',
    title: 'Building AI Agents with MongoDB',
    org: 'MongoDB',
    type: 'cert',
  },
  {
    id: 'tl-3',
    year: 'May 2026',
    title: 'Introduction to Cloud',
    org: 'IBM / CognitiveClass.ai',
    type: 'cert',
  },
  {
    id: 'tl-4',
    year: 'May 2026',
    title: 'AWS Cloud Practitioner Essentials',
    org: 'Amazon Web Services',
    type: 'cert',
  },
  {
    id: 'tl-5',
    year: 'Jun 2026',
    title: 'Introduction to GitHub',
    org: 'Microsoft',
    type: 'cert',
  },
  {
    id: 'tl-6',
    year: 'Jun 2026',
    title: 'Android Mobile App Development',
    org: 'Meta / Coursera',
    type: 'cert',
  },
]

export const STATS = [
  { label: 'Projects Built', value: '2+' },
  { label: 'Certifications', value: '6' },
  { label: 'Cloud Platforms', value: '2' },
  { label: 'Year', value: '2026' },
]
