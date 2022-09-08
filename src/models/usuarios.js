function usuarios(conexao){
  this._conexao=conexao;
}

// usuarios.prototype.cadastrar = function(dados, callback){
//   this._conexao.query('INSERT INTO usuarios set ?', dados, callback);
// }

usuarios.prototype.cadastrar = function(dados, callback){
  this._conexao.query('INSERT INTO usuarios SET ?', dados, callback);
}

module.exports = function(){
  return usuarios;
}

{
  nome = 'a'

  {
    nome = 'b'

    console.log(this.nome)
  }
}