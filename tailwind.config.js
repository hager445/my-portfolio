/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      colors: {
        main: "#AC1754",
      },
      dropShadow: {
        "2xl": "0 10px 15px #AC1754",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
