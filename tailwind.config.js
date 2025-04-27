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
      fontSize: {
        '10': '0.625rem',
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '8': '0.5rem',
      },
    },
    screens: {
      'sm': '320px', 
      'md': '768px',  
      // 'lg': '1024px',
      // 'xl': '1280px', 
      // '2xl': '1536px',
    },
  },
  plugins: [],
}
