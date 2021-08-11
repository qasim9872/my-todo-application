const { fontFamily, spacing } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", ...fontFamily.sans],
        poppins: ["Poppins", ...fontFamily.sans],
      },
      colors: {
        brand: {
          primary: {
            DEFAULT: "#C145FF",
            50: "#FFFFFF",
            100: "#FFFFFF",
            200: "#F4DEFF",
            300: "#E3ABFF",
            400: "#D278FF",
            500: "#C145FF",
            600: "#B012FF",
            700: "#9400DE",
            800: "#7200AB",
            900: "#500078",
          },
          secondary: {
            DEFAULT: "#3E44EC",
            50: "#FFFFFF",
            100: "#F8F8FE",
            200: "#C9CBFA",
            300: "#9B9EF5",
            400: "#6C71F1",
            500: "#3E44EC",
            600: "#161DE1",
            700: "#1217B2",
            800: "#0D1184",
            900: "#080B56",
          },
        },
        typography: {
          black: "#151515",
          white: "#ffffff",
          grey: "#707070",
          error: "red",
        },
        ui: {
          black: "#171717",
          white: "#ffffff",
          primary: {},
          secondary: {},
        },
      },
      minHeight: {
        ...spacing,
      },
      backgroundImage: (theme) => ({
        ...theme,
      }),
      keyframes: {
        "move-down": {
          "0%": { transform: "translateY(-5rem)" },
          "100%": { transform: "translateY(0rem)" },
        },
      },
      animation: {
        "move-down-anim": "move-down 0.5s ease-in-out",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
