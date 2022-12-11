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
      backgroundColor: {
        'my': 'linear-gradient(145deg, #e2e8ec, #ffffff)',
      },
    },
  },
  plugins: [require("daisyui")],
}
