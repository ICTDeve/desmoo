const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './frontend/js/main.js',
        about: './frontend/js/about.js',
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
                test: /\.html$/,
                use: "html-loader"
            },

            {
                test: /\.(jpe?g|png|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'medias/images/[name][ext]'
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
                test: /\.(woff|woff2|otf|ttf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'medias/fonts/aeonik/[name][ext]'
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({filename: 'css/[name].css'}),

        // new HtmlWebpackPlugin({
        //     template: './frontend/html/index.html', 
        //     filename: "index.html",
        //     chunks: ['main'],
        // }),

        // new HtmlWebpackPlugin({
        //     template: './frontend/html/about.html', 
        //     filename: "about.html",
        //     chunks: ['about'],
        // }),
    ],
}