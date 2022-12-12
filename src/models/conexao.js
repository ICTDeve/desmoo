var mysql = require('mysql2');
function criarConexao(){
  return mysql.createConnection ({
    host:'127.0.0.1',
    user: 'root',
    // password: '12345678',
    password: 'Esquilo79512357#',
    // password: 'esquilo29',
    // password: '',
    database: 'desmoo',
    insecureAuth: 'true',
    multipleStatements: 'true'
  });
}

module.exports = function() {
  return criarConexao;
}