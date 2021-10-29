module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'primaryRed': '#FF3D5D',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
