'use strict'

var text ="Hola mundo soy una variable global" ;

function holaMundo(texto){
    var hola_mundo = "Texto dentro de función";
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

var numero = 12;

holaMundo(text);