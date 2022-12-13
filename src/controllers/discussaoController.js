const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.discussao = (req, res) => {
    const conexao = app.src.models.conexao();
    const discussao = new app.src.models.discussao(conexao);

    let publicacao = null
    
    const id = req.query.id.replace('/', '')
    
    discussao.consultarPublicacao(id, function(erro, results) {
        if(erro){
            console.log(erro);
        } else {
            publicacao = results[0]
            
            discussao.consultarComentariosDiscussao(id, function(erro, results) {
                let comentariosDiscussao = null
                
                if(erro){
                    console.log(erro);
                } else {
                    comentariosDiscussao = results
                    
                    discussao.consultarNumeroDeRespostas(id, function(erro, results) {
                        let numeroDeRespostas = null

                        if(erro){
                            console.log(erro);
                        } else {
                            numeroDeRespostas = results[0].numero_de_respostas
                            
                            res.render('discussao', {comentariosDiscussao, numeroDeRespostas, publicacao});
                        }
                    })
                }
            })
        }
    })
};

exports.novoComentario = (req, res) => {
    const conexao = app.src.models.conexao();
    const discussao = new app.src.models.discussao(conexao);

    const id = req.body.id
    const comentario = req.body.comentario

    const dados = { id, comentario }

    discussao.inserirComentario(dados, function(erro, results) {
        if(erro){
            console.log(erro);
        } else {
            res.redirect(`discussao?id=${id}`)
        }
    })
};