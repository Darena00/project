const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: [
        './js/main.js',
    ],
    target: 'web',
    context: path.resolve(__dirname, 'assets'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'images', to: 'images' },
            ],
        }),
    ],
};
