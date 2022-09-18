function login(conexao){
  this._conexao=conexao;
}

login.prototype.conferirCredenciais = function(dados, callback) {
  
  this._conexao.query(
    `SELECT  (
      SELECT COUNT(*)
      FROM usuarios
      WHERE email = '${dados.email}'
  ) AS email,
  (
      SELECT COUNT(*)
      FROM   usuarios
      WHERE senha = '${dados.senha}'
  ) AS senha;`,
    dados, 
    callback
  )
}

module.exports = function(){
  return login;
}