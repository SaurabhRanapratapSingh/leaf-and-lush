/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          950: '#0C0704', // Dark velvet espresso
          900: '#150D09', // Deep espresso black
          850: '#1E130D', // Dark roasted coffee
          800: '#2A1712', // Espresso rich
          700: '#3D241A', // Dark mocha
          600: '#6F4030', // Coffee brown
          500: '#8A533C', // Milk chocolate
          400: '#A86C4E', // Roasted caramel
          300: '#C78C6B', // Warm latte
          200: '#D8BFA3', // Latte cream
          100: '#EADBC8', // Light crema
          50: '#FAF4ED',  // Steamed milk wash
        },
        leaf: {
          900: '#13351C',
          800: '#1E4D2B',
          700: '#286237',
          600: '#2E6F40', // Brand Leaf Green
          500: '#3E8E55',
          400: '#52B770',
          300: '#7CD194',
          200: '#AEE4BE',
          100: '#DDF4E4',
          50: '#F0F9F3',
        },
        caramel: {
          600: '#9B5B28',
          500: '#B97845', // Specialty Caramel
          400: '#D49156',
          300: '#E6AC76',
          200: '#F2C89E',
          100: '#FCE7D2',
          50: '#FFF7ED',
        },
        citrus: {
          600: '#C2410C',
          500: '#EA580C', // Fresh Citrus Orange
          400: '#F97316',
          300: '#FB923C',
          200: '#FDBA74',
          100: '#FFEDD5',
        },
        berry: {
          600: '#BE123C',
          500: '#E11D48', // Sweet Strawberry Berry
          400: '#F43F5E',
          300: '#FB7185',
          200: '#FECDD3',
          100: '#FFE4E6',
        },
        cream: {
          900: '#38302A',
          800: '#5C5046',
          700: '#857467',
          600: '#B09D8E',
          500: '#D5C5B6',
          400: '#E7DDD2',
          300: '#F1E9E0',
          200: '#F4E8D5', // Warm cream
          100: '#FAF6F0',
          50: '#FFFDF9',
        },
        gold: {
          500: '#C99A5B', // Soft Antique Gold
          400: '#DCB074',
          300: '#E8C793',
          200: '#F4DEB9',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 35px -5px rgba(185, 120, 69, 0.25)',
        'glow-leaf': '0 0 30px -5px rgba(62, 142, 85, 0.3)',
        'glow-citrus': '0 0 30px -5px rgba(234, 88, 12, 0.3)',
        'glow-berry': '0 0 30px -5px rgba(225, 29, 72, 0.3)',
        'card-hover': '0 16px 32px -10px rgba(185, 120, 69, 0.2)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      }
    },
  },
  plugins: [],
}
