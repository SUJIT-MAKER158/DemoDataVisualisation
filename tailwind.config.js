/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    screens: {
      'xs':'340px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      height: {
        '97': '97%',
        '71':'70vh'
      },
      width:
      {
        '97':'97%',
        '61':'60%',
        '51':'50%',
        '11':'10%',
        '180':'180%',
        
      },
      fontFamily: { 
        "inter": ['Inter', 'sans-serif'] 
     } ,
      colors: {
        gradiant1:'#ffe1bc',
        gradiant2:'#f3c6f1',
        orange: '#fca61f',
        black: '#242d49',
        pink: '#FF919D',
        glass: 'rgba(255, 255, 255, 0.54)',
        boxShadow: '0px 19px 60px rgb(0 0 0 / 8%)',
        smboxShadow: '-79px 51px 60px rgba(0, 0, 0, 0.08)',
        activeItem: '#f799a354',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          '&::-webkit-scrollbar': {
            display: 'none' /* Safari and Chrome */
          }
        }
      })
    }
  ],
};

