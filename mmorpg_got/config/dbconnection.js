/* importar o mongodb */

var mongo = require('mongodb');

var connMongoDB = function () {
  console.log('Entrou na função de conexão');

  var db = new mongo.Db(
    'got', //nome do banco
    new mongo.Server(
      'localhost', //string contendo o endereço do servidor
      27017, //porta de conexão
      {} //configurações do servido
    ),
    {} //configurações adicionais do banco
  );
  return db;
}
module.exports = function () {
  return connMongoDB;
}
