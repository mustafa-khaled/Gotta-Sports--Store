/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2bb9a9",
        secondary: "#202227",
        textColor: "#222222",
        bgWhite: "#fff",
        gray: "#666666",
        yellow: "#ffab02",
        lightGray: "#eee",
      },
    },
  },
  plugins: [],
};
