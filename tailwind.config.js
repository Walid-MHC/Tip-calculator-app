/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan-strong': 'rgb(55, 189, 204)',
        'cyan-very-dark': 'rgb(0, 36, 46)',
        'cyan-dark-grayish': 'rgb(82, 105, 115)',
        'cyan-grayish': 'rgb(141, 159, 167)',
        'cyan-light-grayish': 'rgb(193, 213, 221)',
        'cyan-very-light-grayish': 'rgb(242, 248, 251)',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}