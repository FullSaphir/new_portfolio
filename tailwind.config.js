module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        "primaryBlue": "#377dff",
        "darkBlue": "#2c5d88",
        "darkBlack": "#1b1f22",
      },
      bg: {
        'space': "url('/img/bg.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}