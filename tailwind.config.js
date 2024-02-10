/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
  ],
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      'display':['Kanit', 'sans-serif'],
      'body' :['"Kanit"', '"sans-serif"']
    }
  },
  plugins: [],
}

