/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        highlight: "#71B706",
        desc: "#1c0f13",
        boldClr: "#ea481f",
        bgClr: "#ffffff",
        dark: "#214e34",
      },
      fontFamily: {
        Kalina: "Kalnia",
      },
    },
  },
  plugins: [],
}
