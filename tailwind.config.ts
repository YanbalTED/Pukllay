import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores andinos suaves inspirados en textiles y naturaleza peruana
        primary: {
          50: '#fef5f0',
          100: '#fde8dc',
          200: '#facdb3',
          300: '#f6a87f',
          400: '#f17a4a',
          500: '#ee5a2b', // Color principal - terracota suave
          600: '#df3f1a',
          700: '#ba2f15',
          800: '#952818',
          900: '#792517',
        },
        secondary: {
          50: '#f0f9f4',
          100: '#dcf2e6',
          200: '#bce5ce',
          300: '#8fd1ad',
          400: '#5ab586',
          500: '#369865', // Verde andino suave
          600: '#287a52',
          700: '#226244',
          800: '#1e4e38',
          900: '#1a4130',
        },
        accent: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fbd8a5',
          300: '#f8bc6d',
          400: '#f59a33',
          500: '#f37c0a', // Dorado andino
          600: '#e45f05',
          700: '#bd4808',
          800: '#97380e',
          900: '#7a2f0f',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

