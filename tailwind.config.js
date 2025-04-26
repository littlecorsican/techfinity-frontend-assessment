/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arial-black': ['"Arial Black"', 'Arial', 'sans-serif'],
        'arial': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
