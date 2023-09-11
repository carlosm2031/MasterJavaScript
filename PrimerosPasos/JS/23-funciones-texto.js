'use strict'

// Transformación de textos

var numero =444;
var texto1= "    Bienvenido al curso curso al al    ";
var texto2 = "es un buen curso";

var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

console.log(dato);

// Calcular longitud

var nombre = "Carlos Quezada";
    nombre = ["jlas0","asda",23]

console.log(nombre.length);

// Concatenar - Unir textos

// var textoTotal = texto1 + texto2;

var textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal);


// METODOS DE BÚSQUEDA

var busqueda = texto1.indexOf("Bienvenido");
    busqueda = texto1.lastIndexOf("curso");
    busqueda = texto1.search("al");
    busqueda = texto1.match(/al/gi);
    busqueda = texto1.substr(5,12);
    busqueda = texto1.charAt(12);
    busqueda = texto1.startsWith("B");
    busqueda = texto1.endsWith("ndo");
    busqueda = texto1.includes("al");
    busqueda = texto1.replace("al", "por");
    busqueda = texto1.slice(10,15);
    busqueda = texto1.split(" ");
    busqueda = texto1.trim();

console.log(busqueda);

