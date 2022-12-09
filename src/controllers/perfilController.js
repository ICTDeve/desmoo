const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.perfil = (req, res) => {
    const conexao = app.src.models.conexao();
    const perfil = new app.src.models.perfil(conexao);

    let comentarios = null
    let publicacoes = null
    let usuario = null

    const id = req.query.id.replace('/', '')
    
    perfil.consultarUsuario(id, function(erro, results) {
        if(erro){
            console.log(erro);
        } else {
            usuario = results[0]
            
            perfil.consultarPublicacoes(id, function(erro, results) {
                if(erro){
                    console.log(erro);
                } else {
                    publicacoes = results

                    perfil.consultarComentarios(id, function(erro, results) {
                        if(erro){
                            console.log(erro);
                        } else {
                            comentarios = results
                            console.log(comentarios)
        
                            res.render('perfil', {comentarios, publicacoes, usuario});
                        }
                    })
                }
            })
        }
    })
};