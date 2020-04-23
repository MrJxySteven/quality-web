'use strict'
// const path = require('path')

// function resolve(dir) {
//   console.log(`name==${dir}`)
//   return path.join(__dirname, dir)
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  // configureWebpack: {
  //   // provide the app's title in webpack's name field, so that
  //   // it can be accessed in index.html to inject the correct title.
  //   resolve: {
  //     alias: {
  //       '@': resolve('src'),
  //       'components': path.resolve(__dirname, '../src/components'),
  //       'api': path.resolve(__dirname, '../src/api'),
  //       'utils': path.resolve(__dirname, '../src/utils'),
  //       'store': path.resolve(__dirname, '../src/store'),
  //       'router': path.resolve(__dirname, '../src/router')
  //     }
  //   }
  // },
}