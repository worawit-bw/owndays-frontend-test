module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'mizolet': ['mizolet', 'Outfit', 'sans-serif'],
        'yu-gothic': ['yu-gothic-pr6n', 'Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
