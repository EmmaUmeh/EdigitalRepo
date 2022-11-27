/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],

  content: ["public/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
