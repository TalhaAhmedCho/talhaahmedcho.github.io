/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        secondary: { // Example: Vibrant Pink
          100: '#fce7f3',
          300: '#f9a8d4',
          500: '#f472b6',
          700: '#ec4899',
          900: '#db2777',
        },
        accent: { // Example: Bright Yellow
          100: '#fef9c3',
          300: '#fde047',
          500: '#facc15',
          700: '#eab308',
          900: '#ca8a04',
        },
        neutralGlass: {
          100: 'rgba(229, 231, 235, 0.1)', // gray-200 with 0.1 opacity
          300: 'rgba(209, 213, 219, 0.1)', // gray-300 with 0.1 opacity
          500: 'rgba(156, 163, 175, 0.05)', // gray-400 with 0.05 opacity
          700: 'rgba(107, 114, 128, 0.1)', // gray-500 with 0.1 opacity
          900: 'rgba(55, 65, 81, 0.1)', // gray-700 with 0.1 opacity
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}