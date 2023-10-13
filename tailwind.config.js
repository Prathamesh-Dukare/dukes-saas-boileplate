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
          50: '#edf5ff',
          100: '#d7e8ff',
          200: '#b9d8ff',
          300: '#88c0ff',
          400: '#509dff',
          500: '#2876ff',
          600: '#1f5eff',
          700: '#0a3eeb',
          800: '#0f32be',
          900: '#133195',
          950: '#11205a',
        },
        gray: {
          50: '#f4f4f7',
          100: '#e4e5e9',
          200: '#cbccd6',
          300: '#a8abb8',
          400: '#7c8094',
          500: '#616479',
          600: '#535567',
          700: '#484956',
          800: '#3f3f4b',
          900: '#383941',
          950: '#050506',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
