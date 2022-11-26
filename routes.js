const express = require('express');
const route = express.Router();
const cadastroController = require('./src/controllers/cadastroController');
const loginController = require('./src/controllers/loginController');
const feedController = require('./src/controllers/feedController');
const perfilController = require('./src/controllers/perfilController');
const discussaoController = require('./src/controllers/discussaoController');

// CADASTRO
    // GET
        route.get('/cadastro', cadastroController.dadosEssenciais);
    // POST
        route.post('/cadastro', cadastroController.validacaoDadosEssenciais,
                                cadastroController.gerarCodigo, 
                                cadastroController.confirmacaoEmail, 
                                cadastroController.validacaoCodigo, 
                                cadastroController.selecaoCategoria, 
                                cadastroController.confirmacaoLattes, 
                                cadastroController.cadastrar);
// LOGIN
    // GET
        route.get('/login', loginController.login);
    // POST
        route.post('/login', loginController.logar);

// FEED
    // GET
        route.get('/feed', feedController.feed)

// PERFIL
    // GET
        route.get('/perfil', perfilController.perfil)

// DISCUSSAO
    // GET
        route.get('/discussao', discussaoController.discussao)

// 404
    route.use((req, res) => res.status(404).render('404.ejs'))

module.exports = route;