/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-sea-green': {
          DEFAULT: '#00BFB3',
          '100': '#002623',
          '200': '#004B46',
          '300': '#00716A',
          '400': '#00978D',
          '500': '#00BFB3',
          '600': '#00FDEC',
          '700': '#3EFFF2',
          '800': '#7EFFF6',
          '900': '#BFFFFB'
        },
        'pine-green': {
          DEFAULT: '#2A7C6F',
          '100': '#091916',
          '200': '#11322D',
          '300': '#1A4B43',
          '400': '#226459',
          '500': '#2A7C6F',
          '600': '#3CB09D',
          '700': '#66CBBA',
          '800': '#99DCD1',
          '900': '#CCEEE8'
        },
        'midnight-green': {
          DEFAULT: '#023436',
          '100': '#000A0B',
          '200': '#011516',
          '300': '#011F20',
          '400': '#022A2B',
          '500': '#023436',
          '600': '#05898E',
          '700': '#08DEE5',
          '800': '#50F3F9',
          '900': '#A7F9FC'
        },
        'persian-green': {
          DEFAULT: '#049A8F',
          '100': '#011F1D',
          '200': '#023E3A',
          '300': '#025C56',
          '400': '#037B73',
          '500': '#049A8F',
          '600': '#06DFD0',
          '700': '#31FAEC',
          '800': '#76FBF3',
          '900': '#BAFDF9'
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
      },
      letterSpacing: {
        'tight': '-0.015em',
        'tighter': '-0.025em',
        'widest': '0.2em',
      },
      lineHeight: {
        'relaxed': '1.75',
        'extra-tight': '1.1',
      }
    },
  },
  plugins: [],
};