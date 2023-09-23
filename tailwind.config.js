/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // customized colors
    colors: {
      'primary': "#152f2e",
      'light': "#00c2c5",
      'extralight': "#e8fbfb",
      "white":"#fff"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

  },
  plugins: [],
}

