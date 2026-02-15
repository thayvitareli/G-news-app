import tokens from './src/theme/tokens';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        "primary": tokens.colors.primary,
        "background-light": tokens.colors['background-light'],
        "background-dark": tokens.colors['background-dark'],
      },
      fontFamily: {
        "display": tokens.fontFamily.display,
      },
      borderRadius: {
        "DEFAULT": tokens.borderRadius.DEFAULT,
        "lg": tokens.borderRadius.lg,
        "xl": tokens.borderRadius.xl,
        "full": tokens.borderRadius.full,
      },
    },
  },
  plugins: [],
};
