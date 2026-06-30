import React, { useEffect } from 'react'
import { useDesktopStore } from '@/store/useDesktopStore'
import Wallpaper from '@/components/wallpaper/Wallpaper'
import Desktop from '@/components/desktop/Desktop'
import WindowManager from '@/components/window-manager/WindowManager'
import Dock from '@/components/dock/Dock'
<<<<<<< HEAD
import MenuBar from '@/components/menubar/MenuBar'
import { HERO_PORTRAIT } from '@/assets/images/index.js'

// App modules
import { ABOUT_WINDOW_CONFIG }        from '@/apps/about/index.js'
import { PROJECTS_WINDOW_CONFIG }     from '@/apps/projects/index.js'
import { SKILLS_WINDOW_CONFIG }       from '@/apps/skills/index.js'
import { CERTIFICATES_WINDOW_CONFIG } from '@/apps/certificates/index.js'
import { RESUME_WINDOW_CONFIG }       from '@/apps/resume/index.js'
import { EDUCATION_WINDOW_CONFIG }    from '@/apps/education/index.js'
import { CONTACT_WINDOW_CONFIG }      from '@/apps/contact/index.js'
import { GITHUB_WINDOW_CONFIG }       from '@/apps/github/index.js'
import { LINKEDIN_WINDOW_CONFIG }     from '@/apps/linkedin/index.js'
=======
import { HERO_PORTRAIT } from '@/assets/images/index.js'

// App modules
import { ABOUT_WINDOW_CONFIG }        from '@/apps/about/index.jsx'
import { PROJECTS_WINDOW_CONFIG }     from '@/apps/projects/index.jsx'
import { SKILLS_WINDOW_CONFIG }       from '@/apps/skills/index.jsx'
import { CERTIFICATES_WINDOW_CONFIG } from '@/apps/certificates/index.jsx'
import { RESUME_WINDOW_CONFIG }       from '@/apps/resume/index.jsx'
import { EDUCATION_WINDOW_CONFIG }    from '@/apps/education/index.jsx'
import { CONTACT_WINDOW_CONFIG }      from '@/apps/contact/index.jsx'
import { GITHUB_WINDOW_CONFIG }       from '@/apps/github/index.jsx'
import { LINKEDIN_WINDOW_CONFIG }     from '@/apps/linkedin/index.jsx'
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484

import {
  User, FolderOpen, Award, Mail,
  Github, Linkedin, Twitter, Instagram,
  FileText, GraduationCap, BookOpen,
} from 'lucide-react'

<<<<<<< HEAD
// Right-side desktop icons (no position needed — Desktop handles layout)
=======
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
const INITIAL_DESKTOP_ICONS = [
  {
    id: 'icon-about',
    label: 'About Me',
    appId: 'about',
    icon: User,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3B82F6 100%)',
<<<<<<< HEAD
=======
    position: { x: 32, y: 32 },
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
    windowConfig: ABOUT_WINDOW_CONFIG,
  },
  {
    id: 'icon-projects',
    label: 'Projects',
    appId: 'projects',
    icon: FolderOpen,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #92400e 0%, #F59E0B 100%)',
<<<<<<< HEAD
=======
    position: { x: 32, y: 118 },
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
    windowConfig: PROJECTS_WINDOW_CONFIG,
  },
  {
    id: 'icon-skills',
    label: 'Skills',
    appId: 'certificates',
    icon: Award,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #065f46 0%, #10B981 100%)',
<<<<<<< HEAD
=======
    position: { x: 32, y: 204 },
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
    windowConfig: SKILLS_WINDOW_CONFIG,
  },
  {
    id: 'icon-certs',
    label: 'Certificates',
    appId: 'certificates-viewer',
    icon: BookOpen,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #6d28d9 0%, #8B5CF6 100%)',
<<<<<<< HEAD
=======
    position: { x: 32, y: 290 },
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
    windowConfig: CERTIFICATES_WINDOW_CONFIG,
  },
  {
    id: 'icon-resume',
    label: 'Resume',
    appId: 'resume',
    icon: FileText,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
<<<<<<< HEAD
=======
    position: { x: 32, y: 376 },
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
    windowConfig: RESUME_WINDOW_CONFIG,
  },
  {
    id: 'icon-education',
    label: 'Education',
    appId: 'education',
    icon: GraduationCap,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #7C3AED 100%)',
<<<<<<< HEAD
=======
    position: { x: 32, y: 462 },
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
    windowConfig: EDUCATION_WINDOW_CONFIG,
  },
]

