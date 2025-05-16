module.exports = {
  content: ['./index.html', 
  './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      Keyframes:{
        bold: {
          '0%': { Transform: 'scale(1)'},
          '33%': { Transform: 'scale(1.2)'},
          '66%': { Transform: 'scale(0.8)'},
          '100%': { Transform: 'scale(1)'},


        },
      },
      Animation: {
        bold: 'bold 10s infinite'
      },
      backgroundImage:{
        'skills-gradient': 'linea-gradient(38.73deg, rgba(204,0,15) 0%, rgba(201,32,184,0) 50%) linear-gradient(141.27deg, rgba(0,70,209, 50%, rgba(0,70,209,0,15) 100%)'
      }
    },
  },
  plugins: [],
};