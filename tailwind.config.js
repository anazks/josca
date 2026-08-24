/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050505', // Primary background
          900: '#0D0D0D', // Secondary background
          850: '#121212',
          800: '#151515', // Cards background
          700: '#222222',
          600: '#2A2A2A',
        },
        gold: {
          300: '#F0D69C',
          400: '#E5C384',
          500: '#C8A96B', // Primary Champagne Gold
          600: '#A6884B',
          700: '#7E6533',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E5C384 0%, #C8A96B 50%, #967A42 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(200, 169, 107, 0.2), transparent)',
        'dark-gradient': 'linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(5,5,5,0.9) 80%, #050505 100%)',
        'radial-gold': 'radial-gradient(circle at center, rgba(200, 169, 107, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
