/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        mons: ['Montserrat', "sans-serif"]

      },
      backgroundImage: {
        'control-img': " url(./assests/images/Bg_3.png)",
        'transfer-img': " url(./assests/images/Bg.png)",
        'Oval-img': " url(./assests/images/Oval.png)",
        'faq-img': " url(./assests/images/Hero.png)",
        'feature-img': " url(./assests/images/feature.png)",
        'featureMobile-img': " url(./assests/images/featureOvel.png)",
        'contact-img': " url(./assests/images/contact.png)",

      }
    },
  },
  plugins: [],
}