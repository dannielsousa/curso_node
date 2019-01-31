/* IMportar configurações do servidor */
var app = require('./config/server.js') //pode ocultar a extensão na importação do modulo

/*parametrizar a porta de esuta*/ 
app.listen(80, function(){
    console.log('Servidor Online')
})