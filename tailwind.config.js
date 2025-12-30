/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        ink: {
          900: "#0b0f14",
          800: "#101520",
          700: "#1a2230",
        },
        mist: "#e9eef5",
        accent: {
          500: "#27c3a8",
          600: "#17a890",
        },
      },
      boxShadow: {
        glow: "0 10px 40px rgba(39, 195, 168, 0.25)",
        "glow-lg": "0 20px 60px rgba(39, 195, 168, 0.3)",
        "glow-accent": "0 0 20px rgba(39, 195, 168, 0.4)",
        "premium": "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)",
        "premium-dark": "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
}
