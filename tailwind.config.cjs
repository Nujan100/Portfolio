/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",       // deep black
        secondary: "#777777",
        tertiary: "#111111",
        "black-100": "#050505",
        "black-200": "#000000",

        white100: "#f3f3f3",
        accent: "#1A1A1D",
      },
      boxShadow: {
        card: "0px 35px 120px -15pxrgb(247, 228, 228)",
        "dark-card": "0 4px 6px rgba(0,0,0,0.9)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg2.jpg')",
        "hero-pattern-dark":
          "linear-gradient(rgba(10,10,10,0.9), rgba(10,10,10,0.95)), url('/src/assets/bg2.jpg')",

        "dark-gradient":
          "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #111111 75%, #000000 100%)",

        // subtle noise texture overlay to add grain (you can generate or find a transparent PNG)
        "noise-texture": "url('/src/assets/noise.png')",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
