/** @type {import('tailwindcss').Config} */
// Colors come from CSS variables in src/index.css, so every class
// (bg-surface, text-text-secondary, ...) switches with light/dark mode.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: v('page'),
        surface: v('surface'),
        primary: v('primary'),
        secondary: v('chip'),
        line: v('line'),
        'text-primary': v('text'),
        'text-secondary': v('muted'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Lucida Console', 'Courier New', 'monospace'],
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.5s ease-out both',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
