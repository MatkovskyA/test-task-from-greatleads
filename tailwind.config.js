/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      "xl": "1440px",
      "md": "1024px"
    },
    extend: {
      colors: {
        "white": "rgb(255, 255, 255)",
        "gray": "rgb(128, 128, 128)",
        "black": "rgb(0, 0, 0)",
      }
    },
  },
  plugins: [],
}

