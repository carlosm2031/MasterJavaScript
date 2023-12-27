'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de Rutas
var project_routes = require('./routes/project'); 

// MiddelWares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors

// Rutas
app.use('/api', project_routes);

// Exportar
module.exports = app;