function notificacoes(conexao){
    this._conexao=conexao;
    }
    notificacoes.prototype.consultarNotificacoes = function(idDestinatario, callback) {
        this._conexao.query(`
            SELECT U.caminho_foto_perfil, U.nome_completo as nome_destinatario, U.nome_completo as nome_remetente, N.categoria FROM notificacoes N
            INNER JOIN usuarios U
            ON N.id_remetente = U.id;`,
        callback);
    }
    
    module.exports = function(){
        return notificacoes;
    }