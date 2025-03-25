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

