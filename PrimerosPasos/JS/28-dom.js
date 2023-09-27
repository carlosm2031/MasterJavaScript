'use strict'

// // DOM - DOCUMENT OBJECT MODEL
// var textoNuevo = prompt("Ingresa un texto");

// var caja = document.getElementById("miCaja");
var caja = document.querySelector("#miCaja");
caja.innerHTML = "hola";
caja.style.background = 'yellow';
caja.style.fontSize= "40px";
caja.className = "hola";



// Conseguir elementos por sus etiquetas

var todosLosDivs = document.getElementsByTagName('div');
var section = document.getElementById('miseccion');
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == "string"){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        section.append(parrafo)
    }
}
var hr = document.createElement('hr');
section.append(hr);

console.log(todosLosDivs);

// Conseguir elementos por sus clase css
var divsRojo = document.getElementsByClassName('rojo');
var valor
for(valor in divsRojo){
    if(divsRojo[valor].className == "rojo"){   
        divsRojo[valor].style.background = "red";
    }
}

// Query selector
var id = document.querySelector("#encabezado");
id.style.color = 'red';