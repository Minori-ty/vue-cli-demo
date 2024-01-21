const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,

  configureWebpack: require('./webpack.config.cjs'),
  pages: {
    app: {
      entry: './src/main.js',
      filename: 'index.html',
      template: './public/index.html',
      title: 'vue2',
      chunks: ['code', 'chunk-vendors', 'app'],
      chunksSortMode: 'manual',
    },
  },
})
