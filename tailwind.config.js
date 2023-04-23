/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'education': "url('./images/main.png')",
      },
      screens: {
        'xxs': '320px',
        'xs': '480px',
        'nine': '920px', 
      }
    },
  },
  plugins: [],
}
