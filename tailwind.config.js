// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    // for /app directory (App Router)
    './pages/**/*.{js,ts,jsx,tsx}',  // for /pages directory (Pages Router)
    './components/**/*.{js,ts,jsx,tsx}', // common components
  ],
  theme: {
    extend: {
      colors: {
lightHover: '#fcf4ff',
darkHover: '#2a004a',
darkTheme: '#11001F',  
 },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
