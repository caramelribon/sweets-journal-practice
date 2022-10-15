module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/_variables.scss";`,
      },
    },
  },
};
