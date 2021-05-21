// referencias del html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', ()=>{
    console.log('conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
} );


socket.on('disconnect', ()=>{
    console.log('desconectado');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
} );


// recibimos el mensaje del servid0r
socket.on('enviar-mensaje', (payload)=>{
    console.log(payload);
});



// al presionar el boton enviarmos mensaje al servidor
btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje: mensaje,
        id:'23452345',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, ( id )=>{
        console.log('desde el server ',id);
    });
});