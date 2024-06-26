/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./public_web/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}

