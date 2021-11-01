const express = require('express');
const cors = require('cors');
const app = express();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath =  '/api/usuarios';

        // middlewares
        this.middlewares();


        // rutas de mi aplicacion
        this.rutas();
    }

    middlewares() {
        // cors
        this.app.use( cors() );

        // lectura y formateo del json
        this.app.use( express.json() );

        // directorio publico
        this.app.use(express.static("public"));
    }



    rutas() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor Condominio corriendo en puerto", this.port);
        });
    }

}


module.exports = Server;