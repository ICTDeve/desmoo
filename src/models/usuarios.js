function usuarios(conexao){
  this._conexao=conexao;
}

usuarios.prototype.cadastrar = function(dados, callback){
  this._conexao.query('INSERT INTO usuarios set ?', dados, callback);
}

module.exports = function(){
  return usuarios;
}