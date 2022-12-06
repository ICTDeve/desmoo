

function feed(conexao){
this._conexao=conexao;
}

feed.prototype.consultarUsuarios = function(callback){
    this._conexao.query('SELECT * FROM usuarios', callback);
}

module.exports = function(){
    return feed;
}