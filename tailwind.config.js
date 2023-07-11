/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../public/images/bgHero.png')",
        'hero-small' : "url('../public/images/bgHeroSmall.png')"
      }
    },
  },
  plugins: [],
}

