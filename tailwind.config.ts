import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        lg: {
          css: {
            color: '#666666',
            h2: {
              color: '#536c46',
            },
            h3: {
              color: '#536c46',
            },
            strong: {
              color: '#536c46',
            },
            a: {
              color: '#e8963f',
              '&:hover': {
                color: '#d17e2f',
              },
            },
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#536c46',
          dark: '#3a4d31',
        },
        sand: {
          light: '#e6d7be',
          DEFAULT: '#d8c4a5',
        },
        orange: {
          DEFAULT: '#e8963f',
          dark: '#d17e2f',
        },
        text: {
          dark: '#333333',
          light: '#666666',
        }
      },
      fontFamily: {
        serif: ['Josefin Sans', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;