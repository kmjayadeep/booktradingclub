const path = require("path");
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer')

const ENV = process.env.NODE_ENV || 'development';

const CSS_MAPS = ENV !== 'production';

module.exports = [{
    entry: "./src/browser/index.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                }
              },
              "css-loader"
            ]
        }]
    },
    plugins: ([
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
    ])
}, {
    entry: "./src/server/index.js",
    output: {
        path: __dirname,
        filename: "server.js"
    },
    externals: [nodeExternals()]
}];