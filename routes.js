const express = require('express');
const route = express.Router();
const cadastroController = require('./src/controllers/cadastroController');
const loginController = require('./src/controllers/loginController');

// CADASTRO
    // GET
        route.get('/cadastro', cadastroController.dadosEssenciais);
    // POST
        route.post('/cadastro', cadastroController.confirmacaoEmail, 
                                cadastroController.confirmacaoLattes, 
                                cadastroController.selecaoCategoria, 
                                cadastroController.cadastrar);

// LOGIN
    // GET
        route.get('/login', loginController.login);
    // POST
        route.post('/login', loginController.logar);

// 404
    route.use((req, res) => res.status(404).render('404.ejs'))

module.exports = route;