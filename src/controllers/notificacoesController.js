const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.notificacoes = (req, res) => {
    const conexao = app.src.models.conexao();
    const notificacoesModel = new app.src.models.notificacoes(conexao);

    let notificacoes = null

    notificacoesModel.consultarNotificacoes(1, function(erro, results) {
        if(erro){
            console.log(erro);
        } else {
            notificacoes = results
            console.log(notificacoes)

            res.render('notificacoes', {notificacoes});
        }
    })

};