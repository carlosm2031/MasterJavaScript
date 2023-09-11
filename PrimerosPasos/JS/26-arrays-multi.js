'use strict'
var categorias = ['Accion','Terror','Comedia'];
var peliculas = ['La verdad duele','La vida es bella', 'Gran torino'];

console.log(peliculas);
console.log(peliculas.sort());
console.log(peliculas.reverse());

var cine = [categorias,peliculas];

var pelicula = prompt("Ingresa pelicula");
while(pelicula != 't'){
    pelicula = prompt("Ingresa pelicula");
    peliculas.push(pelicula);
}

peliculas.push("Batman"); //Agregar elemento al array


peliculas =peliculas.join();//Convertir el arrar en un string

var cadena = "Texto 1,texto2,texto3";

var cadena_array=cadena.split(",")

console.log(cadena_array);

