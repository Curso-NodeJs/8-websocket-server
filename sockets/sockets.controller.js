

// se delega la funcion de callback y se añade broadcast al socket para que se 
// transmita el mensaje a todo el resto pero no a si mismo

const socketsController = (socket) => {
    console.log('Cliente conectado', socket.id);
    
    socket.on('disconnect', ()=>{
        console.log('cliente desconectado', socket.id);
    });
    
    socket.on('enviar-mensaje', ( payload, callback )=>{
        const id = 123456;
        callback(id);
        socket.broadcast.emit('enviar-mensaje',payload);
    });
    
}

module.exports = { socketsController }