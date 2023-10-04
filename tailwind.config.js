/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#eafff5',
          100: '#cdfee5',
          200: '#89fac7',
          300: '#61f4bb',
          400: '#23e49f',
          500: '#00cb89',
          600: '#00a571',
          700: '#00845d',
          800: '#00684b',
          900: '#005640',
          950: '#003024',
        },
        gray: {
          50: '#f3f6f3',
          100: '#e4e9e2',
          200: '#c9d3c7',
          300: '#a2b5a0',
          400: '#799176',
          500: '#587356',
          600: '#425a41',
          700: '#354834',
          800: '#2b3a2b',
          900: '#212c21',
          950: '#131b13',
        },
      },
    },
  },
  plugins: [],
};
