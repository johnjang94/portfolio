/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "slide-in": "slide-in 1.5s ease-in",
        "font-changes": "font-changes 1.5s ease-in",
      },
      animationDelay: {
        500: "500ms",
        600: "600ms",
        700: "700ms",
        1000: "1000ms",
        2500: "2500ms",
      },
      keyframes: {
        "slide-in": {
          from: { opacity: 0, transform: "translateX(300px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "font-changes": {
          from: {
            fontSize: "150px",
            padding: "0",
            margin: "-200px 0 0 -300px",
          },
          to: { fontSize: "55px" },
        },
      },
    },
  },
  plugins: [],
  components: {
    ".main-heading": {
      fontSize: "60px",
      lineHeight: "1",
      color: "var(--color-text)",
    },

    "project-heading": {
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      color: "var(--color-text)",
    },

    ".sub-heading": {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      color: "var(--color-text)",
    },

    ".body-text": {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      color: "var(--color-text)",
    },
  },
};
