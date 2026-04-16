import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e0f0',
          200: '#b3c1e0',
          300: '#8da2d1',
          400: '#6783c1',
          500: '#4164b2',
          600: '#34508e',
          700: '#273c6b',
          800: '#1B2A4A',
          900: '#0e1525',
        },
        gold: {
          50: '#fdf9f0',
          100: '#f9edd4',
          200: '#f3dba9',
          300: '#edc97e',
          400: '#e7b753',
          500: '#C9A84C',
          600: '#a0863d',
          700: '#78652e',
          800: '#50431f',
          900: '#282210',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
