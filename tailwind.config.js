/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "headline-32": "2rem",
      },
      colors: {
        primary: "#FF4A4A",

        gray: {
          2: "#2E3851",
          3: "#485167",
          4: "#626A7D",
          5: "#7C8392",
        },

        input: "#F8F8F8",
        border: "#DEDEDE",
      },
    },
  },
  plugins: [],
};
