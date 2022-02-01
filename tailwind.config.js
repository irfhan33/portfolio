const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oren: "#EF6D58",
        pinkk: "#FDF0E9",
        brownn: "#391400",
        lightbrown: "#391400",
        stroke: "#F3D1BF",
      },
    },
    fontFamily: {
      sans: ["Epilogue", "sans-serif"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-primary": {
          "background-color": "#28293E",
        },
        ".blurr": {
          "-webkit-filter": "blur(5px)",
          "-moz-filter": "blur(5px)",
          "-o-filter": "blur(5px)",
          "-ms-filter": "blur(5px)",
          filter: "blur(5px)",
          width: "100px",
          height: "100px",
          "background-color": "#ccc",
        },
      });
    }),
  ],
};
