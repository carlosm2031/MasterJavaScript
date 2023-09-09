'use strict'

// Calculadora
/*
-Pida 2 numeros
-Si metemos uno mal que nos los vuelva a pedir
-En el cuerpo de la pagina, en una alerta y por la consola el resultado
de sumar, restar, multiplicar y dividir esas dos cifras
*/

var numero1 = parseInt(prompt("Ingresa el numero 1"));
var numero2 = parseInt(prompt("Ingresa el numero 2"));

while(isNaN(numero1) || isNaN(numero2) || numero1>0 || numero2>0){
    numero1 = parseInt(prompt("Ingresa el numero 1"));
    numero2 = parseInt(prompt("Ingresa el numero 2"));
}   

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;

document.write( "La suma es: "+suma+"<br>"+
                "La resta es: " + resta+"<br>"+
                "La multiplicacion es: " + multiplicar+"<br>"+
                "La division es: " +dividir);

alert( "La suma es: "+suma+
        "\nLa resta es: " + resta+
        "\nLa multiplicacion es: " + multiplicar+
        "\nLa division es: " +dividir);

console.log( "La suma es: "+suma+
    "\nLa resta es: " + resta+
    "\nLa multiplicacion es: " + multiplicar+
    "\nLa division es: " +dividir);