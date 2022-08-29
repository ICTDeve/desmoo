require("./express-load")

exports.cadastro = (req, res) => {
    res.render('cadastro');
};

exports.confirmacaoEmail = (req, res) => {
    res.render('cadastro_confirmacaoEmail');
};

exports.tipoDeUsuario = (req, res) => {
    res.render('cadastro_tipoConta');
};

exports.solicitacao = (req, res) => {
    res.render('cadastro_solicitacaoUsuarioQualificado');
};

// exports.cadastrado = (req, res) => {
//     const dados = req.body;
//     const conexao = app.src.models.conexao();
//     const usuarios = new app.src.models.usuarios(conexao);

//     usuarios.cadastrar(dados,function(erro,sucesso){
//         if(erro){
//             console.log(erro);
//         }
//     });

//     res.render('cadastrado.ejs', {'info':dados});
// };