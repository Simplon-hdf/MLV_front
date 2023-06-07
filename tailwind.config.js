/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      },
      colors: {
        "mlvGreen" : "#25995C",
        "mlvBlue" : "#1D1D77",
        "mlvGray": "#D9D9D9",
        "white": "#FFFFFF",
        "black": "#000000",
      }
    },
    plugins: [],
  }