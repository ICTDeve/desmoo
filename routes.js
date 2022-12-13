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
const notificacoesController = require('./src/controllers/notificacoesController');
const salvosController = require('./src/controllers/salvosController');
const reviewController = require('./src/controllers/reviewController');
const pesquisaController = require('./src/controllers/pesquisaController');
const escolherTipoPostController = require('./src/controllers/escolherTipoPostController');
const solicitacoesController = require('./src/controllers/solicitacoesController');
const respostaSolicitacaoController = require('./src/controllers/respostaSolicitacaoController');
const explorarController = require('./src/controllers/explorarController');

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

    // POST
        route.post('/novoComentario', discussaoController.novoComentario)
        
// NOVA DISCUSSAO
    // GET
        route.get('/novaDiscussao', novaDiscussaoController.novaDiscussao)

// NOVA PESQUISA
    // GET
        route.get('/novaPesquisa', novaPesquisaController.novaPesquisa)
        
// NOVA REVIEW
    // GET
        route.get('/novaReview', novaReviewController.novaReview)

// NOTIFICAÇÕES
    // GET
        route.get('/notificacoes', notificacoesController.notificacoes)

// SALVOS
    // GET
        route.get('/salvos', salvosController.salvos)

// REVIEW
    // GET
        route.get('/review', reviewController.review)

// PESQUISA
    // GET
        route.get('/pesquisa', pesquisaController.pesquisa)

// ESCOLHER TIPO PESQUISA
    // GET
        route.get('/escolherTipoPost', escolherTipoPostController.escolherTipoPost)

// ESCOLHER TIPO PESQUISA
    // GET
        route.get('/solicitacoes', solicitacoesController.solicitacoes)
        
// ESCOLHER TIPO PESQUISA
    // POST
        route.post('/respostaSolicitacao', respostaSolicitacaoController.respostaSolicitacao)

// ESCOLHER TIPO EXPLORAR
    // GET
        route.get('/explorar', explorarController.explorar)

// ESCOLHER TIPO EXPLORAR
    // GET
        route.get('/DESMOO-PPRIV-R1.pdf', (req, res) => {
            const path = require('path');
            res.sendFile(path.join(__dirname, 'DESMOO-PPRIV-R1.pdf'))
        })

// 404
    route.use((req, res) => res.status(404).render('404.ejs'))

module.exports = route;