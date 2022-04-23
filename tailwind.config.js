
const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    mode: "layers",
    enabled: process.env.NODE_ENV === "production",
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      emerald: colors.emerald,
      gray: colors.trueGray,
      width: {
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',

    }
  },
  colors: {
    colorCustom: '#2b2350'
  },
  variants: {
    extend: {},
  },
  plugins: [/* require("@tailwindcss/forms") */],
}
