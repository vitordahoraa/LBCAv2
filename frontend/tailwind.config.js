/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens : {
      sm : '480px',
      md : '768px',
      lg : '976px',
      xl : '1440px',
      '2xl' : '1736px'
    },
    extend: {
      colors:{
        neutral400 : '#888888',
        neutral800 : '#454545',
        primary400 : '#ff648e',
        primary500 : '#ff2e6b',
        primary600 : '#f40b59'
      },
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
        }
    },
    fontFamily : {
      'inter' : ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}