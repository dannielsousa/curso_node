var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

//bodyparser funciona como midleware, ou seja, atua nos objetos de requisição e resposta; o bodyparser é importante para recuperar as informações transitadas via post

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(express.static('./app/public'));

/*
    Para fazer um apontamento, deve levar em consideração onde é chamado o required.
    No caso, como este esta sendo chamado no app.js, deve-se levar em conta que a chamada da pasta esta sendo a partir de onde há o required, ou seja apartir do app.js
    Sendo assim: ./app/views
*/
//consign gerencia as rotas
//executa o consign, depois inclui o routes, e por fim, fazer com que a instancia do consign seja passado como paramentro para dentro da instancia do servidor .into(app);
consign()
    .include('./app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);
//lembrando que o server exporta uma função, que esta sendo executada pelo app, então a pesquisa do diretório é a partir do nível do app
module.exports = app;
