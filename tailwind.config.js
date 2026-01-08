module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#6D5DF6",
          indigo: "#4F46E5",
          dark: "#0B0B0F",
        },
      },
    },
  },
  plugins: [],
};
