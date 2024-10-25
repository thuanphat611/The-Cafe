/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hover-gray": "#ccc",
      },
      screens: {
        600: "600px",
      },
      backgroundImage: {
        "header-bg-image": "url('/src/assets/coffeehouse.jpg')",
      },
      grayscale: {
        50: "50%",
      },
    },
  },
  plugins: [],
};
