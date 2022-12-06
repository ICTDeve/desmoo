const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.feed = (req, res) => {
    const conexao = app.src.models.conexao();
    const feed = new app.src.models.feed(conexao);

    let usuarios = null
    
    feed.consultarUsuarios(function(erro, results) {
        if(erro){
            console.log(erro);
        } else {
            usuarios = results[0]
            console.log(usuarios)
        }
    })

    console.log(usuarios)

    res.render('feed');
};