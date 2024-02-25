/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-blue': '#1d9bf0',
        'btn-blue-hover': '#2184c6'
      },
      screens: {
        'md-special': '1025px',
        'sm-extra': '500px',
        'sm-extra-small': '360px',

      },

    },
  },
  plugins: [],
}
