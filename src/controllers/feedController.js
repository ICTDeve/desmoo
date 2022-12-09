const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.feed = (req, res) => {
    const conexao = app.src.models.conexao();
    const feed = new app.src.models.feed(conexao);

    let comentarios = null
    let publicacoes = null
    let usuarios = null
    
    feed.consultarUsuarios(function(erro, results) {
        if(erro){
            console.log(erro);
        } else {
            usuarios = results
            console.log('oi')

            feed.consultarPublicacoes(function(erro, results) {
                if(erro){
                    console.log(erro);
                } else {
                    publicacoes = results
        
                    feed.consultarComentarios(function(erro, results) {
                        if(erro){
                            console.log(erro);
                        } else {
                            comentarios = results
                            console.log(publicacoes)
                            res.render('feed', {comentarios, publicacoes, usuarios});
                        }
                    })
                }
            })
        }
    })
};