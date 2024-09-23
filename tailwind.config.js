/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundPosition: {
        'custom-mobile': 'left -125px top 0',
        'custom-md': 'left top',
        'custom-lg': 'center top',
      },
      fontFamily: {
        'cinzel-decorative': ['Cinzel Decorative', 'serif'],
        'bellefair': ['Bellefair', 'serif'],
        'the-seasons': ['The Seasons', 'serif'],
        'lora': ['Lora', 'serif'],
        'cardo': ['Cardo', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
      },
      colors: {
        maroon: '#603235',
        grey: '#807b76'
      },
      fontSize: {
        '4.5xl': '2.5rem', // Contoh ukuran font untuk 4.5xl (40px)
      },
    },
  },
  plugins: [],
}

