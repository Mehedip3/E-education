/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "#ff8901",
        secondary: "#fb923c",
      },
      container : {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl" : "6rem",
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

