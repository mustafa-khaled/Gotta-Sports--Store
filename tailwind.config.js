/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff7245",
        primaryDark: "#d26846",
        secondary: "#202227",
        textColor: "#222222",
        bgWhite: "#fff",
        gray: "#dae7e6",
        lightGray: "#f0f0f0",
        darkGray: "#6d7178",
      },
    },
  },
  plugins: [],
};
