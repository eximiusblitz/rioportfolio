/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#4338CA',
        secondary: '#64748B',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1300px'
      }
    },
  },
  plugins: [],
}
