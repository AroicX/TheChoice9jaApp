const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['inter', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: '#282828',
        'green-primary': '#2EAE4E',
        'neutral-primary': '#94ABAB',
        'neutral-secondary': '#BEBEBE',
        'neutral-light': '#364F4F',
        'neutral-dark': '#4D6666',
        'coolblack-primary': '#626A6E',
        light: '#B2B6B8',
        lighter: '#E7EBEB',
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
      boderWidth: {
        xs: '0.5px',
        sm: '1px',
        md: '2px',
        lg: '3px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
