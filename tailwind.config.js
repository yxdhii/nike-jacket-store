/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"Barlow"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'translateX(-50%) scaleX(1)' },
          '50%': { opacity: '0.25', transform: 'translateX(-50%) scaleX(0.75)' },
        },
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.82)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        float: 'float 3.5s ease-in-out infinite',
        glowPulse: 'glowPulse 3.5s ease-in-out infinite',
        fadeSlideIn: 'fadeSlideIn 0.5s ease forwards',
        scaleIn: 'scaleIn 0.45s ease forwards',
      },
    },
  },
  plugins: [],
}