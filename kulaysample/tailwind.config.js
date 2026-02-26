/** @type {import('tailwindcss').Config} */
const { platformSelect, platformColor } = require("nativewind/theme");

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#FAFDFE",
        black: "#0A0B0F",
        green: "#3EB075",
        dirtyWhite: "#F7F9FD",
      },
    },
  },
  plugins: [],
}