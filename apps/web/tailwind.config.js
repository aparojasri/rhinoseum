/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#0f172a", // Navy
          600: "#2563eb", // Blue
          50: "#eff6ff",  // Light Blue
        }
      }
    },
  },
  plugins: [],
}