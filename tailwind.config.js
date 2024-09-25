/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      // spacing: {
      //   'left': '38rem'
      // },
      letterSpacing: {
        'tunitx': '0.7rem',
      },
      backgroundImage: {
        'bg-stars': "url('./src/assets/bg-stars-1.webp')",
        
      },
      keyframes: {
        upToDown: {
          "0%": {
            transform: "translateY(0)"
          },

          "100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-1rem)"
          }
        },
        onLoad: {
          "0%": {
            transform: "translateY(-100%)"
          },
          "50%": {
            transform: "translateY(15%)"
          },
          "100%": {
            transform: "translateY(0)"
          }

        },
        "leftToRight": {
          "0%": {
            transform: "translateX(-100%)"
          },
          "50%": {
            transform: "translateX(5%)"
          },
          "100%": {
            transform: "translateX(0)"
          }
        },
        "rightToLeft": {
          "0%": {
            transform: "translateX(100%)"
          },
          "50%": {
            transform: "translateX(-5%)"
          },
          "100%": {
            transform: "translateX(0)"
          }
        },
      },

      animation: {
        'upToDown': 'upToDown 3s ease-in-out infinite',
        'onLoad': 'onLoad 2s ease-in-out',
        'leftToRight': 'leftToRight 2s ease-in-out',
        'rightToLeft': 'rightToLeft 2s ease-in-out'
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      
      colors: {
        'color1': 'rgba(7,4,45,1)',
        'color2': 'rgba(32,32,65,1)',
        'color3': 'rgba(14,53,60,1)',
        'color4': 'rgba(30,83,84,1)',
        'color5': 'rgba(22,54,59,1)',
        'color6': 'rgba(0,0,0,1)',
        'color7': 'rgba(78, 126, 151, 1)',
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-custom': 'linear-gradient(90deg, var(--tw-gradient-stops))',
        'gradient-custom2': 'radial-gradient(circle, var(--tw-gradient-stops))',
      }),
      linearGradientColors: theme => theme('colors'),
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}