const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/color.scss";`
      },
    },
  },
  devServer: {
    port: 8090, // 設定埠為 3000
  },
})
