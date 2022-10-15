module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        beige: '#f2ebe5',
        'light-blue': '#717d7f',
        'light-pink': '#c6ada6',
        'navy-blue': '#4f5666',
        'navy-pink': '#a76e63',
        'navy-brown': '#927d6e',
        'navy-gray': '#6d6d6d',
        'light-gray': '#8d8985',
        'light-green': '#969687',
        'nvy-brown': '#754035',
        'lgt-pink': '#ff8882',
        'lgt-yellow': '#efdc71',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
