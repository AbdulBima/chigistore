/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", ".src/**/*.{vue,js,ts" ],
  theme: {

    extend: {
      colors: {
        "bina-blue": "#012B80",

      },
    },
        fontFamily: {
      Montserrat: "Montserrat. sans-serif",
      Inter: "Inter. sans-serif",

    },
  },
  plugins: [],
}

