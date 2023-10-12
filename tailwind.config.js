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
        green1: {
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
        green: {
          50: '#fff7ed',
          100: '#ffecd4',
          200: '#ffd6a8',
          300: '#ffb871',
          400: '#ff9747',
          500: '#fe6e11',
          600: '#ef5307',
          700: '#c63c08',
          800: '#9d310f',
          900: '#7e2a10',
          950: '#441206',
        },
        gray: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#000000',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
