// require("./express-load")
const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

// let dados;

class Usuario {
    constructor(idLattes, nomeCompleto, email, cpf, senha, dataCadastro, categoria) {
        this.nome_completo = nomeCompleto
        this.email = email
        this.cpf = cpf
        this.senha = senha
        this.categoria = categoria
        this.id_lattes = idLattes | null
        this.data_cadastro = dataCadastro

        this.seguidores = 0
        this.seguindo = 0
        this.pontos = 0
        this.advertencias = 0

        this.id_personalizavel = null
    }
}

const usuario = new Usuario();

exports.cadastro = (req, res) => {
    res.render('cadastro');
};

exports.confirmacaoEmail = (req, res) => {
    usuario.nome_completo = req.body.nome_completo
    usuario.email = req.body.email
    usuario.cpf = req.body.cpf
    usuario.senha = req.body.senha

    console.log(usuario)

    res.render('cadastro_confirmacaoEmail');
};

exports.tipoDeUsuario = (req, res) => {
    res.render('cadastro_tipoDeUsuario');
};

exports.confirmacaoLattes = (req, res) => {
    usuario.categoria = req.body.categoria
    
    res.render('cadastro_confirmacaoLattes');
};

exports.cadastrar = (req, res) => {
    usuario.id_lattes = req.body.id_lattes

    const date = new Date()

    const currentYear = date.getFullYear();
    const today = date.getDate();
    const currentMonth = date.getMonth() + 1; 

    usuario.data_cadastro = `${today}/${currentMonth}/${currentYear}`

    console.log(usuario)

    const dadosUsuarios = {...usuario}

    const conexao = app.src.models.conexao();
    const usuarios = new app.src.models.usuarios(conexao);

    usuarios.cadastrar(dadosUsuarios, function(erro, sucesso){
        if(erro){
            console.log(erro);
        }
    });

    res.render('cadastrar', {dadosUsuarios});
};