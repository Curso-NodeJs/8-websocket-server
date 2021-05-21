const express = require('express');
var cors = require('cors');
const { socketsController } = require('../sockets/sockets.controller');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        // server para usar sockets
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        
        this.paths = {}
        
        
        // Middlewares
        this.middlewares();
        
        //Rutas de la aplicación        
        this.routes();
        
        // Sockets
        this.sockets();
    }
    
    
    middlewares(){
        // CORS
        this.app.use( cors());
        
        // Directorio publico
        this.app.use( express.static('public') );
        
    }
    
    routes() {
       // this.app.use( this.paths.user , require('../routes/user.routes'));
    }
    
    sockets(){
        this.io.on("connection", socketsController);
    }
    
    listen() {
        this.server.listen( this.port, () => console.log(`servidor corriendo en el puerto ${ this.port }`));
    }
}

module.exports = Server;