

function usuarios(conexao){
  this._conexao=conexao;
}

usuarios.prototype.cadastrar = function(dados, callback){
  this._conexao.query('INSERT INTO usuarios set ?', dados, callback);
}

// usuarios.prototype.cadastrar = function(dados, callback){
//   this._conexao.query(
//     'SELECT * FROM usuarios',
//     function(err, results, fields) {
//       console.log(results[0].id); // results contains rows returned by server
//     });
// }

usuarios.prototype.cpf = function(dados, callback){
  let resultado;
  this._conexao.query(
    // `SELECT COUNT(cpf) AS numeroDeRegistros FROM usuarios WHERE cpf = ${dados.cpf}`,
    `SELECT COUNT(cpf) AS numeroDeRegistros FROM usuarios WHERE cpf = '43513604882'`, dados, callback
  )

    
}

module.exports = function(){
  return usuarios;
}