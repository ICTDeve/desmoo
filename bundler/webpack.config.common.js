const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        about: './frontend/js/about.js',
        feed: './frontend/js/feed.js',
        bundle: './frontend/js/bundle.js',
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../public')
    },

    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "postcss-loader",
                    "sass-loader",
                ]
            },

            {
                test: /\.(jpe?g|png|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'medias/imagens/[name][ext]'
                }
            },

            {
                test: /\.(svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'medias/icones/[name][ext]'
                }
            },

            {
                test: /\.(mp4|mov|qt|avi|wmv|avchd|flv|swf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'medias/videos/[name][ext]'
                }
            },

            {
                test: /\.(woff|woff2|otf|ttf|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'medias/fontes/[name][ext]'
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({filename: 'css/[name].css'})
    ],
}