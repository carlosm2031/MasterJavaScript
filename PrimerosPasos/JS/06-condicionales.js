"use strict";

// Condicional if

// Si a es igual a b haz algo

var edad = 80;
var nombre = "David Suarez";

/*
Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

if (edad >= 18) {
  console.log(nombre + " tiene " + edad + " años, es mayor de edad");
  if (edad <= 33) {
    console.log("todavia eres milenial");
  } else if (edad >= 70) {
    console.log("Eres anciano");
  } else {
    console.log("Ya no eres milenial");
  }
} else {
  console.log(nombre + " tiene " + edad + " años, es menor de edad");
}


// Operadores lógicos

/*

AND (Y): &&
OR (O): ||
NEGACION (NO): !

 */

var year = 2023;

// Negación
if(year != 2016){
    console.log("El año no es 2016")
}

// AND

if(year >= 2000 && year <= 2030){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

// OR

if(year == 2008 || (year >= 2023 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("AÑO NO REGISTRADO")
}
