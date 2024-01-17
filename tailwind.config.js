/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#2bb9a9",
      secondary: "#202227",
      textColor: "#222222",
      bgWhite: "#fff",
      gray: "#666666",
      lightGray: "#eee",
    },
  },
  plugins: [],
};
