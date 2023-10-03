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
      backgroundImage: {
        awesome_pattern: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='60' height='59.5' patternTransform='scale(1) rotate(45)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5' transform='translate(10,0)' stroke-width='1' stroke='none' fill='hsla(122, 25%, 97%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(-80,0)' fill='url(%23a)'/></svg>")`,
      },
    },
  },
  plugins: [],
};
