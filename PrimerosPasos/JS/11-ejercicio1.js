'use strict'

//Programa que pida 2 números y que nos diga cual es mayor, el menor y si son iguales
// PLUS: Si los números no so números o son menores o iguales a cero, nos los vuelva a pedir

//PROFE SOLUCIÓN
/*
var numero1 = parseInt(prompt("Introduce el primer número",0));
var numero2 = parseInt(prompt("Introduce el segundo número",0));

if(numero1 == numero2){
    alert("Los numeros son iguales");
}else if(numero1 > numero2){
    alert("El número mayor es: " + numero1);
    alert("El número menor es: " + numero2);
}else if(numero2 > numero1){
    alert("El número mayor es: " + numero2);
    alert("El número menor es: " + numero1);
}else{
    alert("Introduce números correctos");
}*/



//MI SOLUCIÓN

var num1 = prompt("DAME EL PRIMER NÚMERO");
var num2 = prompt("DAME EL SEGUNDO NÚMERO");

while (num1<= 0 || num2<=0 || isNaN(num1) || isNaN(num2)){
    num1 = prompt("DAME EL PRIMER NÚMERO");
    num2 = prompt("DAME EL SEGUNDO NÚMERO");
}

if(num1 > num2){
    alert(num1 + " es mayor que " + num2);
}else if(num1==num2){
    alert(num1 + " es igual a " + num2);
}else{
    alert(num2 + " es mayor que " +num1)
}



