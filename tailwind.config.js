/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        rock : ["Playfair Display", "serif"],
        pirou : ["Pirou", "serif"],
        rock2 : ["Rockwell-Font-1", "serif"]
      }
    },
  },
  plugins: [],
}