/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        '40vh': '40vh',
        '60vh': '60vh',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

