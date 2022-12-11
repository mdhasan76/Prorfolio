/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
      },
    },
  },
  plugins: [require("daisyui")],
}
