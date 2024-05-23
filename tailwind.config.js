/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'tab': '768px',
        'laptop': '1024px',
        'desk': '1280px',
      },

      colors: {

        brand: {
          DEFAULT: '',
          100:'rgb(255 237 213)',
          200: 'rgb(254 215 170)',
          600: 'rgb(234 88 12)',
          700: 'rgb(210 65 21)',
        },

        "gray-title": "rgb(30 41 59)",
        "gray-subtitle": 'rgb(71 85 105)',
        "gray-separator": "rgb(202 213 225)",

        "blue-background": "rgb(199 230 248)",
      },
      fontFamily: {
        "hi": ['"Noto Sans"', 'sans-serif'],

      },
    },
  },
  plugins: [],
}

