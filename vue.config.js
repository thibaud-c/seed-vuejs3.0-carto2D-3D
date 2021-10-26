const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      // Copy Cesium Assets, Widgets, and Workers to a static directory
      new CopyWebpackPlugin(
        [
          { from: "node_modules/cesium/Build/Cesium/Workers", to: "./static/Cesium/Workers" },
          {
            from: "node_modules/cesium/Build/Cesium/ThirdParty",
            to: "./static/Cesium/ThirdParty"
          },
          { from: "node_modules/cesium/Build/Cesium/Assets", to: "./static/Cesium/Assets" },
          { from: "node_modules/cesium/Build/Cesium/Widgets", to: "./static/Cesium/Widgets" }
        ]
      ),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify("./static/Cesium/")
      })
    ],
    module: {
      // Removes these errors: "Critical dependency: require function is used in a way in which dependencies cannot be statically extracted"
      // https://github.com/AnalyticalGraphicsInc/cesium-webpack-example/issues/6
      unknownContextCritical: false,
      unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/,
    }
  }
};