/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bloom-black'  : '#1D1D1D',
        'bloom-orange' : '#FF8100',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
