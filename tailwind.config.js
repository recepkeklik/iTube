/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    plugins: [
      function({addUtilities}){
        const newUtilities = {
          ".scrollbar-thin": {
            scrollbarWidth : "thin",
            scrollbarColor : "rgb(31,29,29) white"
          }
        }
      }
    ],
    extend: {
      backgroundImage: {
        'dune': "url('../public/images/dune.jpg')",
        'GoT': "url('../public/images/GOT.jpg')",
        'mainBG': "url('../public/images/main-bg2.jpeg')",
      }
    },
  },
  plugins: [],
}

