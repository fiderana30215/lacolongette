/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
<<<<<<< HEAD
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
=======
          50: '#FBF8F1',
          100: '#F5EDD9',
          200: '#EAD9AF',
          300: '#DDC482',
          400: '#D2B36A',
          500: '#C9A961', // primary gold
          600: '#B8984F',
          700: '#96793D',
          800: '#725B2E',
          900: '#4D3D1F',
        },
        cream: '#F5F5F0',
        charcoal: '#2C2C2C',
>>>>>>> d598250 (modif)
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      backgroundImage: {
<<<<<<< HEAD
        'gold-gradient': 'linear-gradient(135deg, #FFBF1C 0%, #E5A900 100%)',
=======
        'gold-gradient': 'linear-gradient(135deg, #C9A961 0%, #B8984F 100%)',
>>>>>>> d598250 (modif)
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
