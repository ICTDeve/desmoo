const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.cadastro = (req, res) => {
    res.render('cadastro.ejs');
};

exports.cadastrado = (req, res) => {
    const dados = req.body;
    const conexao = app.src.models.conexao();
    const usuarios = new app.src.models.usuarios(conexao);

    usuarios.cadastrar(dados,function(erro,sucesso){
        if(erro){
            console.log(erro);
        }
    });

    res.render('cadastrado.ejs', {'info':dados});
};