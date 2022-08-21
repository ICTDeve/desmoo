const commonConfig = require('./webpack.config.common')
const { merge } = require('webpack-merge')

const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerWebpackPlugin = require('html-minimizer-webpack-plugin')
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: "development",

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },

                extractComments: false,
            }),

            new CssMinimizerWebpackPlugin({
                minimizerOptions: {
                    preset: [
                        "default",
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),

            new HtmlMinimizerWebpackPlugin(),

            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.squooshMinify,
                    options: {
                        encodeOptions: {
                            mozjpeg: {
                                quality: 70,
                            },
                        },
                    },
                },
            }),
        ]
    }
})