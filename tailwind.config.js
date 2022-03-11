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
    },
    extend: {},
  },
  plugins: [],
}
