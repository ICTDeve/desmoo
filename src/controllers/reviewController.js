const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.review = (req, res) => {
    const conexao = app.src.models.conexao();
    const review = new app.src.models.review(conexao);

    let publicacao = null

    const id = req.query.id.replace('/', '')

    review.consultarPublicacao(id, function(erro, results) {
        if(erro){
            console.log(erro);
        } else {
            publicacao = results[0]
            console.log(publicacao)

            res.render('review', {publicacao});
        }
    })
};