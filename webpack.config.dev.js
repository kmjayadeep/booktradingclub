const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    './src/browser/index.js'
  ],
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
    publicPath: '/'
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [{
        test: [/\.(jpe?g|png)$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, "")
        }
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'public/fonts/[name].[ext]',
            publicPath: url => url.replace(/public/, "")
          }
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react-app"]
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};