function respostaSolicitacao(conexao){
    this._conexao=conexao;
    }
    
respostaSolicitacao.prototype.removerSolicitando = function(id, callback){
    this._conexao.query(` 
        DELETE FROM solicitacoes WHERE id_usuario = ${id}`,
    callback);
}

respostaSolicitacao.prototype.alterarCategoria = function(usuario, callback){
    this._conexao.query(` 
        UPDATE usuarios
        SET categoria = '${usuario.categoria}'
        WHERE id = ${usuario.id};`,
    callback);
}

module.exports = function(){
    return respostaSolicitacao;
}