/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'baby-green':'#28AE60',
      }
    },

    // screens: {
    //   'mobile': '600px',
    //   'desktop':'1438px',
    // },

    // borderRadius: {
    //   'large':'350px'
    // }
  },
  plugins: [],
}

