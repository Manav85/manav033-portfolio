/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design spec tokens
        accent: {
          blue: '#3B82F6',
          'blue-dark': '#1D4ED8',
        },
        surface: {
          dark: 'rgba(0,0,0,0.25)',
          card: 'rgba(255,255,255,0.12)',
          social: 'rgba(255,255,255,0.15)',
          window: '#ffffff',
          dock: 'rgba(255,255,255,0.18)',
        },
        text: {
          primary: '#ffffff',
          dark: '#111111',
          meta: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'card-label': ['10px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'ui-sm': ['11px', { lineHeight: '1.3' }],
        'ui': ['13px', { lineHeight: '1.4' }],
        'window-title': ['24px', { lineHeight: '1.2', fontWeight: '700' }],
        'window-body': ['13px', { lineHeight: '1.6' }],
      },
      backdropBlur: {
        dock: '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'dock-bounce': 'dockBounce 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        dockBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-12px)' },
          '70%': { transform: 'translateY(-4px)' },
        },
      },
      boxShadow: {
        window: '0 25px 60px rgba(0,0,0,0.35), 0 10px 20px rgba(0,0,0,0.2)',
        dock: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
        card: '0 4px 12px rgba(0,0,0,0.3)',
        'icon-hover': '0 0 0 2px rgba(59,130,246,0.5)',
      },
      borderRadius: {
        window: '12px',
        dock: '20px',
        card: '8px',
        icon: '10px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
