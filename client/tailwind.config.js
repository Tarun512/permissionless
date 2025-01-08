/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom_green: '#a3f108',
        discordBlue: '#7289DA', 
      },
    },
  },
  plugins: [],
}

