const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = [{
    entry: "./src/browser/index.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
        }]
    }
}, {
    entry: "./src/server/index.js",
    output: {
        path: __dirname,
        filename: "server.js"
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }]
    }
}];