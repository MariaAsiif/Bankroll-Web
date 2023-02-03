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
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
        'move-img': 'move-img 2s ease-in-out infinite alternate',
        'move-img-2': 'move-img-2 2s ease-in-out infinite alternate',
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
        },
        'move-img':{
          from : {
            transform: 'translateX(0)'
          },
          to : {
            transform: 'translateX(calc(20vw - 20%))'
          }
        },
        'move-img-2':{
          from : {
            transform: 'translateX(0)'
          },
          to : {
            transform: 'translateX(calc(2vw - 2%))'
          }
        }
      },
      backgroundImage: {
        'control-img': " url(./assests/images/bg-1.jpg)",
        'transfer-img': " url(./assests/images/bg-2.jpg)",
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