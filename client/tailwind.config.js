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
      keyframes: {
        glowing: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '400% 0%' },
        },
      },
      animation: {
        glowing: 'glowing 20s linear infinite',
      },
    },
  },
  plugins: [],
}

