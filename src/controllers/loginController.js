const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.login = (req, res) => {
    res.render('login');
};

exports.logar = (req, res) => {
    console.log(req.body)

    const conexao = app.src.models.conexao();
    const cadastro = new app.src.models.login(conexao);

    cadastro.cadastrar({}, function(erro, results){
        if(erro){
            console.log(erro);
        }
    });
    res.render('login');
};