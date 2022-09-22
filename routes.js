const express = require('express');
const route = express.Router();
const cadastroController = require('./src/controllers/cadastroController');
const loginController = require('./src/controllers/loginController');
const feedController = require('./src/controllers/feedController');

// CADASTRO
    // GET
        route.get('/cadastro', cadastroController.dadosEssenciais);
    // POST
        route.post('/cadastro', cadastroController.validacaoDadosEssenciais,
                                cadastroController.gerarCodigo, 
                                cadastroController.confirmacaoEmail, 
                                cadastroController.validacaoCodigo, 
                                cadastroController.confirmacaoLattes, 
                                cadastroController.selecaoCategoria, 
                                cadastroController.cadastrar);
// LOGIN
    // GET
        route.get('/login', loginController.login);
    // POST
        route.post('/login', loginController.logar);

// FEED
    // GET
        route.get('/feed', feedController.feed)

// 404
    route.use((req, res) => res.status(404).render('404.ejs'))

module.exports = route;