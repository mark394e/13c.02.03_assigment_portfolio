// vite.config.js
const { resolve } = require("path");

module.exports = {
  base: "./", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        assignment1: resolve(__dirname, "13c_01_01.html"),
        assignment2: resolve(__dirname, "13c_01_02.html"),
        assignment3: resolve(__dirname, "13c_02_01.html"),
      },
    },
  },
};
