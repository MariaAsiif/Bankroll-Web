/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]

      },
      backgroundImage: {
        'control-img': " url(./assests/images/Bg_3.png)",
        'transfer-img': " url(./assests/images/Bg.png)",
        'Oval-img': " url(./assests/images/Oval.png)",
        'feature-img': " url(./assests/images/Hero.png)",

      }
    },
  },
  plugins: [],
}