var express = require('express');
var socket = require('socket.io');

// creó la aplicacion
var app = express(); // instancio libreria

// sirvo la aplicacion por el puerto 3000
var server = app.listen(3000); 

// luego le digo que tome lo que hay en el folder public y 
// lo sirva
app.use(express.static('public')); 

// tomo el servidor y lo enrredo en un servicio web socket
var io = socket(server);

// habilito la conexión
io.sockets.on('connection', newConnection);

// socket maneja eventos entonces acá vamos a controlarlos

function newConnection(socket) {
    console.log('socket: ' +  socket.id)

    // recivo un mensaje socket desde el cliente
    socket.on('mouse', mouseMSG)

    function mouseMSG(data) {
        // ese mensaje que llega desde el cliente
        // lo mando a todos los clientes cnectados
        socket.broadcast.emit('mouse', data)
    }
}

console.log('server socket runing');