/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        garden: {
          dark: '#1a2f23', // Deep Forest Green
          olive: '#4b5d44', // Warm Olive
          earth: '#8b7e66', // Earthy Taupe
          stone: '#e5e1d8', // Soft Stone Off-white
          accent: '#c49a6c', // Gold/Sand Accent
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
