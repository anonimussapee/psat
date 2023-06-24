/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'ss': '320px',
      // => @media (min-width: 320px) { ... }

      'xs': '400px',
      // => @media (min-width: 400px) { ... }

      'sm': '600px',
      // => @media (min-width: 600px) { ... }

      'md': '750px',
      // => @media (min-width: 750px) { ... }

      'lg': '1000px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

  },
  plugins: [],
  darkMode: 'class',
}

