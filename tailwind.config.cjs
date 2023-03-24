/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
      backgroundImage: {
        scissorsGradient:
          "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        paperGradient:
          "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        rockGradient:
          "linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))",
        bgRadialGradient:
          "radial-gradient(hsl(214, 47%, 23%) , hsl(237, 49%, 15%))",
      },
    },
  },
  plugins: [],
};
