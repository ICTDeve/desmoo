function solicitacoes(conexao){
this._conexao=conexao;
}

solicitacoes.prototype.consultarSolicitacoes = function(callback){
    this._conexao.query(` 
        SELECT U.id as id_usuario, U.caminho_foto_perfil, U.nome_completo, U.id_lattes, S.data FROM solicitacoes S
        INNER JOIN usuarios U
        ON S.id_usuario = U.id;`,
    callback);
}

module.exports = function(){
    return solicitacoes;
}