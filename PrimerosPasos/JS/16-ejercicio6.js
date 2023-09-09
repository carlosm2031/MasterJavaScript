'use strict'

// Que nos diga si un numero es par o impar
/* 
1. Ventana prompt
2. Si no es valido que nos pida el numero otra vez
*/

var numero = parseInt(prompt("Ingrese numero",0));

while(isNaN(numero)){
    numero = parseInt(prompt("Ingrese numero",0));
}

if(numero %2 == 0){
    alert(numero + " es par");
}else{
    alert(numero + " es impar");
}