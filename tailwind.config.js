const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coolblack: {
          50: '#FAFAFA',
          100: '#EBECEC',
          200: '#D3D5D6',
          300: '#B2B6B8',
          400: '#898F92',
          500: '#626A6E',
          600: '#454F54',
          700: '#323D41',
          800: '#263237',
          900: '#232F34',
        },
        'green-neutral': {
          primary: '#2EAE4E',
          50: '#F9FAFA',
          100: '#F3F5F5',
          200: '#E7EBEB',
          300: '#D6DBDB',
          400: '#C9CCCE',
          500: '#94ABAB',
          600: '#809191',
          700: '#4D6666',
          800: '#364F4F',
          900: '#1B2727',
        },
        green: {
          50: '#F2FCF5',
          100: '#CCF2D5',
          200: '#98E4AB',
          300: '#72DA8C',
          400: '#4BD06D',
          500: '#36C95B',
          600: '#2EAE4E',
          700: '#217C38',
          800: '#144B21',
          900: '#07190B',
        },
        blue: {
          secondary: '#2196F3',
          50: '#EFF7FE',
          100: '#DFF0FD',
          200: '#BFE1FC',
          300: '#9FD1FA',
          400: '#70BAF7',
          500: '#2196F3',
          600: '#0C81E0',
          700: '#0A6BBB',
          800: '#074B83',
          900: '#042B4B',
        },
        yellow: {
          50: '#FEFDF5',
          100: '#FDF9E1',
          200: '#FCF4CD',
          300: '#FBF0B9',
          400: '#F9EA9B',
          500: '#F7E171',
          600: '#F4D642',
          700: '#DCB90D',
          800: '#AB900A',
          900: '#493E04',
        },
        red: {
          50: '#FFEFED',
          100: '#FED7D2',
          200: '#F1998E',
          300: '#E85C4A',
          400: '#FF544A',
          500: '#E11900',
          600: '#AB1300',
          700: '#870F00',
          800: '#5A0A00',
          900: '#260200',
        },
      },
      dropShadow: {
        xs: '0px 12px 24px -10px rgba(179, 182, 186, 0.05)',
        sm: '0px 24px 32px -15px rgba(168, 175, 182, 0.15)',
        md: '0px 32px 48px -20px rgba(100, 112, 122, 0.15)',
        lg: '0px 48px 56px -25px rgba(100, 112, 122, 0.15)',
      },
      screens: {
        md: '800px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
