/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './public/index.html'
  ],
  theme: {
    extend: {
      height: {
        picHeight: '80vh'
      },
      width: {
        popup: '48rem'
      }
    },
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
    xxl: '1920px'
  },
  plugins: [],
}