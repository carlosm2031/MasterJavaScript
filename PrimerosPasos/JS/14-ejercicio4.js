'use strict'
// Mostrar todos los numeros impares que hay entre 2 numeros introducidos por el usuario


var numero1 =parseInt(prompt("Ingresa el primer numero",0)) ;
var numero2 =parseInt(prompt("Ingresa el segundo numero",0));

for(var i = numero1; i<numero2;i++){
    if(i%2 != 0){
        console.log(i);
    }else{
        console.log("");
    }
    
}