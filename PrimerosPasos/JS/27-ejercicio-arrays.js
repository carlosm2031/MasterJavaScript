'use strict'

//Problema
/*
1.Pida 6 números por pantalla y los meta en un array
2.Mostrar el array entero (todos sus elementos) en el cuerpo de la pagin ay en la consola
3.Ordenarlo y mostrarlo
4.Invertir su orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, 
que nos diga si lo encuentra y su indice(Se valorara el uso de funciones)
*/

// YO
// FUNCIONES

// function pedirNumeros(){
//     var numeros = [];
//     for(var i = 0;i<6;i++){
//         numeros[i] = parseInt((prompt("Ingrese numero")));
//     }
//     return numeros;
// }

// // FUNCION MOSTRAR
// function Mostrar(numeros){
//     for(var i=0;i<6;i++){
//         document.write(`<h2>${numeros[i]}</h2>`);
//         console.log(numeros[i]+ "\n");
//     }
//     console.log(numeros.sort());
//     console.log(numeros.reverse());
//     console.log(numeros.length);
//     var valor = parseInt(prompt("Ingresa el numero a buscar"));
//     if(numeros.includes(valor)){
//         console.log("Valor encontrado");
//         console.log(numeros.indexOf(valor));
//     }else{
//         console.log("No se encontro el valor en el array");
//     }
// };


// Mostrar(pedirNumeros());


// Profe

function mostrarArray(elementos,textoCustom=""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>")
    elementos.forEach((elemento,index)=>{
    document.write("<li>"+elemento+"</li>")
    });
    document.write("</ul>");
}

var numeros = [];

for(var i = 0; i<6;i++){
    numeros.push(parseInt(prompt("Introduce un numero",0)));
}

// Mostrar en el cuerpo de la página
mostrarArray(numeros);

// Mostrar array en la consola
console.log(numeros);

// Oredenar y mostrar

numeros.sort();
mostrarArray(numeros, "ordenado");

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

// Contar elementos
document.write("<h1>El array tiene: "+numeros.length+" elementos </h1>");

// Busqueda
var busqueda=parseInt(prompt("Busca un numero"));

var posicion = numeros.findIndex(numero => numero ==busqueda);

if(posicion && posicion!=-1){
    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1>")
}else{
    document.write("<h1>NO ENCONTRADO</h1>>");
}



