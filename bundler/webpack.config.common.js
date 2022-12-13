const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        bundle:             './frontend/js/bundle.js',
        cadastro:           ['./frontend/js/cadastro.js',           './frontend/scss/cadastro.scss'],
        feed:               ['./frontend/js/feed.js',               './frontend/scss/feed.scss'],
        perfil:             ['./frontend/js/perfil.js',             './frontend/scss/perfil.scss'],
        novaDiscussao:      ['./frontend/js/novaDiscussao.js',      './frontend/scss/novaDiscussao.scss'],
        novaPesquisa:       ['./frontend/js/novaPesquisa.js',       './frontend/scss/novaPesquisa.scss'],
        novaReview:         ['./frontend/js/novaReview.js',         './frontend/scss/novaReview.scss'],
        notificacoes:       ['./frontend/js/notificacoes.js',       './frontend/scss/notificacoes.scss'],
        salvos:             ['./frontend/js/salvos.js',             './frontend/scss/salvos.scss'],
        escolherTipoPost:   ['./frontend/js/escolherTipoPost.js',   './frontend/scss/escolherTipoPost.scss'],
        discussao:          ['./frontend/js/discussao.js',          './frontend/scss/discussao.scss'],
        pesquisa:           ['./frontend/js/pesquisa.js',           './frontend/scss/pesquisa.scss'],
        review:             ['./frontend/js/review.js',             './frontend/scss/review.scss'],
        solicitacoes:       ['./frontend/js/solicitacoes.js',       './frontend/scss/solicitacoes.scss'],
        explorar:           ['./frontend/js/explorar.js',           './frontend/scss/explorar.scss'],
        404:                ['./frontend/js/404.js',                './frontend/scss/404.scss'],
        login:              './frontend/js/login.js',
        app:                './frontend/js/app.js',
        popup:              './frontend/js/popup.js',
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
                    filename: 'midias/imagens/[name][ext]'
                }
            },

            {
                test: /\.(svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'midias/icones/[name][ext]'
                }
            },

            {
                test: /\.(mp4|mov|qt|avi|wmv|avchd|flv|swf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'midias/videos/[name][ext]'
                }
            },

            {
                test: /\.(woff|woff2|otf|ttf|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'midias/fontes/[name][ext]'
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({filename: 'css/[name].css'})
    ],
}   