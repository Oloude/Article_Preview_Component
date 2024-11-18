/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Manrope": ['"Manrope"', ...defaultTheme.fontFamily.serif],
      },
      colors : {
        "darkBlue" : "#48556a",
        "desaturatedBlue" : "#6d7f97",
        "grayBlue" : "#9eafc2",
        "lightBlue" : "#ecf2f8",
      }
    },
  },
  plugins: [],
}