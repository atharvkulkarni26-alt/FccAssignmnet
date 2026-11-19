/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        crimson: {
          600: '#DC2626',
          700: '#B91C1C',
        },
      },
    },
  },
  plugins: [],
};
