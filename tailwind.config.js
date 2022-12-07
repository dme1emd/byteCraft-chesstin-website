/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
   
    extend: {
          screens: {
            'xs' : '300px',
          },
          colors : {
           'iblack' : '#000000' ,
           'iwhite' : '#F5F5F5',
           'irouge' : '#FD3434',
           'ibrown' : '#887367',
           'igrey'  : '#BBBBBB'
          }


    },
  },
  plugins: [],
}
