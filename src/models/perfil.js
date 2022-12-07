function perfil(conexao){
this._conexao=conexao;
}

perfil.prototype.consultarUsuario = function(id, callback){
    this._conexao.query(`SELECT * FROM usuarios WHERE id = ${id}`, callback);
}

perfil.prototype.consultarPublicacoes = function(id, callback){
    this._conexao.query(`
        SELECT *
        FROM publicacoes P
        INNER JOIN usuarios U
        ON P.id_autor = ${1} AND U.id = ${1}`, 
    callback);
}
module.exports = function(){
    return perfil;
}