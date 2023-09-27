'use strict'

// BOM - Browser Object Model

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.location) 

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width=200","height=10");
}