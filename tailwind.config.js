module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f5f5f7",
          200: "#ececec",
          400: "#b4b4b4",
          700: "#686868",
          "400_01": "#c0c0c0",
          "700_02": "#5f5f5f",
          "700_01": "#5b5b5b",
        },
        blue_gray: { 100: "#d5d5d5" },
        lime: { 800: "#b98732", 900: "#936a2e" },
        red: {
          900: "#750200",
          "900_01": "#782d15",
          A700_01: "#de0600",
          A700: "#e20813",
        },
        white: { A700_70: "#ffffff70", A700_38: "#ffffff38", A700: "#ffffff" },
        black: { 900: "#020204", "900_01": "#000000", "900_19": "#00000019" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 9px  15px 0px #00000019" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
