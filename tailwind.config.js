module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    spinner: (theme) => ({
      default: {
        color: "#2c3e50", // color you want to make the spinner
        size: "8em", // size of the spinner (used for both width and height)
        border: "2px", // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: "500ms", // the speed at which the spinner should rotate
      },
    }),
    extend: {
      colors: {
        typography: "#232323",
        primary: {
          default: "#2980b9",
          dark: "#2c3e50",
          light: "#3498db",
        },
        overlay: "rgba(0,0,0, 0.99)",
      },
    },
    fontFamily: {
      display: ["Bitter", "cursive"],
      body: ["Source Sans Pro", "sans-serif"],
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
    spinner: ["responsive"],
  },
  plugins: [require("tailwindcss-spinner")()],
};
