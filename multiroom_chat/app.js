/* IMportar configurações do servidor */
var app = require('./config/server.js') //pode ocultar a extensão na importação do modulo

/*parametrizar a porta de esuta*/ 
var server = app.listen(80, function(){
    console.log('Servidor Online')
})

var io = require('socket.io').listen(server);
app.set('io', io);

//criar conexão por websocket
io.on('connection', function(socket) {
    console.log('Usuário conectou!');

    socket.on('disconnect', function() {
        console.log('Usuário desconectou');
        //socket.emit('usuarioDesconectou': )
    })

    socket.on('msgParaServidor', function(data) {
        console.log('to aqui');
        
        socket.emit(
            'msgParaCliente', {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        )
        
        socket.broadcast.emit(
            'msgParaCliente', {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        )

        /* atulizar participantes */

        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            console.log(data.apelido_atualizado_nos_clientes)

            socket.emit(
                'participantesParacliente', { apelido: data.apelido }
            )
                
            socket.broadcast.emit(
                'participantesParacliente', { apelido: data.apelido }
            )
        }

    })
})