/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'cinzel-decorative': ['Cinzel Decorative', 'serif'],
        'bellefair': ['Bellefair', 'serif'],
        'the-seasons': ['The Seasons', 'serif'],
        'lora': ['Lora', 'serif'],
        'cardo': ['Cardo', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
      },
      colors: {
        maroon: '#603235'
      }
    },
  },
  plugins: [],
}

