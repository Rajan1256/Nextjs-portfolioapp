/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6F7CF4",
        secondary: "#38BDF8",
        accent: "#A855F7",
        glow: "#0ea5e9",
        surface: "#0B1021",
      },
      fontFamily: {
        sans: ["'Poppins'", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 10px 50px rgba(111,124,244,0.35)",
        glass: "0 30px 80px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid": "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
