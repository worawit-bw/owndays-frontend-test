module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: false
      // ไม่มี screens = ไม่มี max-width จำกัด
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
}
