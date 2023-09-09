'use strict'

// Parametros REST y SPREAD

// el parametro rest en la declaracion de la funcion ...(nombre de variable) sirve para guardar parametros extras que no se pidieron
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log('Fruta 1:'+ fruta1);
    console.log('Fruta 2:'+ fruta2);
    console.log(resto_de_frutas)
}

listadoFrutas("manzana",'pera','sandia','melon');



var frutas = ["manzana",'pera','sandia']
// el parametro spread ...(nombre de array o conjuto de datos) sirve en el llamado de la funcion para en caso mandar un array con datos
// desagrupar ese array y pasarlos como parametros separados
listadoFrutas(...frutas,'melon');