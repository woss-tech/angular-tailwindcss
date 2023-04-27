/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        // serif: ['Noto Sans'],
      },
    },
  },
  plugins: [],
};
