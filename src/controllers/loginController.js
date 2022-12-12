const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

const erro = {}

exports.login = (req, res) => {
    const erro = {}
    res.render('login', { erro });
};

exports.logar = (req, res) => {
    const credenciais = {
        email: req.body.email,
        senha: req.body.senha
    }

    const conexao = app.src.models.conexao();
    const login = new app.src.models.login(conexao);

    login.conferirCredenciais(credenciais, function(error, results){
        if(error){
            console.log(error);
        } else {
            const usuarioPossuiCadastro = (results[0].numero_de_registros == 1) ? true : false

            if (usuarioPossuiCadastro) {
                res.redirect('/feed')
            } else {
                erro.mensagem = "Login inválido!"
                res.render('login', { erro })
            }
        }
    });
};