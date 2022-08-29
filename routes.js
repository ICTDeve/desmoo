const express = require('express');
const route = express.Router();
const cadastroController = require('./src/controllers/cadastroController');

// CADASTRO
    // GET
        route.get('/cadastro', cadastroController.cadastro);
    // POST
        route.post('/cadastro/confirmacaoEmail', cadastroController.confirmacaoEmail);
        route.post('/cadastro/tipoDeUsuario', cadastroController.tipoDeUsuario);
        route.post('/cadastro/solicitacao', cadastroController.solicitacao);
        route.post('/cadastro/solicitacaoEnviada', cadastroController.solicitacao);
 
// 404
    route.use((req, res) => res.status(404).render('404.ejs'))

module.exports = route;