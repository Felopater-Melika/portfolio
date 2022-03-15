module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: ['Saira'],
    },
    backgroundImage: {
      'galaxy-1': 'url(/galaxy1.jpg)',
      'galaxy-2': 'url(/galaxy2.jpg)',
      'galaxy-3': 'url(/galaxy3.jpg)',
      'galaxy-4': 'url(/galaxy4.jpg)',
      'galaxy-5': 'url(/galaxy5.jpg)',
      'galaxy-6': 'url(/galaxy6.jpg)',
      'galaxy-7': 'url(/galaxy7.png)',
      'galaxy-8': 'url(/galaxy8.jpg)',
      'galaxy-9': 'url(/galaxy9.jpg)',
      'galaxy-10': 'url(/galaxy10.jpg)',
      'galaxy-11': 'url(/galaxy11.jpg)',
      'galaxy-12': 'url(/galaxy12.jpg)',
      'galaxy-13': 'url(/galaxy13.jpg)',
      'galaxy-14': 'url(/galaxy14.jpg)',
      'galaxy-15': 'url(/galaxy15.jpg)',
      'galaxy-16': 'url(/galaxy16.jpg)',
      'galaxy-17': 'url(/galaxy17.jpg)',
    },

    extend: {
      textShadow: {
        active: '0 0 0.5em #FFF, 0 0 0.5em #FFF, 0 0 0.5em #FFF',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-textshadow')],
}
