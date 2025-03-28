/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssForms from "@tailwindcss/forms";

export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontSize: {
    //   base: '1.03rem', // Default is usually 1rem
    //   // Other font sizes can be adjusted proportionally
    // },
    container: {
       center: true,
      // padding: "0rem",
      // screens: {
      //   "2xl": "1400px",
      // },
    },
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        theme: {
          light: "#FFFFFF",
          medium: "#756d54",
          dark: "#580d0f",
          dark_compliment: "#0D5856",
      },
      
      border: "#756d54",
      bg: {
        main: "#FFFFFF",
      },
      },
      translate:{
        '1/7': '15%',
      }
  	}
  },
  plugins: [
    tailwindcssAnimate,
    tailwindcssForms({
      strategy: 'class'
    })
  ]
}

