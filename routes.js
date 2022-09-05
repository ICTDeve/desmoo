const express = require('express');
const route = express.Router();
const cadastroController = require('./src/controllers/cadastroController');

// CADASTRO
    // GET
        route.get('/cadastro', cadastroController.cadastro);
    // POST
        route.post('/cadastro/confirmacao-email', cadastroController.confirmacaoEmail);
        route.post('/cadastro/confirmacao-lattes', cadastroController.confirmacaoLattes);
        route.post('/cadastro/tipo-de-usuario', cadastroController.tipoDeUsuario);
        route.post('/cadastrar', cadastroController.cadastrar);
 
// 404
    route.use((req, res) => res.status(404).render('404.ejs'))

module.exports = route;