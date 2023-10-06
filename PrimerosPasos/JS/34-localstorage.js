'use strict'

// LocalStorage


//Comprobar disponibilidad de local storage
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("Incompatible con localStorage");
}

//Guardar datos

localStorage.setItem("titulo","curso de Symmfony");

//Recuperar elemento de local storage

localStorage.getItem("titulo")

//Guardar objetos

var pelicula ={
    nombre:'Iron man',
    year:2005,
    director:"Jonathan"
}

localStorage.setItem("pelicula", JSON.stringify(pelicula));

//Recuperar Objeto

var pelijs = JSON.parse(localStorage.getItem("pelicula"));

console.log(pelijs);

document.querySelector("#peliculas").append(pelijs.nombre); 
