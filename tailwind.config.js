/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  dark: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffaf42",
      }
    },
  },
  plugins: [],
}

