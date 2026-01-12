/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#00f3ff',
        dark: '#000000',
        card: '#0a0a0a',
      },
    },
  },
  plugins: [],
}