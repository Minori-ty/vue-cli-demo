const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.entry('code').clear().add('./src/code.js')
    config.entry('app').clear().add('./src/main.js')
  },
  configureWebpack: () => {
    return {
      entry: {
        code: './src/code.js',
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
          // minSize: 1024 * 5,
          // maxSize: 1024 * 20,
          cacheGroups: {
            moment: {
              name: 'monemt-test',
              priority: 20,
              test: /[/]node_modules[/]_?moment(.*)/,
              enforce: true,
            },
          },
        },
      },
      plugins: [
        new webpack.IgnorePlugin({
          resourceRegExp: /moment[/\\]locale$/,
          contextRegExp: /zh-cn/,
        }),
      ],
    }
  },
  pages: {
    index: {
      entry: './src/main.js',
      chunks: ['code', 'chunk-vendors', 'chunk-common', 'app'],
    },
  },
})
