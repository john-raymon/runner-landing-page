module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './pages/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        base: 'Archivo',
      },
      colors: {
        'runner-white': '#FCEFED',
        'runner-purple': '#6173F4',
        'runner-dark-purple': '#3B2E40',
        'runner-orange': '#F35E3E',
        'runner-black': '#030408'
      },
      letterSpacing: {
        widest: '.25em',
        _widest: '0.3em',
        __widest: '.5em',
      },
    }
  },
  variants: {
    extend: {
      display: ['hover', 'focus'],
     },
  }
}
