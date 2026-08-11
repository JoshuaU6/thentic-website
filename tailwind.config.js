/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: { DEFAULT: '#8B1A1A', dark: '#5C0E0E', light: '#A82020' },
        gold: { DEFAULT: '#C9A84C', bright: '#F0C35A', pale: '#F5E6B8', dim: 'rgba(201,168,76,0.3)' },
        rich: { black: '#0D0D0D', warm: '#1A1008', surface: '#1E1208' },
        cream: '#FAF5E9',
        muted: '#9C8C7A',
        products: {
          lagos: '#8B6914',
          elderflower: '#2D5A27',
          whiskey: '#A0501A',
          ikoyi: '#1A2E5C',
          passion: '#5C1A6B',
          shirley: '#C41E1E',
          citrus: '#D4600A',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
        script: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'drift': 'drift 8s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-18px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        drift: { '0%,100%': { transform: 'translateY(0) translateX(0)' }, '33%': { transform: 'translateY(-20px) translateX(10px)' }, '66%': { transform: 'translateY(10px) translateX(-8px)' } },
      },
    },
  },
  plugins: [],
}
