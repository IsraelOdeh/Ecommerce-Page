/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "cOrange": "hsl(26, 100%, 55%)",
        "cPaleorange": "hsl(25, 100%, 94%)",
        "cVerydarkblue": "hsl(220, 13%, 13%)",
        "cDarkgrayishblue": "hsl(219, 9%, 45%)",
        "cGrayishblue": "hsl(220, 14%, 75%)",
        "cLightgrayishblue": "hsl(223, 64%, 98%)",
        "cWhite": "hsl(0, 0%, 100%)",
        "cBlack": "hsl(0, 0%, 0%)",
        'Overlay' : 'rgba(0,0,0,0.5)'
      },
      spacing:{
        "75" : "305px",
        "n4" : "-4px",
        "n6" : "-6px"
      },
      fontFamily:{
        'kumbh' : ["kumbh","sans-serif"]
      }
    },
  },
  plugins: [],
}

