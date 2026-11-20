/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#090A0C',
          surface: '#111317',
          elevated: '#171A20',
          card: '#13151A',
          hover: '#1D2129'
        },
        brand: {
          gold: '#C5A880',
          'gold-light': '#DFC4A2',
          'gold-dark': '#9A7D57',
          champagne: '#E8D7C3',
          metallic: '#8E7D6A',
        },
        border: {
          subtle: '#1F242D',
          DEFAULT: '#272E3A',
          strong: '#3B4455',
          gold: 'rgba(197, 168, 128, 0.3)'
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
          accent: '#C5A880'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cinzel"', '"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(197, 168, 128, 0.25)',
        'glow-subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
