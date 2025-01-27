/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const selectorParser = require('postcss-selector-parser')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // 'sm': '480px',
      // 'md': '768px',
      // 'lg': '1024px',
      // 'xl': '1280px',
      'sm': '480px',
      'lg': '768px',
    },
    extend: {
      fontSize: {
        base: '16px', // 默认字体大小为 16px
      },
    },
  }
}
