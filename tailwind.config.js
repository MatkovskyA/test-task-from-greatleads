/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      "2xl": "1536px",
      "xl": "1440px",
      "md": "1024px"
    },
    extend: {
    },
  },
  plugins: [],
}

