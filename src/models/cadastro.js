

function cadastro(conexao){
  this._conexao=conexao;
}

cadastro.prototype.cadastrar = function(dados, callback){
  this._conexao.query('INSERT INTO usuarios set ?', dados, callback);
}

cadastro.prototype.verificarSeJaHaCadastro = function(dados, callback){
  this._conexao.query(
    `SELECT  (
      SELECT COUNT(*)
      FROM usuarios
      WHERE cpf = '${dados.cpf}'
    ) AS cpf,
    (
      SELECT COUNT(*)
      FROM   usuarios
      WHERE email = '${dados.email}'
  ) AS email;`,
      dados, 
    callback
  )
}

module.exports = function(){
  return cadastro;
}