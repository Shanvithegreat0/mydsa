/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#fdfbf7', // Soft off-white
        ink: '#2c2c2c',   // Soft black
        'ink-light': '#595959',
        accent: '#e0e0e0', // Gentle highlight
        'accent-hover': '#d0d0d0',
        primary: '#4a4a4a',
      },
      fontFamily: {
        serif: ['"Merriweather"', '"Playfair Display"', 'serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
