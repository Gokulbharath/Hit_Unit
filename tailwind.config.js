/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        copper: {
          DEFAULT: '#C67C4E',
          50: '#FBF3ED',
          100: '#F6E1D3',
          200: '#EBBF9F',
          300: '#E0A075',
          400: '#D08D5D',
          500: '#C67C4E',
          600: '#A9623A',
          700: '#874A2C',
          800: '#633522',
          900: '#3F2115',
        },
        gold: {
          DEFAULT: '#E8B86D',
          50: '#FDF7EA',
          100: '#FAEFCB',
          200: '#F4DC95',
          300: '#EEC961',
          400: '#E8B86D',
          500: '#D29F45',
          600: '#A87C30',
          700: '#7D5C23',
        },
        ink: {
          DEFAULT: '#111111',
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2A2A2A',
        },
        muted: '#6B7280',
        line: '#E5E5E5',
        canvas: '#FAFAFA',
        surface: '#FFFFFF',
        hover: '#F3F3F3',
      },
      fontFamily: {
        heading: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(17,17,17,0.04), 0 8px 24px -12px rgba(17,17,17,0.08)',
        card: '0 1px 3px rgba(17,17,17,0.04), 0 12px 40px -16px rgba(17,17,17,0.12)',
        glow: '0 0 0 1px rgba(198,124,78,0.18), 0 18px 60px -20px rgba(198,124,78,0.35)',
        float: '0 20px 60px -20px rgba(17,17,17,0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'grid-pan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        'grid-pan': 'grid-pan 20s linear infinite',
      },
    },
  },
  plugins: [],
};
