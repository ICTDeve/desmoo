const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.solicitacoes = (req, res) => {
    const conexao = app.src.models.conexao();
    const solicitacoesModel = new app.src.models.solicitacoes(conexao);

    let solicitacoes = null

    solicitacoesModel.consultarSolicitacoes(function(erro, results) {
        if(erro){
            console.log(erro);
        } else {
            solicitacoes = results
            console.log(solicitacoes)

            res.render('solicitacoes', {solicitacoes});
        }
    })
};