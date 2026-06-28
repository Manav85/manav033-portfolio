/**
 * projectsData.js
 * All project content extracted from uploaded assets:
 *   - HealthAI Pro cover  (cover_zip/1.jpeg)
 *   - IBEPIS cover        (ibepis_zip/1.jpeg)
 * Image keys resolve to base64 strings in assets/images/index.js
 */

export const PROJECTS = [
  {
    id: 'healthai',
    name: 'HealthAI Pro',
    tagline: 'AI Powered Health Monitoring System',
    shortDesc: 'Smartly monitor your health, get AI predictions, and live a better life.',
    description:
      'HealthAI Pro is an intelligent health monitoring platform that combines real-time biometric tracking with predictive AI analytics. The system continuously monitors vital signs, surfaces anomaly alerts, generates personalised health reports, and keeps all data end-to-end encrypted on-device. Built with a focus on accessibility and privacy — because your health data belongs to you.',
    year: '2026',
    type: 'Mobile App / AI',
    client: 'Personal Project',
    status: 'In Development',
    statusColor: '#F59E0B',
    accentColor: '#3B82F6',
    gradientFrom: '#1e3a8a',
    gradientTo: '#3B82F6',
    imageKey: 'HEALTHAI_COVER',
    features: [
      { icon: 'heart',    label: 'Real-time Monitoring',  desc: 'Continuous vitals tracking with live alerts' },
      { icon: 'brain',    label: 'AI Predictions',        desc: 'ML-powered health trend forecasting' },
      { icon: 'file',     label: 'Health Reports',        desc: 'Auto-generated personalised health summaries' },
      { icon: 'shield',   label: 'Secure & Private',      desc: 'End-to-end encrypted, on-device processing' },
    ],
    stack: ['Python', 'TensorFlow', 'React Native', 'FastAPI', 'PostgreSQL', 'Docker'],
    // Absolute position of the floating card on the hero canvas (%)
    cardPos: { x: '14%', y: '22%' },
    thumbColor: '#3B82F6',
  },
  {
    id: 'ibepis',
    name: 'IBEPIS',
    tagline: 'Intelligent Biometric Emergency Patient Identification System',
    shortDesc: 'Identifying Patients. Saving Lives.',
    description:
      'IBEPIS addresses a critical gap in emergency medicine: unconscious or unresponsive patients who cannot self-identify. The system uses face-recognition biometrics paired with AI-powered identity matching to retrieve verified medical records in seconds — enabling paramedics and ER teams to make faster, safer decisions when every moment counts.',
    year: '2026',
    type: 'AI / Healthcare Research',
    client: 'Academic Research',
    status: 'Research Phase',
    statusColor: '#8B5CF6',
    accentColor: '#1D4ED8',
    gradientFrom: '#1e1b4b',
    gradientTo: '#4338ca',
    imageKey: 'IBEPIS_COVER',
    features: [
      { icon: 'fingerprint', label: 'Biometric Recognition',       desc: 'Face scan with liveness detection' },
      { icon: 'cpu',         label: 'AI Identification',           desc: 'Sub-second patient ID matching' },
      { icon: 'folder',      label: 'Instant Medical Data Access', desc: 'Verified records retrieved in real time' },
      { icon: 'siren',       label: 'Emergency Response',          desc: 'Integrated with ER triage workflows' },
    ],
    stack: ['Python', 'OpenCV', 'TensorFlow', 'MongoDB', 'FastAPI', 'IBM Cloud'],
    cardPos: { x: '58%', y: '55%' },
    thumbColor: '#4338ca',
  },
]

/** Lookup a project by id */
export const getProject = (id) => PROJECTS.find(p => p.id === id) ?? null
