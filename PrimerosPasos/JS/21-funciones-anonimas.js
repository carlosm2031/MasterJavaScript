'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre


var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}


// Calback

function sumame(numero1, numero2, sumaYmuestra,sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

}


sumame(5,6, dato =>{
    console.log("La suma es: " + dato);
},
dato => {
    console.log("La suma * 2 es: " + dato);
});


