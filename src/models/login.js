

function login(conexao){
  this._conexao=conexao;
}

login.prototype.cadastrar = function(dados, callback){
  this._conexao.query('INSERT INTO usuarios set ?', dados, callback);
}

// usuarios.prototype.cadastrar = function(dados, callback){
//   this._conexao.query(
//     'SELECT * FROM usuarios',
//     function(err, results, fields) {
//       console.log(results[0].id); // results contains rows returned by server
//     });
// }

login.prototype.verificarSeHaCadastro = function(dados, callback) {
  
  this._conexao.query(
    `SELECT COUNT(*) AS numeroDeRegistros FROM usuarios WHERE cpf = '${dados.cpf}' or email = '${dados.email}'`, 
    dados, 
    callback
  )
}

module.exports = function(){
  return login;
}