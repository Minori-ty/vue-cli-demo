const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: require('./webpack.config.cjs'),
  pages: {
    app: {
      entry: './src/main.js',
      filename: 'index.html',
      template: './public/index.html',
      title: 'vue2',
      chunks: ['iframe', 'chunk-vendors', 'app'],
      chunksSortMode: 'manual',
      inlineSource: /iframe.+\.js$/,
    },
  },
})
