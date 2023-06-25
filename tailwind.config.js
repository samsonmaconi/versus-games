/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        versus_pink: '#FF005C',
        versus_green: '#00B588',
      }
    },
  },
  plugins: [],
}