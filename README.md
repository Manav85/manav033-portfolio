# Manav Patel — Interactive Portfolio

macOS-style interactive desktop portfolio. Built with React + Vite + Tailwind + Framer Motion + GSAP.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Stack

| Library | Version | Role |
|---|---|---|
| React | 18 | UI layer |
| Vite | 5 | Dev server + bundler |
| Tailwind CSS | 3 | Utility styles + design tokens |
| Framer Motion | 11 | Window / card animations |
| GSAP | 3.12 | Proficiency bar + entrance animations |
| react-rnd | 10 | Draggable + resizable windows |
| Zustand | 4 | Global desktop state |
| lucide-react | 0.383 | UI icons |
| react-icons | 5 | Brand icons |

---

## Scripts

```bash
npm run dev      # Start dev server at localhost:5173
npm run build    # Production build → dist/
npm run preview  # Preview production build
npm run lint     # ESLint check
```

---

## Project Structure

```
src/
├── App.jsx                        # Root — wires all layers, seeds store
├── main.jsx                       # React entry point
├── index.css                      # Global styles + Tailwind directives
├── env.d.ts                       # Vite client types
│
├── theme/
│   └── tokens.js                  # Colors, spacing, motion, z-index constants
│
├── store/
│   └── useDesktopStore.js         # Zustand: windows, icons, dock state
│
├── hooks/
│   ├── useGSAP.js                 # GSAP timeline helpers with cleanup
│   └── useWindowManager.js        # Convenience hook for window operations
│
├── assets/
│   ├── images/
│   │   ├── index.js               # Base64: portrait, HealthAI cover, IBEPIS cover
│   │   └── certs.js               # Base64: all 6 certificate images
│   └── icons/                     # SVG icon files (future)
│
├── utils/
│   └── base64.js                  # Base64 / data-URI helpers
│
├── components/
│   ├── wallpaper/
│   │   └── Wallpaper.jsx          # Full-bleed B&W editorial photo
│   ├── desktop/
│   │   ├── Desktop.jsx            # Icon grid layer
│   │   └── DesktopIcon.jsx        # Single icon + label (double-click to open)
│   ├── window-manager/
│   │   ├── WindowManager.jsx      # Renders all open windows via AnimatePresence
│   │   └── Window.jsx             # Draggable macOS window (react-rnd + Framer Motion)
│   ├── dock/
│   │   ├── Dock.jsx               # Frosted-glass bottom dock
│   │   └── DockIcon.jsx           # Icon with spring magnification + bounce
│   └── shared/                    # Future shared components
│
└── apps/
    ├── about/                     # About Me window
    ├── projects/                  # Projects window (floating cards + detail panel)
    ├── skills/                    # Skills window (category tabs + animated bars)
    ├── certificates/              # Certificates viewer with full-page certificate images
    ├── resume/                    # Printable résumé
    ├── education/                 # Education + self-directed learning
    ├── contact/                   # Contact links + quick message form
    ├── github/                    # GitHub profile + repo cards
    └── linkedin/                  # LinkedIn profile mirror
```

Each app module exports a `*_WINDOW_CONFIG` with:
- `appId` — unique identifier (prevents duplicate windows)
- `title` — window title bar text
- `content` — **factory function** `() => <AppComponent />` (fresh tree per open)
- `size` — `{ width, height }` in pixels
- `position` — initial `{ x, y }` coordinates

---

## Desktop Interactions

| Action | Result |
|---|---|
| Double-click desktop icon | Opens app window |
| Click dock icon | Opens or focuses app window |
| Drag window title bar | Moves window |
| Drag window edge/corner | Resizes window |
| Click red traffic light | Closes window |
| Click yellow traffic light | Minimizes window |
| Click project card | Opens project detail panel |

---

## Layer Z-Index

| Layer | z-index |
|---|---|
| Wallpaper | 0 |
| Desktop Icons | 10 |
| Windows | 20+ (dynamic per focus) |
| Dock | 50 |
| Tooltips | 60 |

---

## VS Code

Recommended extensions are listed in `.vscode/extensions.json`. Install them via:

**Extensions panel** → `...` menu → **Show Recommended Extensions**

The `@/` path alias is configured in both `jsconfig.json` and `vite.config.js` for full IntelliSense.
