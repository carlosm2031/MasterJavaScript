'use strict';

// Importa las librerías necesarias
var mongoose = require('mongoose');
var app = require('./app'); // Supongo que este archivo contiene la configuración de tu aplicación express
var port = 3700;

// Configura la promesa global de Mongoose
mongoose.Promise = global.Promise;

// Conecta a la base de datos MongoDB llamada 'portafolio'
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() => {
        console.log("Conexión a la base de datos establecida ");

        // Crea y configura el servidor express
        app.listen(port, () => {
            console.log("Servidor corriendo en http://localhost:3700");
        });
    })
    .catch(err => {
        console.log(err);
    });
