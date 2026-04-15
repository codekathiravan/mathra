/** @type {import('tailwindcss').Config} */
const config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          maroon:   { DEFAULT: '#7B1F1F', dark: '#4A0E0E', light: '#9B3030' },
          terra:    { DEFAULT: '#C4552A', light: '#E07820' },
          saffron:  { DEFAULT: '#E07820', light: '#F0A040' },
          navy:     { DEFAULT: '#1B2E6B', light: '#2A4AB0' },
          gold:     { DEFAULT: '#C9A84C', light: '#E8C96A' },
          cream:    { DEFAULT: '#FDF8F2' },
          warm:     { DEFAULT: '#FAF3E8' },
        },
        fontFamily: {
          raleway: ['Raleway', 'sans-serif'],
          cinzel:  ['Cinzel', 'serif'],
        },
        animation: {
          ticker: 'ticker 30s linear infinite',
          'spin-slow': 'spin 22s linear infinite',
          glow: 'glow 3s ease-in-out infinite alternate',
        },
        keyframes: {
          ticker: {
            '0%':   { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
          glow: {
            '0%':   { boxShadow: '0 0 25px rgba(201,168,76,0.2)' },
            '100%': { boxShadow: '0 0 55px rgba(201,168,76,0.55)' },
          },
        },
        boxShadow: {
          card: '0 2px 12px rgba(0,0,0,0.05)',
          'card-hover': '0 12px 35px rgba(196,85,42,0.15)',
          hero: '0 20px 60px rgba(0,0,0,0.25)',
        },
      },
    },
    plugins: [],
  }
  
  export default config