/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9d182b",
        accent: "#f4bd33",
        background: "#f2e0d2",
        softPink: "#f2b4be",
        wine: "#703b43",
        mutedRose: "#caa4a4",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        title: "var(--font-aboreto)",
        text: "var(--font-work-sans)",
      },
    },
  },
  plugins: [],
};
