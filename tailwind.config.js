/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-body": "#f5f5f5",
        "hover-gray": "#ccc",
      },
      screens: {
        600: "600px",
      },
      fontFamily: {
        "section-title": ["Segoe UI", "Arial", "sans-serif"],
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
