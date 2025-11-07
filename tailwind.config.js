 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html",
    "./node_modules/flowbite/**/*.js",
    "./member.html",
    "./event.html"
   ],
   theme: {
    fontFamily: {
      'inter': ['Inter', 'ui-sans-serif'],
      'Nunito': ['Nunito Sans', 'ui-sans-serif'],
      'Mons': ['Montserrat', 'ui-sans-serif']
    },
     container : {
       center: true,
       padding: '16px',
     },
     extend: {
    },
  },
   plugins: [
    require('flowbite/plugin')
   ],
 }