require("./express-load")


exports.cadastro = (req, res) => {
    res.render('cadastro');
};

exports.confirmacaoEmail = (req, res) => {
    var dados = req.body;
    dados.email
    console.log(dados);
    res.render('cadastro_confirmacaoEmail',{dados:dados});
};

exports.confirmacaoLattes = (req, res) => {
    res.render('cadastro_confirmacaoLattes');
};

exports.tipoDeUsuario = (req, res) => {
    res.render('cadastro_tipoDeUsuario');
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