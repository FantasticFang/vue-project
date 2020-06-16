const path = require('path')
module.exports =  {
  configureWebpack: {
    module: {},
    resolve: {
      alias: require('./aliases.config.js').webpack
    }
  },
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 80,
    compress: true
  }
}
