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
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        faddeOut: {
          "100%": { opacity: "0" },
        },
      },
      animation: {
        toast: "slideIn 0.5s ease-in, faddeOut 0.3s ease-out 5s",
      },
    },
  },
  plugins: [],
};
