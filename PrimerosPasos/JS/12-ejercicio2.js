'use strict'

// Usando un bucle, mostrar la suma y la media de los numeros introducidos 
// hasta introducir un numero negativo y ahi mostar el resultado

// MI SOLUCION
/*
var numero = parseInt(prompt("Ingresa un numero"));
var suma = 0;
var contador = 0;

while(numero>0){
    suma+=numero;
    contador++;
    
    numero = parseInt(prompt("Ingresa un numero"));

}

console.log("El promedio es: " + (suma/contador));
*/

// PROFE SOLUCION

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo",0));
    if(isNaN(numero)){
        numero=0;
    }else if(numero > 0){
        suma += numero;

        contador++;
    }

    console.log(suma);
    console.log(contador);
}while(numero >= 0);

alert("La suma de todos los numeros es: " + suma);
alert("La medias de todos los numeros es: " +(suma/contador));