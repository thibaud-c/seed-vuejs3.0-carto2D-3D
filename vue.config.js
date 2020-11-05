// vue.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path')

module.exports = {
    publicPath: './',
    configureWebpack: {
      plugins: [
        // Copy Cesium Assets, Widgets, and Workers to a static directory
        new CopyWebpackPlugin([{ from: 'node_modules/cesium/Build/Cesium/Workers/', to: './static/Cesium/Workers' }]),
        new CopyWebpackPlugin([{ from: 'node_modules/cesium/Build/Cesium/ThirdParty/', to: './static/Cesium/ThirdParty' }]),
        new CopyWebpackPlugin([{ from: 'node_modules/cesium/Build/Cesium/Assets/', to: './static/Cesium/Assets' }]),
        new CopyWebpackPlugin([{ from: 'node_modules/cesium/Build/Cesium/Widgets/', to: './static/Cesium/Widgets' }]),
        new webpack.DefinePlugin({
          // Define relative base path in cesium for loading assets
          CESIUM_BASE_URL: JSON.stringify('./static/Cesium/')
        }),
      ],
      module: {
        // Removes these errors: "Critical dependency: require function is used in a way in which dependencies cannot be statically extracted"
        // https://github.com/AnalyticalGraphicsInc/cesium-webpack-example/issues/6
        unknownContextCritical: false,
        rules: [{
          test: /\.js$/,
          enforce: 'pre',
          include: path.resolve(__dirname, './static/Cesium/'),
          use: [{
            loader: 'strip-pragma-loader',
            options: {
                pragmas: {
                debug: false
              }
            }
          }]
        }]
      }
    },
    lintOnSave: false
}