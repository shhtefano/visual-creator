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
        studio: {
          950: '#090a0f',
          900: '#0e1117',
          850: '#131722',
          800: '#181d2a',
          750: '#202637',
          700: '#283046',
          600: '#38435f',
          500: '#4e5d84',
          accent: '#00f0ff',
          neonPink: '#ff007f',
          neonPurple: '#a855f7',
          neonAmber: '#f59e0b',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

