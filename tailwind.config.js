/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'moulpali': ['Moulpali', 'sans-serif'],
        'mouse-memoir': ['Mouse Memoirs'],
      },
    },

  },
  plugins: [],
}

