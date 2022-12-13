const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.explorar = (req, res) => {
    const conexao = app.src.models.conexao();
    const explorar = new app.src.models.explorar(conexao);

    let comentarios = null
    let publicacoes = null
    let usuarios = null

    explorar.consultarUsuarios(function(erro, results) {
        if(erro){
            console.log(erro);
        } else {
            usuarios = results
            console.log('oi')

            explorar.consultarPublicacoes(function(erro, results) {
                if(erro){
                    console.log(erro);
                } else {
                    publicacoes = results
        
                    explorar.consultarComentarios(function(erro, results) {
                        if(erro){
                            console.log(erro);
                        } else {
                            comentarios = results
                            console.log(publicacoes)
                            res.render('explorar', {comentarios, publicacoes, usuarios});
                        }
                    })
                }
            })
        }
    })
};