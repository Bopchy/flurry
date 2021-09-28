const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      gray: colors.trueGray,
      violet: colors.violet,
      white: "#ffffff",
      offWhite: "#fff9f4",
      purple: {
        100: "#C6A9ED",
        500: "#5214A5",
      },
    },
    fontFamily: {},
    extend: {
      borderRadius: {
        5: "0.3125rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    lineHeight: false,
  },
  plugins: [],
};
