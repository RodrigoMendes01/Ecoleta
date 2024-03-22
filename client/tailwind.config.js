/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#C1E3D6',
          100: '#A4DBC6',
          200: '#88DBBB',
          300: '#6BD1AA',
          400: '#56D1A2',
          500: '#28C98B',
          600: '#1FAD77',
          700: '#189967',
          800: '#137851',
          900: '#0F5C3E',
        },
        gray: {
          50: '#E6E1E5',
          100: '#F5F7FA',
          200: '#C9C5CA',
          300: '#AEAAAE',
          400: '#939094',
          500: '#787579',
          600: '#605D62',
          700: '#484649',
          800: '#313033',
          900: '#1C1B1F',
        },
        red: {
          50: '#FFFBF9',
          100: '#FCEEEE',
          200: '#F9DEDC',
          300: '#F2B8B5',
          400: '#EC9283',
          500: '#E46962',
          600: '#DC362E',
          700: '#B3261E',
          800:'#8C1D18',
          900: '#601410',
        },
        main: {
          50: '#322153'
        }
      }
    },
  },
  keyframes: {
    slideDownAndFade: {
      from: { opacity: '0', transform: 'translateY(-2px)' },
      to: { opacity: '1', transform: 'translateY(0)' },
    },
    slideLeftAndFade: {
      from: { opacity: '0', transform: 'translateX(2px)' },
      to: { opacity: '1', transform: 'translateX(0)' },
    },
    slideUpAndFade: {
      from: { opacity: '0', transform: 'translateY(2px)' },
      to: { opacity: '1', transform: 'translateY(0)' },
    },
    slideRightAndFade: {
      from: { opacity: '0', transform: 'translateX(-2px)' },
      to: { opacity: '1', transform: 'translateX(0)' },
    },
  },
  animation: {
    slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
  plugins: [],
};

