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
        background: 'var(--bg-app)',
        surface: 'var(--bg-surface)',
        card: 'var(--bg-card)',
        border: {
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
        },
        text: {
          main: 'var(--text-main)',
          sub: 'var(--text-sub)',
          muted: 'var(--text-muted)',
        },
        blue: {
          DEFAULT: '#0284c7',
          deep: '#0369a1',
          vivid: '#2563eb',
          royal: '#1d4ed8',
        },
        lightblue: {
          DEFAULT: '#38bdf8',
          soft: '#7dd3fc',
          pale: '#e0f2fe',
        },
        babyblue: {
          DEFAULT: '#7dd3fc',
          light: '#bae6fd',
        },
        sky: {
          DEFAULT: '#0ea5e9',
        },
        aqua: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
          pale: '#cffafe',
        },
        green: {
          DEFAULT: '#10b981',
          mint: '#34d399',
          pale: '#d1fae5',
        },
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
