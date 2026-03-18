/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F4EFE6',
        'parchment-dark': '#EAE3D7',
        'parchment-border': '#D6CCBA',
        ink: '#1E1B16',
        'ink-mid': '#4A4438',
        slate: '#8B7D6B',
        copper: '#C4622D',
        'copper-hover': '#A84F22',
        'copper-pale': '#FAE8DC',
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
