const { defineConfig } = require('@vue/cli-service')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

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
        },
      },
      plugins: [
        new MomentLocalesPlugin({
          // 剥离除 “zh-cn” 以外的所有语言环境。
          localesToKeep: ['zh-cn'],
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
