/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth:{
        '1380px':'1380px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
      },
    },
  },
  plugins: [],
}

