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

cadastro.prototype.consultarIdUltimoUsuarioCadastrado = function(callback){
  this._conexao.query('SELECT id FROM usuarios ORDER BY id DESC LIMIT 1', callback);
}

cadastro.prototype.consultarNumeroDeNomesIguaisJaCadastrados = function(primeiro_nome, callback){
  this._conexao.query(`SELECT COUNT(nome_completo) AS quantidade_nomes FROM usuarios WHERE LOCATE(${primeiro_nome}, nome_completo)`, callback);
}

module.exports = function(){
  return cadastro;
}