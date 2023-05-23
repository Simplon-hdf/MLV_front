/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      },
      colors: {
        "mlvGreen" : "#25995C",
      }
    },
    plugins: [],
  }