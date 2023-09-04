/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bec-orange': "#f5a020",
        'bec-darker': "#b17413",
        'bec-grey': "#d9d9d9",
        'bec-bg': "#181619",
        'bec-svg': "#242225",
      }
    },
  },
  plugins: [],
}
