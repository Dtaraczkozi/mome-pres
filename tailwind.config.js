/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        paper: {
          DEFAULT: "#f4f1e8",
          deep: "#ebe4d4",
        },
        ink: {
          DEFAULT: "#0a0a0a",
          muted: "#3d3d3d",
        },
        rule: "#c9c2b4",
        accent: "#8b1538",
      },
      boxShadow: {
        card: "0 2px 0 0 rgba(10, 10, 10, 0.08), 0 8px 24px rgba(10, 10, 10, 0.06)",
        "card-hover":
          "0 4px 0 0 rgba(139, 21, 56, 0.12), 0 12px 32px rgba(10, 10, 10, 0.1)",
      },
      keyframes: {
        inkIn: {
          "0%": { opacity: "0", filter: "blur(6px)", letterSpacing: "0.08em" },
          "100%": { opacity: "1", filter: "blur(0)", letterSpacing: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        inkIn: "inkIn 1.1s ease-out forwards",
        marquee: "marquee 48s linear infinite",
      },
    },
  },
  plugins: [],
};
