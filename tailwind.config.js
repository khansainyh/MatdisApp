/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f8dfd8',
        'secondary': '#fe7361',
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}