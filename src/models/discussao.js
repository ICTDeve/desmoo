function discussao(conexao){
    this._conexao=conexao;
}

discussao.prototype.consultarPublicacao = function(id, callback){
    this._conexao.query(`
        SELECT U.nome_completo as nome_autor, P.id, P.data, P.titulo, P.descricao, P.caminho_imagem, P.conteudo FROM publicacoes P
        INNER JOIN usuarios U
        ON P.id_autor = U.id AND P.id = ${id};`,
    callback);
}

discussao.prototype.consultarComentariosDiscussao = function(id, callback){
    this._conexao.query(`
        SELECT P.id as id_publicacao, U.id as id_usuario, U.caminho_foto_perfil, U.nome_completo, CS.conteudo FROM comentarios_discussao CS
        INNER JOIN publicacoes P
        ON CS.id_publicacao = P.id AND P.id = ${id}
        INNER JOIN usuarios U
        ON CS.id_usuario = U.id;`,
    callback);
}

discussao.prototype.consultarNumeroDeRespostas = function(id, callback){
    this._conexao.query(`
        SELECT COUNT(*) as numero_de_respostas 
        FROM comentarios_discussao 
        WHERE id_publicacao = ${id}`,
    callback);
}

discussao.prototype.inserirComentario = function(dados, callback){
    this._conexao.query(`
        INSERT INTO comentarios_discussao (id_publicacao, id_usuario, conteudo) 
        VALUES 	(${dados.id}, 2, "${dados.comentario}")`,
    callback);
}

module.exports = function(){
    return discussao;
}