const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      'gray-dark': '#303030',
      'gray-light': '#D8D8D8',
    },
    fontFamily: {
      sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      body: ['1.125rem', 1.56],
      h1: ['12.5rem', 1],
      h2: ['3.5rem', 1.21],
      h3: ['1.5rem', 1.67],
      h4: ['1.25rem', 1.4],
      h5: ['1.125rem', 1.56],
      h6: ['.9375rem', 1.87],
      suffix: ['2.5rem', 0.7],
      button: ['1rem', 1.75],
      'h1-tablet': ['9.375rem', 1],
      'h2-tablet': ['2.5rem', 1.2],
      'h3-tablet': ['1.125rem', 1.56],
      'h4-tablet': ['1.125rem', 1.56],
      'h6-tablet': ['.8125rem', 1.56],
      'suffix-tablet': ['2rem', 0.875],
      'body-mobile': ['.75rem', 2.15],
      'h1-mobile': ['6.25rem', 1],
      'h2-mobile': ['1.25rem', 1.2],
      'h3-mobile': ['.9375rem', 1.87],
      'h4-mobile': ['.9375rem', 1.67],
      'h5-mobile': ['.75rem', 1.83],
      'h6-mobile': ['.625rem', 2.8],
      'suffix-mobile': ['.9375rem', 1.87],
      'button-mobile': ['.75rem', 1.17],
    },
    letterSpacing: {
      tight: '-.025em',
      wide: '.2em',
      wider: '.3125em',
    },
    backgroundImage: {
      'daytime-desktop': 'url(../images/bg-image-daytime-desktop.jpg)',
      'daytime-tablet': 'url(../images/bg-image-daytime-tablet.jpg)',
      'daytime-mobile': 'url(../images/bg-image-daytime-mobile.jpg)',
      'nighttime-desktop': 'url(../images/bg-image-nighttime-desktop.jpg)',
      'nighttime-tablet': 'url(../images/bg-image-nighttime-tablet.jpg)',
      'nighttime-mobile': 'url(../images/bg-image-nighttime-mobile.jpg)',
    },
    extend: {
      maxWidth: {
        container: '69.375rem',
        comment: '33.75rem',
      },
      width: {
        29: '7.75rem',
      },
      height: {
        'panel-desktop': '25rem',
        'panel-tablet': '27.5rem',
        'panel-mobile': '16rem',
      },
      translate: {
        '-panel-desktop': '-25rem',
        '-panel-tablet': '-27.5rem',
        '-panel-mobile': '-16rem',
      },
      gridTemplateColumns: {
        panel: 'repeat(2, auto)',
      },
    },
  },
  variants: {
    extend: {
      margin: ['odd'],
    },
  },
}
