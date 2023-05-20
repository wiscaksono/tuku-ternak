/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "headline-32": "2rem",
      },
      colors: {
        primary: "#EB5757",
        gray: {
          4: "#626A7D",
        },
      },
    },
  },
  plugins: [],
};
