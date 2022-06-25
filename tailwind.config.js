module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sfPro: ["SFProDisplay-Light"], //custom fonts.
    },
    fontSize: {
      h1: ["2.9rem", "56px"],
      h2: ["2.6rem", "42px"],
      h3: ["1.9rem", "32px"],
      h4: ["1.6rem", "24px"],
      navlink: ["24px", "24px"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#343434",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      primary: "#1d53ff",
      gradientOne: "#000000",
      gradientTwo: "#8D8D8D",
    },

    variants: {
      extend: {},
    },
  },
};
