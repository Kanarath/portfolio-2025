const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'stroke-blue': '#10EFFF',
        'pink-text': '#F085C3',
        'purple-text': '#AF92DB',
        'yellow-text': '#E6ED97',
        'green-text': '#58CB78',
      },
      fontFamily: {

        sans: ['"Russo One"', ...defaultTheme.fontFamily.sans],


      },
      boxShadow: {

        'blue-shadow': '0 0 20px rgba(0, 214, 245, 50)',

      },

    },
    },
  plugins: [],
};
