const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    fontFamily: {
      body: 'inter',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      // Typescale - Light
      'large-light': [
        '2.125rem',
        {
          lineHeight: '2.563rem',
          letterSpacing: '-0.03rem',
          fontWeight: '300',
        },
      ],
      'heading-1-light': [
        '1.75rem',
        {
          lineHeight: '2.125rem',
          letterSpacing: '-0.025rem',
          fontWeight: '300',
        },
      ],
      'heading-2-light': [
        '1.375rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.025rem',
          fontWeight: '300',
        },
      ],
      'heading-3-light': [
        '1.25rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.02rem',
          fontWeight: '300',
        },
      ],
      'headline-light': [
        '1.063rem',
        {
          lineHeight: '1.438rem',
          letterSpacing: '-0.02rem',
          fontWeight: '300',
        },
      ],
      'subheadline-light': [
        '0.938rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '-0.02rem',
          fontWeight: '300',
        },
      ],
      'body-light': [
        '1.125rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.02rem',
          fontWeight: '300',
        },
      ],
      'body-2-light': [
        '1.125rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.005rem',
          fontWeight: '300',
        },
      ],
      'button-light': [
        '0.813rem',
        {
          lineHeight: '1.125rem',
          letterSpacing: '-0.005rem',
          fontWeight: '300',
        },
      ],
      'caption-1-light': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '-0.005rem',
          fontWeight: '300',
        },
      ],
      'caption-2-light': [
        '0.688rem',
        {
          lineHeight: '0.813rem',
          letterSpacing: '0rem',
          fontWeight: '300',
        },
      ],
      'overline-light': [
        '0.625rem',
        {
          lineHeight: '0.813rem',
          letterSpacing: '0.02rem',
          fontWeight: '500',
        },
      ],
      'paragraph-1-light': [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '-0.015rem',
          fontWeight: '400',
        },
      ],
      'paragraph-2-light': [
        '0.875rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.005rem',
          fontWeight: '400',
        },
      ],
      // Typescale - Regular
      'large-regular': [
        '2.125rem',
        {
          lineHeight: '2.563rem',
          letterSpacing: '-0.03rem',
          fontWeight: 400,
        },
      ],
      'heading-1-regular': [
        '1.75rem',
        {
          lineHeight: '2.125rem',
          letterSpacing: '-0.025rem',
          fontWeight: 400,
        },
      ],
      'heading-2-regular': [
        '1.375rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.025rem',
          fontWeight: 400,
        },
      ],
      'heading-3-regular': [
        '1.25rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.02rem',
          fontWeight: 400,
        },
      ],
      'headline-regular': [
        '1.063rem',
        {
          lineHeight: '1.438rem',
          letterSpacing: '-0.02rem',
          fontWeight: 400,
        },
      ],
      'subheadline-regular': [
        '0.938rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '-0.02rem',
          fontWeight: 400,
        },
      ],
      'body-regular': [
        '1.125rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.02rem',
          fontWeight: 400,
        },
      ],
      'body-2-regular': [
        '1.125rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.005rem',
          fontWeight: 400,
        },
      ],
      'button-regular': [
        '0.813rem',
        {
          lineHeight: '1.125rem',
          letterSpacing: '-0.005rem',
          fontWeight: 400,
        },
      ],
      'caption-1-regular': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '-0.005rem',
          fontWeight: 400,
        },
      ],
      'caption-2-regular': [
        '0.688rem',
        {
          lineHeight: '0.813rem',
          letterSpacing: '0rem',
          fontWeight: 400,
        },
      ],
      'overline-regular': [
        '0.625rem',
        {
          lineHeight: '0.813rem',
          letterSpacing: '0.02rem',
          fontWeight: 500,
        },
      ],
      'paragraph-1-regular': [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '-0.015rem',
          fontWeight: 400,
        },
      ],
      'paragraph-2-regular': [
        '0.875rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.005rem',
          fontWeight: 400,
        },
      ],

      // Typescale - Medium
      'large-medium': [
        '2.125rem',
        {
          lineHeight: '2.563rem',
          letterSpacing: '-0.03rem',
          fontWeight: 500,
        },
      ],
      'heading-1-medium': [
        '1.75rem',
        {
          lineHeight: '2.125rem',
          letterSpacing: '-0.025rem',
          fontWeight: 500,
        },
      ],
      'heading-2-medium': [
        '1.375rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.025rem',
          fontWeight: 500,
        },
      ],
      'heading-3-medium': [
        '1.25rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.02rem',
          fontWeight: 500,
        },
      ],
      'headline-medium': [
        '1.063rem',
        {
          lineHeight: '1.438rem',
          letterSpacing: '-0.02rem',
          fontWeight: 500,
        },
      ],
      'subheadline-medium': [
        '0.938rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '-0.02rem',
          fontWeight: 500,
        },
      ],
      'body-medium': [
        '1.125rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.02rem',
          fontWeight: 500,
        },
      ],
      'body-2-medium': [
        '1.125rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.005rem',
          fontWeight: 500,
        },
      ],
      'button-medium': [
        '0.813rem',
        {
          lineHeight: '1.125rem',
          letterSpacing: '-0.005rem',
          fontWeight: 500,
        },
      ],
      'caption-1-medium': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '-0.005rem',
          fontWeight: 500,
        },
      ],
      'caption-2-medium': [
        '0.688rem',
        {
          lineHeight: '0.813rem',
          letterSpacing: '0rem',
          fontWeight: 500,
        },
      ],
      'overline-medium': [
        '0.625rem',
        {
          lineHeight: '0.813rem',
          letterSpacing: '0.02rem',
          fontWeight: 500,
        },
      ],
      'paragraph-1-medium': [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '-0.015rem',
          fontWeight: 500,
        },
      ],
      'paragraph-2-medium': [
        '0.875rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.005rem',
          fontWeight: 500,
        },
      ],

      // Typescale - Semibold
      'large-semibold': [
        '2.125rem',
        {
          lineHeight: '2.563rem',
          letterSpacing: '-0.03rem',
          fontWeight: 600,
        },
      ],
      'heading-1-semibold': [
        '1.75rem',
        {
          lineHeight: '2.125rem',
          letterSpacing: '-0.025rem',
          fontWeight: 600,
        },
      ],
      'heading-2-semibold': [
        '1.375rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.025rem',
          fontWeight: 600,
        },
      ],
      'heading-3-semibold': [
        '1.25rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.02rem',
          fontWeight: 600,
        },
      ],
      'headline-semibold': [
        '1.063rem',
        {
          lineHeight: '1.438rem',
          letterSpacing: '-0.02rem',
          fontWeight: 600,
        },
      ],
      'subheadline-semibold': [
        '0.938rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '-0.02rem',
          fontWeight: 600,
        },
      ],
      'body-semibold': [
        '1.125rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.02rem',
          fontWeight: 600,
        },
      ],
      'body-2-semibold': [
        '1.125rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.005rem',
          fontWeight: 600,
        },
      ],
      'button-semibold': [
        '0.813rem',
        {
          lineHeight: '1.125rem',
          letterSpacing: '-0.005rem',
          fontWeight: 600,
        },
      ],
      'caption-1-semibold': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '-0.005rem',
          fontWeight: 600,
        },
      ],
      'caption-2-semibold': [
        '0.688rem',
        {
          lineHeight: '0.813rem',
          letterSpacing: '0rem',
          fontWeight: 600,
        },
      ],
      'overline-semibold': [
        '0.625rem',
        {
          lineHeight: '0.813rem',
          letterSpacing: '0.02rem',
          fontWeight: 700,
        },
      ],
      'paragraph-1-semibold': [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '-0.015rem',
          fontWeight: 600,
        },
      ],
      'paragraph-2-semibold': [
        '0.875rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.005rem',
          fontWeight: 600,
        },
      ],
      // Typescale - Bold
      'large-bold': [
        '2.125rem',
        {
          lineHeight: '2.563rem',
          letterSpacing: '-0.03rem',
          fontWeight: 700,
        },
      ],
      'heading-1-bold': [
        '1.75rem',
        {
          lineHeight: '2.125rem',
          letterSpacing: '-0.025rem',
          fontWeight: 700,
        },
      ],
      'heading-2-bold': [
        '1.375rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.025rem',
          fontWeight: 700,
        },
      ],
      'heading-3-bold': [
        '1.25rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.02rem',
          fontWeight: 700,
        },
      ],
      'headline-bold': [
        '1.063rem',
        {
          lineHeight: '1.438rem',
          letterSpacing: '-0.02rem',
          fontWeight: 700,
        },
      ],
      'subheadline-bold': [
        '0.938rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '-0.02rem',
          fontWeight: 700,
        },
      ],
      'body-bold': [
        '1.125rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.02rem',
          fontWeight: 700,
        },
      ],
      'body-2-bold': [
        '1.125rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.005rem',
          fontWeight: 700,
        },
      ],
      'button-bold': [
        '0.813rem',
        {
          lineHeight: '1.125rem',
          letterSpacing: '-0.005rem',
          fontWeight: 700,
        },
      ],
      'caption-1-bold': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '-0.005rem',
          fontWeight: 700,
        },
      ],
      'caption-2-bold': [
        '0.688rem',
        {
          lineHeight: '0.813rem',
          letterSpacing: '0rem',
          fontWeight: 700,
        },
      ],
      'overline-bold': [
        '0.625rem',
        {
          lineHeight: '0.813rem',
          letterSpacing: '0.02rem',
          fontWeight: 800,
        },
      ],
      'paragraph-1-bold': [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '-0.015rem',
          fontWeight: 700,
        },
      ],
      'paragraph-2-bold': [
        '0.875rem',
        {
          lineHeight: '1.563rem',
          letterSpacing: '-0.005rem',
          fontWeight: 700,
        },
      ],
    },
    extend: {
      colors: {
        coolblack: {
          primary: '#282828',
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
