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
        'cf-dark': '#0B0F19',
        'cf-surface': '#111622',
        'cf-border': 'rgba(255, 255, 255, 0.1)',
        'cf-orange': '#F38020',
        'cf-orange-light': '#FA8C16',
        'cf-navy': '#1D2A44',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
