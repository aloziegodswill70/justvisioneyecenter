// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1E1E1E",
          primary: "#E34A2F",
          secondary: "#F26B3A",
          light: "#F8F8F8",
          muted: "#6B6B6B",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Playfair Display", "serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1200px",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)",
        premium: "0 20px 60px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};