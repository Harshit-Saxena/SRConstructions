/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        highlight: "#214e34",
        desc: "#1c0f13",
        boldClr: "#ea481f",
        bgClr: "#e9eaec",
      },
      fontFamily: {
        Kalina: "Kalnia",
      },
    },
  },
  plugins: [],
}
