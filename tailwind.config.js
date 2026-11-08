/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFE500',
          yellowHover: '#E5CE00',
          yellowMuted: 'rgba(255, 229, 0, 0.15)',
          yellowGlow: 'rgba(255, 229, 0, 0.35)',
          gold: '#F59E0B',
          dark: '#080809',
          surface: '#111113',
          card: '#16161a',
          cardHover: '#1f1f24',
          border: '#27272a',
          borderLight: '#3f3f46',
          muted: '#9ca3af',
          textMuted: '#71717a'
        }
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 229, 0, 0.12), transparent 70%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(8, 8, 9, 0.3) 0%, rgba(8, 8, 9, 0.85) 70%, #080809 100%)',
      }
    },
  },
  plugins: [],
}

