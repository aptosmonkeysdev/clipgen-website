/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#E99700",
        grey: "#C2C2C2",
      },
    },
  },
  plugins: [],
};
