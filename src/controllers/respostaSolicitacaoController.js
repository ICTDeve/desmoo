const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.respostaSolicitacao = (req, res) => {
    const conexao = app.src.models.conexao();
    const respostaSolicitacaoModel = new app.src.models.respostaSolicitacao(conexao);

    const id = req.query.id.replace('/', '')
    
    let respostaSolicitacao = null

    const categoria = (req.body.situacao == "aceito") ? "qualificado" : "entusiasta"

    console.log('opa')

    respostaSolicitacaoModel.removerSolicitando(id, function(erro, results) {
        if(erro){
            console.log(erro);
        } else {
            const usuario = { id, categoria }

            respostaSolicitacaoModel.alterarCategoria(usuario, function(erro, results) {
                if(erro){
                    console.log(erro);
                } else {
        
        
                    res.redirect('/solicitacoes');
                }
            })
        }
    })
};