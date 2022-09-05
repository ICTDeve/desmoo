require("./express-load")

let dados;
exports.cadastro = (req, res) => {
    res.render('cadastro');
};

exports.confirmacaoEmail = (req, res) => {
    dados = req.body
    res.render('cadastro_confirmacaoEmail');
};

exports.tipoDeUsuario = (req, res) => {
    res.render('cadastro_tipoDeUsuario');
};

exports.confirmacaoLattes = (req, res) => {
    dados.categoria = req.body.categoria
    console.log(dados)
    res.render('cadastro_confirmacaoLattes');
};

exports.cadastrar = (req, res) => {
    dados.id_lattes = req.body.id_lattes

    const date = new Date()

    const currentYear = date.getFullYear();
    const today = date.getDate();
    const currentMonth = date.getMonth() + 1; 

    dados.data_cadastro = `${today}/${currentMonth}/${currentYear}`

    console.log(dados)

    // const dados = req.body;
    // const conexao = app.src.models.conexao();
    // const usuarios = new app.src.models.usuarios(coenxao);

    // usuarios.cadastrar(dados,function(erro,sucesso){
    //     if(erro){
    //         console.log(erro);
    //     }
    // });

    res.render('cadastrar', {'info':dados});
};