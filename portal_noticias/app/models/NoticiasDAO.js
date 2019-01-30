function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc', callback)
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback);
    //o modulo de conexão suporta parametro de json, o mysql suporta insert com set, no entanto, o json deve possuir os rotulos com os mesmos
    //nomes que as colunas da tabela
}

NoticiasDAO.prototype.get5UltimasNoticias = function (callback) {
  this._connection.query('select * from noticias order by data_noticia desc limit 5', callback);
}

module.exports = function () {
    return NoticiasDAO;
}
