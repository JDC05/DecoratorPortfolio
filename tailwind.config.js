/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A1A2E',
        'navy-mid': '#16213E',
        'navy-light': '#0F3460',
        accent: '#E94560',
        'accent-hover': '#c73350',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
