function explorar(conexao){
this._conexao=conexao;
}

explorar.prototype.consultarComentarios = function(callback){
    this._conexao.query(`
        SELECT U.id as id_usuario, U.caminho_foto_perfil, U.nome_completo, C.conteudo as conteudo, P.id as id_publicacao FROM comentarios C
        INNER JOIN publicacoes P
        ON C.id_publicacao = P.id
        INNER JOIN usuarios U
        ON C.id_usuario = U.id;`, 
    callback);
}

explorar.prototype.consultarPublicacoes = function(callback){
    this._conexao.query(`
        SELECT U.id as id_usuario, U.caminho_foto_perfil, U.nome_completo, P.id as id_publicacao, P.caminho_imagem, P.categoria, P.titulo, P.descricao, P.status, P.pontos, P.tem_imagem, P.imagem_e_escura,
            (SELECT COUNT(id)
            FROM curtidas
            WHERE curtidas.id_publicacao = P.id) as numero_de_curtidas
        FROM publicacoes P
        INNER JOIN usuarios U
        ON P.id_autor = U.id`,
    callback);
}

explorar.prototype.consultarUsuarios = function(callback){
    this._conexao.query('SELECT * FROM usuarios', callback);
}

module.exports = function(){
    return explorar;
}



// SELECT id FROM usuarios ORDER BY id DESC LIMIT 1;