

function feed(conexao){
this._conexao=conexao;
}

feed.prototype.consultarUsuarios = function(callback){
    this._conexao.query('SELECT * FROM usuarios', callback);
}

module.exports = function(){
    return feed;
}



// SELECT id FROM usuarios ORDER BY id DESC LIMIT 1;