/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundPosition: {
        // Untuk ukuran mobile kecil (di bawah 375px)
        'custom-mobile': 'right -38px top 0',

        // Untuk ukuran 375px ke atas
        'custom-mobile-l': 'right top',

        // Untuk ukuran layar lebih besar
        'custom-md': 'right top',
      },
      screens: {
        'mobile-m': '375px',
        // Custom breakpoint untuk mobile m (375px)
        'mobile-l': '425px',

        // Breakpoint default untuk ukuran lebih besar
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        'cinzel-decorative': ['Cinzel Decorative', 'serif'],
        'bellefair': ['Bellefair', 'serif'],
        'the-seasons': ['The Seasons', 'serif'],
        'lora': ['Lora', 'serif'],
        'cardo': ['Cardo', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'delicious': ['"Beautifully Delicious"', 'cursive'],
      },
      colors: {
        maroon: '#603235',
        grey: '#807b76'
      },
      fontSize: {
        '4.5xl': '2.5rem', // Contoh ukuran font untuk 4.5xl (40px)
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 120s linear infinite', // 30 detik untuk looping scroll
      },
      translate: {
        '-220': '-220%',  // Adding custom translate-x for -200%
      },
    },
  },
  plugins: [],
}

