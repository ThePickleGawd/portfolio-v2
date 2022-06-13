const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"'],
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out 1",
        shake: "shake 0.25s linear 1",
        breathing: "breathing 7s linear infinite",
        fadeIn: "fadeIn 1s ease-in-out 1",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(1,1)" },
          "16%": { transform: "scale(1.3,0.7)" },
          "25%": { transform: "scale(1.3,0.5)" },
          "32%": { transform: "scale(0.8,1.1)" },
          "48%": { transform: "scale(0.95,1)" },
          "64%": { transform: "scale(0.8,1.2)" },
          "80%": { transform: "scale(1.15,1)" },
          "87%": { transform: "scale(1.15,1)" },
          "95%": { transform: "scale(1.05,1)" },
          "100%": { transform: "scale(1,1)" },
        },
        shake: {
          "0%": { transform: "translate(2px, 1px) rotate(0deg); " },
          "10% ": { transform: "translate(-1px, -2px) rotate(-1deg);" },
          "20% ": { transform: "translate(-3px, 0px) rotate(1deg);" },
          "30% ": { transform: "translate(0px, 2px) rotate(0deg);" },
          "40% ": { transform: "translate(1px, -1px) rotate(1deg);" },
          "50% ": { transform: "translate(-1px, 2px) rotate(-1deg);" },
          "60% ": { transform: "translate(-3px, 1px) rotate(0deg);" },
          "70% ": { transform: "translate(2px, 1px) rotate(-1deg);" },
          "80% ": { transform: "translate(-1px, -1px) rotate(1deg);" },
          "90% ": { transform: "translate(2px, 2px) rotate(0deg);" },
          "100%": { transform: " translate(1px, -2px) rotate(-1deg);" },
        },
        breathing: {
          "0%": { transform: "translate(1px, 1px) scale(1,1) " },
          "10% ": { transform: "translate(-1px, -2px) scale(1,1)" },
          "20% ": { transform: "translate(-3px, 0px) scale(1,1)" },
          "30% ": { transform: "translate(0px, 2px) scale(1,1)" },
          "40% ": { transform: "translate(1px, -1px) scale(1,1)" },
          "50% ": { transform: "translate(-1px, 2px) scale(1,1)" },
          "60% ": { transform: "translate(-3px, 1px) scale(1,1)" },
          "70% ": { transform: "translate(2px, 1px) scale(1,1)" },
          "80% ": { transform: "translate(-1px, -1px) scale(1,1)" },
          "90% ": { transform: "translate(0px, 0px) scale(1,1)" },
          "100%": { transform: " translate(0px, 0px) scale(1,1)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
