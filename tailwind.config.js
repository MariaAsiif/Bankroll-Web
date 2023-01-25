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

      animation: {
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'
      },

      keyframes: {
        'shake': {
          '10%, 90%' :{
            transform : 'translate3d(-1px, 0 , 0)'
          },
          '20%, 80%' :{
            transform : 'translate3d(2px, 0 , 0)'
          },
          '30%, 50%, 70%' :{
            transform : 'translate3d(-4px, 0 , 0)'
          },
          '40%, 60%' :{
            transform : 'translate3d(4px, 0 , 0)'
          },


        }
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