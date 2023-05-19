/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
      mobile: "640px",
      tablet: "768px",
      desktop: "1024px",
      },
    },
    plugins: [],
  }