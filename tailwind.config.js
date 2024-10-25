/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-body": "#f5f5f5",
        "hover-gray": "#ccc",
        "active-gray": "#616161",
        "description-gray": "#757575",
        "footer-gray": "#f1f1f1",
      },
      screens: {
        600: "600px",
      },
      fontFamily: {
        "section-title": ["Segoe UI", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "header-bg-image": "url('/src/assets/Coffeehouse.jpg')",
      },
      grayscale: {
        50: "50%",
        75: "75%",
      },
    },
  },
  plugins: [],
};
