/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E8',
          100: '#FFEDB0',
          200: '#FFDA66',
          300: '#FFCA35',
          400: '#FFC522',
          500: '#FFBF1C', // primary yellow
          600: '#E5A900',
          700: '#B98500',
          800: '#805C00',
          900: '#4D3700',
        },
        cream: '#F7F1DC',
        charcoal: '#0B0B0B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFBF1C 0%, #E5A900 100%)',
      },
      boxShadow: {
        'soft-lg': '0 20px 60px -10px rgba(0,0,0,0.25)',
        card: '0 8px 30px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
