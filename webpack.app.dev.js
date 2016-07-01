var path = require('path');
var webpack = require('webpack');
var nodeDir = path.resolve(__dirname, 'node_modules');

var config = {
    devtool: 'source-map',
    entry: {
        theloveshow: path.resolve(__dirname, 'build/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets/javascripts'),
        filename: '[name].js',
        publicPath: '/assets/javascripts/'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(jpg|png)$/i,
                loader: 'file?name=[sha512:hash:base64:7].[ext]'
            }
        ],
        preLoaders: [
            {
                test: /\.js?/,
                exclude: [nodeDir],
                loader: 'source-map-loader'
            }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        modulesDirectories: ['web_modules', 'node_modules', 'jsx']
    }
};

module.exports = config;