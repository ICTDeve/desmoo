const express = require('express');
const route = express.Router();
const cadastroController = require('./src/controllers/cadastroController');

// Rotas feed
route.get('/cadastro', cadastroController.cadastro);
route.post('/cadastrado', cadastroController.cadastrado);

module.exports = route;