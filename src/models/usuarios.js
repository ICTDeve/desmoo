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

usuarios.prototype.cadastrar = function(dados, callback){
  this._conexao.query(
    'SELECT COUNT(cpf) AS numeroDeRegistros FROM usuarios',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
    });
}

module.exports = function(){
  return usuarios;
}