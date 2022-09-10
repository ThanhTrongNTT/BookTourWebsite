/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
        Epilogue: ["Epilogue", "sans-serif"],
        PassionOne: ["Passion One", "cursive"],
        Muli: ["Muli", "sans-serif"],
      },
      colors: {
        primary: {
          blue: "#316BFF",
          red: "#FF543D",
          violet: "#878CFF",
        },
        secondary: {
          orange: "#FFAF4E",
          varient: "#A4CDE3",
        },
        dark: {
          primary: "#13131A",
          secondary: "#1C1C24",
          soft: "#22222C",
          stroke: "#3A3A43",
        },
        soft: {
          dark: "#22222C",
        },
        black: "#141416",
        gray: "#8E94A3",
        background: "#FAFBFF",
        icon: "#84878B",
        line: "#E7ECF3",
        grayScale: {
          c1: "#141416",
          c2: "#222529",
          c3: "#3B3E44",
          c4: "#84878B",
          c5: "#B1B5C4",
          c6: "#E7ECF3",
          c7: "#F4F5F6",
          c8: "#FCFCFD",
        },
      },
    },
  },
  plugins: [],
};
