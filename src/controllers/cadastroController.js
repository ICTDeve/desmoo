// require("./express-load")
const express = require('express');
const app = express();
const load = require('express-load');
load('src/models').into(app)

// let dados;

class Usuario {
    constructor(idPersonalizavel, idLattes, nomeCompleto, email, cpf, senha, dataCadastro, categoria, seguidores, seguindo, pontos, advertencias) {
        this.idPersonalizavel = idPersonalizavel
        this.idLattes = idLattes
        this.nomeCompleto = nomeCompleto
        this.email = email
        this.cpf = cpf
        this.senha = senha
        this.dataCadastro = dataCadastro
        this.categoria = categoria
        this.seguidores = seguidores
        this.seguindo = seguindo
        this.pontos = pontos
        this.advertencias = advertencias
    }
}

const usuario = new Usuario();

exports.cadastro = (req, res) => {
    res.render('cadastro');
};

exports.confirmacaoEmail = (req, res) => {
    usuario.nomeCompleto = req.body.nome_completo
    usuario.email = req.body.email
    usuario.cpf = req.body.cpf
    usuario.senha = req.body.senha

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
    usuario.idLattes = req.body.id_lattes

    const date = new Date()

    const currentYear = date.getFullYear();
    const today = date.getDate();
    const currentMonth = date.getMonth() + 1; 

    usuario.dataCadastro = `${today}/${currentMonth}/${currentYear}`

    console.log(usuario)

    // const conexao = app.src.models.conexao();
    // const usuarios = new app.src.models.usuarios(conexao);

    // usuarios.cadastrar(dados,function(erro, sucesso){
    //     if(erro){
    //         console.log(erro);
    //     }
    // });

    // res.render('cadastrar', {dados});
};