const INITIAL_DOCK_ITEMS = [
<<<<<<< HEAD
=======
  // Core apps
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
  {
    id: 'dock-about',
    label: 'About Me',
    appId: 'about',
    icon: User,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3B82F6 100%)',
    windowConfig: ABOUT_WINDOW_CONFIG,
  },
  {
    id: 'dock-projects',
    label: 'Projects',
    appId: 'projects',
    icon: FolderOpen,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #92400e 0%, #F59E0B 100%)',
    windowConfig: PROJECTS_WINDOW_CONFIG,
  },
  {
    id: 'dock-skills',
    label: 'Skills',
    appId: 'certificates',
    icon: Award,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #065f46 0%, #10B981 100%)',
    windowConfig: SKILLS_WINDOW_CONFIG,
  },
  {
    id: 'dock-certs',
    label: 'Certificates',
    appId: 'certificates-viewer',
    icon: BookOpen,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #6d28d9 0%, #8B5CF6 100%)',
    windowConfig: CERTIFICATES_WINDOW_CONFIG,
  },
  {
    id: 'dock-resume',
    label: 'Resume',
    appId: 'resume',
    icon: FileText,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
    windowConfig: RESUME_WINDOW_CONFIG,
  },
  {
    id: 'dock-education',
    label: 'Education',
    appId: 'education',
    icon: GraduationCap,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #7C3AED 100%)',
    windowConfig: EDUCATION_WINDOW_CONFIG,
  },
  {
    id: 'dock-contact',
    label: 'Contact',
    appId: 'contact',
    icon: Mail,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #1e40af 0%, #3B82F6 100%)',
    windowConfig: CONTACT_WINDOW_CONFIG,
  },
<<<<<<< HEAD
  { id: 'sep-1', isSeparator: true },
=======
  // Separator
  { id: 'sep-1', isSeparator: true },
  // Social / external
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
  {
    id: 'dock-github',
    label: 'GitHub',
    appId: 'github',
    icon: Github,
    iconColor: '#ffffff',
    background: 'rgba(17,17,17,0.9)',
    windowConfig: GITHUB_WINDOW_CONFIG,
  },
  {
    id: 'dock-linkedin',
    label: 'LinkedIn',
    appId: 'linkedin',
    icon: Linkedin,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #0a66c2 0%, #0e86d4 100%)',
    windowConfig: LINKEDIN_WINDOW_CONFIG,
  },
  {
    id: 'dock-twitter',
    label: 'X / Twitter',
    appId: null,
    icon: Twitter,
    iconColor: '#ffffff',
    background: 'rgba(0,0,0,0.80)',
    windowConfig: null,
  },
  {
    id: 'dock-instagram',
    label: 'Instagram',
    appId: null,
    icon: Instagram,
    iconColor: '#ffffff',
    background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    windowConfig: null,
  },
]

export default function App() {
  const { setDesktopIcons, setDockItems } = useDesktopStore()

  useEffect(() => {
    setDesktopIcons(INITIAL_DESKTOP_ICONS)
    setDockItems(INITIAL_DOCK_ITEMS)
  }, [setDesktopIcons, setDockItems])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
<<<<<<< HEAD
      {/* Layer 0: Wallpaper */}
      <Wallpaper src={HERO_PORTRAIT} />

      {/* Layer 1: Desktop icons (right column) */}
      <Desktop />

      {/* Layer 2: Windows */}
      <WindowManager />

      {/* Layer 3: Dock */}
      <Dock />

      {/* Layer 4: Menu bar (topmost) */}
      <MenuBar />
=======
      <Wallpaper src={HERO_PORTRAIT} />
      <Desktop />
      <WindowManager />
      <Dock />
>>>>>>> 80b0900380644af6b78222a3ca14abfafa638484
    </div>
  )
}
