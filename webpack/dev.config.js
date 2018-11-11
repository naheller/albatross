// const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: '../client/index',
    output: {
        path: __dirname + '../public',
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        contentBase: '../public/',
        hot: true
    }
};