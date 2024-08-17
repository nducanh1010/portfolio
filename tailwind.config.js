/** @type {import('tailwindcss').Config} */
// @ts-ignore
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: "#52525b",
        semibold: "#18181b",
        coffee: {
          50: "#E8D6D0",
          200: "#C89F94",
          400: "#a25f4b",
          600: "#744838"
        }
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        slideUp: {
          "0%": {},

          "100%": { transform: "translateY(0)", opacity: 1 }
        },
       
        fadeIn: {
          from: { opacity: 0, bottom: "0px" },
          to: { opacity: 1, bottom: "1rem" }
        },
        fadeOut: {
          from: { opacity: 1, bottom: "1rem" },
          to: { opacity: 0, bottom: "0px" }
        }
      },
      animation: {
          wave: "wave 2.5s infinite",
        slideUp: "slideUp .4s ",
        slideDown: "slideDown .4s ease-in-out",
        fadeIn: "fadeIn .3s ease-in-out",
        fadeOut: "fadeOut .3s ease-in-out"
      }
    }
  },
  plugins: []
};
