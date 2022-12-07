function perfil(conexao){
this._conexao=conexao;
}

perfil.prototype.consultarUsuario = function(id, callback){
    this._conexao.query(`SELECT * FROM usuarios WHERE id = ${id}`, callback);
}

module.exports = function(){
    return perfil;
}