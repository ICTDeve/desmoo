// require("./express-load")
const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

class Usuario {
    constructor(nome_completo, email, cpf, senha, categoria, id_lattes, data_cadastro) {
        this.nome_completo = nome_completo
        this.email = email
        this.cpf = cpf
        this.senha = senha
        this.categoria = categoria
        this.id_lattes = id_lattes | null
        this.data_cadastro = data_cadastro

        this.seguidores = 0
        this.seguindo = 0
        this.pontos = 0
        this.advertencias = 0

        this.id_personalizavel = null
    }
}

const usuario = new Usuario();

let etapaCadastro;

exports.dadosEssenciais = (req, res) => {
    etapaCadastro = 'dadosEssenciais'

    res.render('cadastro_dadosEssenciais');
};

exports.confirmacaoEmail = (req, res, next) => {
    if(etapaCadastro == 'dadosEssenciais') {
        etapaCadastro = 'confirmacaoEmail'

        usuario.cpf = req.body.cpf
        usuario.email = req.body.email

        const conexao = app.src.models.conexao();
        const cadastro = new app.src.models.cadastro(conexao);

        cadastro.verificarSeJaHaCadastro(usuario, function(erro, results) {
            if(erro){
                console.log(erro);
            } else {
                console.log(results)

                let jaExisteRegistro = results[0]['numeroDeRegistros']

                if(jaExisteRegistro) {
                    const erros = "Usuário já cadastrado";
                    res.render('cadastro_dadosEssenciais', {erros});
                } else {
                    usuario.nome_completo = req.body.nome_completo
                    usuario.senha = req.body.senha

                    res.render('cadastro_confirmacaoEmail');
                }
            }
        })
    } else {
        next()
    }
};

exports.selecaoCategoria = (req, res, next) => {
    if (etapaCadastro == 'confirmacaoEmail') {
        etapaCadastro = 'selecaoCategoria'
        res.render('cadastro_selecaoCategoria');
    } else {
        next()
    }
};

exports.confirmacaoLattes = (req, res, next) => {
    if (etapaCadastro == 'selecaoCategoria') {
        etapaCadastro = 'confirmacaoLattes'

        usuario.categoria = req.body.categoria

        res.render('cadastro_confirmacaoLattes');
    } else {
        next()
    }
};

exports.cadastrar = (req, res) => {
    usuario.id_lattes = req.body.id_lattes

    const date = new Date()

    const currentYear = date.getFullYear();
    const today = date.getDate();
    const currentMonth = date.getMonth() + 1; 

    usuario.data_cadastro = `${today}/${currentMonth}/${currentYear}`

    console.log(usuario)

    const conexao = app.src.models.conexao();
    const cadastro = new app.src.models.cadastro(conexao);

    cadastro.cadastrar(usuario, function(erro, results){
        if(erro){
            console.log(erro);
        }
    });

    res.render('cadastro__cadastrar', {usuario});
};