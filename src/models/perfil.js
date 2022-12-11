function perfil(conexao){
this._conexao=conexao;
}

perfil.prototype.consultarComentarios = function(id, callback){
    this._conexao.query(`
        SELECT U.id as id_usuario, U.caminho_foto_perfil, U.nome_completo, C.conteudo as conteudo, P.id as id_publicacao FROM comentarios C
        INNER JOIN publicacoes P
        ON C.id_publicacao = P.id
        INNER JOIN usuarios U
        ON C.id_usuario = U.id AND P.id_autor = ${id};`, 
    callback);
}

perfil.prototype.consultarPublicacoes = function(id, callback){
    this._conexao.query(`
        SELECT U.id as id_usuario, U.caminho_foto_perfil, U.nome_completo, P.id as id_publicacao, P.caminho_imagem, P.categoria, P.titulo, P.descricao, P.status, P.tem_imagem, P.imagem_e_escura,
            (SELECT COUNT(id)
            FROM curtidas
            WHERE curtidas.id_publicacao = P.id) as numero_de_curtidas
        FROM publicacoes P
        INNER JOIN usuarios U
        ON U.id = ${id} AND U.id = P.id_autor;`,
    callback);
}

perfil.prototype.consultarUsuario = function(id, callback){
    this._conexao.query(`SELECT * FROM usuarios WHERE id = ${id}`, callback);
}

module.exports = function(){
    return perfil;
}