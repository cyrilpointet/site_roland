const colors = require('./colors.config')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    colors: { ...colors },
    zIndex: {
      '1': 1
    }
  },
  variants: {},
  plugins: []
}
