const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

exports.login = (req, res) => {
    res.render('login');
};

exports.logar = (req, res) => {
    const credenciais = {
        email: req.body.email,
        senha: req.body.senha
    }

    const conexao = app.src.models.conexao();
    const login = new app.src.models.login(conexao);

    login.conferirCredenciais(credenciais, function(erro, results){
        if(erro){
            console.log(erro);
        } else {
            console.log(results)

            let temEmail = results[0]['email'] == 1
            let temSenha = results[0]['senha'] == 1

            if(temEmail && temSenha) {
                console.log('yep')

                res.redirect('/feed');
            } else {            
                console.log('nop')

                res.render('login', { temEmail, temSenha });
            }
        }
    });
};