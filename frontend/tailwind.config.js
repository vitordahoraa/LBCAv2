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
        lightGreyBg : "##F9FAFB",
        neutral100 : '#e7e7e7',
        neutral300 : '#b0b0b0',
        neutral400 : '#888888',
        neutral500 : '#5d5d5d',
        neutral600 : '#4f4f4f',
        neutral800 : '#454545',
        neutral900 : '#3d3d3d',
        primary400 : '#ff648e',
        primary500 : '#ff2e6b',
        primary600 : '#f40b59',
        primary700 : '#ce024c'
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