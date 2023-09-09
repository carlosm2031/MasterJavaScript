'use strict'

// Tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("De que numero quieres la tabla?", 1));

document.write("<h1>Tabla del :"+ numero+"</h1>");

for(var i = 0; i<=10;i++){
    document.write("<h2>"+i+" * "+ numero + " = "+(i*numero)+ "</h2>");
}

// Todas las tablas

for(var c= 1; c<=15;c++){
    document.write("<h1>Tabla del "+c+"</h1>");
    for(var i = 0; i <= 12 ; i++){
        document.write("<h2>"+i+" * "+ c + " = "+(i*c)+ "</h2>");
    }
}