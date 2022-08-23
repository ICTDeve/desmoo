const express = require('express');
const route = express.Router();
const cadastroController = require('./src/controllers/cadastroController');

// feed routes
route.get('/cadastro', cadastroController.cadastro);
route.post('/cadastrado', cadastroController.cadastrado);

// 404 route
route.use((req, res) => res.status(404).render('404.ejs'))

module.exports = route;