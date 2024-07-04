/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' :  '#080808',
        'secondary' :  '#787777',
        'tertiary' :  '#54D688',
       
      },
      backgroundSize: {
        '40%Y': 'auto 40%'
      },
    },
    screens: {
      'xl': {'max': '2222px'},
      'sm': {'max': '1000px'},
    
    }
  },
  plugins: [],
}