function review(conexao){
    this._conexao=conexao;
}

review.prototype.consultarPublicacao = function(id, callback){
    this._conexao.query(`
        SELECT U.nome_completo as nome_autor, P.data, P.titulo, P.descricao, P.caminho_imagem, P.conteudo FROM publicacoes P
        INNER JOIN usuarios U
        ON P.id_autor = U.id AND P.id = ${id};`,
    callback);
}

module.exports = function(){
    return review;
}