/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 520ms ease-out both',
        'fade-in': 'fadeIn 420ms ease-out both',
      },
      colors: {
        leaf: {
          50: '#f3faf3',
          100: '#e3f5e5',
          200: '#c8e9cc',
          300: '#9dd4a5',
          400: '#6bb878',
          500: '#459956',
          600: '#347d44',
          700: '#2c6338',
          800: '#274f30',
          900: '#214229',
          950: '#0f2414',
        },
        earth: {
          50: '#faf8f5',
          100: '#f2ebe0',
          200: '#e4d5c0',
          300: '#d1b896',
          400: '#bc9568',
          500: '#a67c52',
          600: '#916847',
          700: '#78543c',
          800: '#644636',
          900: '#533b2f',
        },
      },
      fontFamily: {
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
