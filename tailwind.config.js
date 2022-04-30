module.exports = {
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
      },
      keyframes: {
        wiggle: {
          "0%": {
            transform: "scale(1,1)",
          },
          "16%": {
            transform: "scale(1.3,0.7)",
          },
          "25%": {
            transform: "scale(1.3,0.5)",
          },
          "32%": {
            transform: "scale(0.8,1.1)",
          },
          "48%": {
            transform: "scale(0.95,1)",
          },
          "64%": {
            transform: "scale(0.8,1.2)",
          },
          "80%": {
            transform: "scale(1.15,1)",
          },
          "87%": {
            transform: "scale(1.15,1)",
          },
          "95%": {
            transform: "scale(1.05,1)",
          },
          "100%": {
            transform: "scale(1,1)",
          },
        },
      },
    },
  },
  plugins: [],
};
