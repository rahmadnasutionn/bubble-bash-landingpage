/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A2C3D',
        green: '#2F6B4F',
        secondary: '#F9F9F9'
      }
    },
  },
  plugins: [],
}