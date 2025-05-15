module.exports = {
  content: [
    "./layouts/**/*.{html,js,md}",
    "./content/**/*.{html,js,md}",
    "./themes/**/*.{html,js,md}",
    "./assets/**/*.{html,js,md}",
    "./static/**/*.{html,js,md}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
