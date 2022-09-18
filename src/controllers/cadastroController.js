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
    console.log(req.body)
    
    etapaCadastro = 'dadosEssenciais'

    res.render('cadastro_dadosEssenciais');
};

exports.confirmacaoEmail = (req, res, next) => {
    console.log(req.body)

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

                let cpfJaCadastrado = results[0]['cpf'] == 1
                let emailJaCadastrado = results[0]['email'] == 1

                console.log(cpfJaCadastrado, emailJaCadastrado)

                if(cpfJaCadastrado && emailJaCadastrado) {
                    console.log('nop')

                    etapaCadastro = 'dadosEssenciais'

                    res.render('cadastro_dadosEssenciais', { cpfJaCadastrado, emailJaCadastrado });
                } else {
                    usuario.nome_completo = req.body.nome_completo
                    usuario.senha = req.body.senha

                    console.log('yep')

                    function gerarNovoDigito() {
                        const max = 9
                        const min = 1
            
                        return Math.floor(Math.random() * (max - min + 1) + min)
                    }
                    
                    function gerarCodigo() {
                        const codigo = []
                    
                            for (let contador = 0; contador != 6; contador++) {
                                const digito = gerarNovoDigito()
                                codigo.push(digito)
                            }
                    
                        return codigo.join('')
            
                        // IDEIA: ENCRIPTAR E JOGAR NO REQ.BODY
                    }
                    
                    const codigo = gerarCodigo()
            
                    // const enviarEmail = require('../nodemailer.config')
                    // enviarEmail(codigo).catch(console.error);

                    res.render('cadastro_confirmacaoEmail', {codigo})
                }
            }
        })
    } else {
        next()
    }
};

exports.selecaoCategoria = (req, res, next) => {
    console.log(req.body)

    if (etapaCadastro == 'confirmacaoEmail') {
        etapaCadastro = 'selecaoCategoria'
        res.render('cadastro_selecaoCategoria');
    } else {
        next()
    }
};

exports.confirmacaoLattes = (req, res, next) => {
    console.log(req.body)

    if (etapaCadastro == 'selecaoCategoria') {
        etapaCadastro = 'confirmacaoLattes'

        usuario.categoria = req.body.categoria

        if (req.body.categoria == 'entusiasta') {
            next()
        } else {
            res.render('cadastro_confirmacaoLattes');
        }

    } else {
        next()
    }
};

exports.cadastrar = (req, res) => {
    console.log(req.body)

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

    res.render('cadastro_cadastrar', {usuario});
};