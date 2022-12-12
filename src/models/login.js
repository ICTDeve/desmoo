function login(conexao){
  this._conexao=conexao;
}

login.prototype.conferirCredenciais = function(credenciais, callback) {
  
  this._conexao.query(`
    SELECT COUNT(*) as numero_de_registros FROM usuarios WHERE email = '${credenciais.email}' AND senha = '${credenciais.senha}'`,
    callback
  )
}

module.exports = function(){
  return login;
}