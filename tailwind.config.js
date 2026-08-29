/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'], 
      },
      colors: {
        clrlc: {
          warmBlue: '#2A4365', 
          warmAccent: '#DD6B20',
          sand: '#F7FAFC'
        }
      }
    },
  },
  plugins: [],
}