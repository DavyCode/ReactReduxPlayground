var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    output: {
        path: 'public',
        filename: 'js/bundle.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        contentBase: './src',
        port: 3000,
        stats: 'minimal'
    }
};
