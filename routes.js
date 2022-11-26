const express = require('express');
const route = express.Router();
const cadastroController = require('./src/controllers/cadastroController');
const loginController = require('./src/controllers/loginController');
const feedController = require('./src/controllers/feedController');
const perfilController = require('./src/controllers/perfilController');
const discussaoController = require('./src/controllers/discussaoController');
const novaDiscussaoController = require('./src/controllers/novaDiscussaoController');
const novaPesquisaController = require('./src/controllers/novaPesquisaController');
const novaReviewController = require('./src/controllers/novaReviewController');

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
        
// NOVA DISCUSSAO
    // GET
        route.get('/novaDiscussao', novaDiscussaoController.novaDiscussao)

// NOVA PESQUISA
    // GET
        route.get('/novaPesquisa', novaPesquisaController.novaPesquisa)
        
// NOVA REVIEW
    // GET
        route.get('/novaReview', novaReviewController.novaReview)

// 404
    route.use((req, res) => res.status(404).render('404.ejs'))

module.exports = route;