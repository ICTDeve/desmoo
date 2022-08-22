var mysql = require('mysql2');
function criarConexao(){
  return mysql.createConnection ({
    host:'127.0.0.1',
    user: 'root',
    password: '',
    database: 'desmoo',
    insecureAuth: 'true',
    multipleStatements: 'true'
  });
}

module.exports = function(){
  return criarConexao;
}
