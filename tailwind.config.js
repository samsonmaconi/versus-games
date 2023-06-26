/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        versus_pink: '#FF005C',
        versus_green: '#00B588',
        versus_grey: '#8C8CA1',
      }
    },
  },
  plugins: [],
}