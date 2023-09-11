'use strict'

// Arrays - Arreglos - Matrices

var nombre = "Carlos Quezada";
var nombres = ["Carlos Quezada","Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];
var lenguajes = new Array("PHP","JS","GO","JAVA","C#","C","PASCAL");

/*
console.log(nombres.length);
console.log(lenguajes);

var elemento = parseInt(prompt("Que elemento del array quieres?",0));
if(elemento>=nombres.length){
    alert("Introduce el numero correcto menor que " + nombres.length)
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}
alert(nombres[elemento]);
*/

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ol>");
/*
for(var i =0; i<lenguajes.length;i++){
    document.write(`<li>${lenguajes[i]}</li>`);
}
*/

lenguajes.forEach((lenguaje,indice,arreglo)=>{
    console.log(arreglo);
    document.write(`<li>${indice} -> ${lenguaje}</li>`);
})

for (let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}


document.write("</ol>");


// for (let i=0;i<lenguajes.length;++i){
//     document.writeln(`<p>${i+1}. ${lenguajes[i]}</p>`);
// }



// Busquedas

var busqueda = lenguajes.find((lenguaje)=>{
    return lenguaje == "C#";
})


console.log(busqueda);