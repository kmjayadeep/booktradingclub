const path = require("path");
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
            // Transform our own .(less|css) files with PostCSS and CSS-modules
            test: /\.(less|css)$/,
            // include: [path.resolve(__dirname, 'src/shared')],
            use: ExtractTextPlugin.extract({
                use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: CSS_MAPS,
                            importLoaders: 1,
                            minimize: true
                        }
                    },
                    {
                        loader: `postcss-loader`,
                        options: {
                            sourceMap: CSS_MAPS,
                            plugins: () => {
                                autoprefixer({
                                    browsers: ['last 2 versions']
                                });
                            }
                        }
                    },
                    // {
                    //     loader: 'less-loader',
                    //     options: {
                    //         sourceMap: CSS_MAPS
                    //     }
                    // }
                ]
            })
        }]
    },
    plugins: ([
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ])
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
        }, {
            test: /\.css$/,
            loader: 'ignore-loader'
        }]
    }
}];