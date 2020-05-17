module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        typography: "#232323",
        primary: {
          default: "#2980b9",
          dark: "#2c3e50",
          light: "#3498db",
        },
      },
    },
    fontFamily: {
      display: ["Balsamiq Sans", "cursive"],
      body: ["Source Sans Pro", "sans-serif"],
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
};
