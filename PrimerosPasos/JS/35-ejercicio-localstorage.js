'use strict'

//-------------------Mi codigo------------------
/*
// Borrar todos los datos almacenados previamente en localStorage.
localStorage.clear();

// Obtener referencias a elementos HTML mediante sus IDs.
var boton = document.querySelector("#boton");      // Botón para agregar películas.
var mostrar = document.querySelector("#mostrar");  // Botón para mostrar películas.
var pelisdiv = document.querySelector("#peliculas"); // Div donde se mostrarán las películas.

// Declarar un arreglo para almacenar películas ingresadas por el usuario.
var peliculas = [];

// Establecer un evento de escucha en el botón "Agregar Película".
boton.addEventListener("click", () => {
    // Obtener el valor ingresado por el usuario desde un campo de entrada de texto.
    var entrada = document.querySelector("#addpelicula").value;
    // Llamar a la función para mostrar películas pasando la entrada como argumento.
    mostrarPeliculas(entrada);
});

// Función para agregar una película al arreglo y almacenarla en localStorage.
function mostrarPeliculas(pelicula) {
    // Agregar la película ingresada al arreglo "peliculas".
    peliculas.push(pelicula);
    
    // Almacenar cada película en localStorage con una clave única.
    for (var i = 0; i < peliculas.length; i++) {
        localStorage.setItem(("peliculas" + i), peliculas[i]);
    }
};

// Establecer un evento de escucha en el botón "Mostrar Películas".
mostrar.addEventListener("click", () => {
    // Iterar a través del arreglo de películas y mostrarlas en el elemento HTML.
    for (var i = 0; i < peliculas.length; i++) {
        // Crear un nuevo elemento de párrafo (<p>) para cada película.
        var p = document.createElement("p");
        // Agregar el título de la película al párrafo.
        p.append(peliculas[i]);
        // Agregar el párrafo al elemento con el ID "peliculas" en el DOM.
        pelisdiv.append(p);
    }
});
*/

/*

//-------------------ChatGpt codigo-------------------


// Limpia el localStorage al iniciar la página para evitar problemas con datos antiguos.
localStorage.clear();

// Obtener referencias a elementos HTML utilizando const en lugar de var.
const boton = document.querySelector("#boton");      // Botón para agregar películas.
const mostrar = document.querySelector("#mostrar");  // Botón para mostrar películas.
const pelisdiv = document.querySelector("#peliculas"); // Div donde se mostrarán las películas.

// Declarar un arreglo para almacenar películas ingresadas por el usuario.
const peliculas = [];

// Función para agregar una película al arreglo y almacenarla en localStorage.
function mostrarPeliculas() {
    const entrada = document.querySelector("#addpelicula").value;
    if (entrada.trim() === "") {
        alert("Por favor, ingrese el título de una película.");
        return;
    }

    // Agregar la película ingresada al arreglo "peliculas".
    peliculas.push(entrada);

    // Almacenar todas las películas en localStorage como un solo objeto JSON.
    localStorage.setItem("peliculas", JSON.stringify(peliculas));

    // Limpiar el campo de entrada después de agregar una película.
    document.querySelector("#addpelicula").value = "";

    // Llamar a la función para mostrar películas.
    mostrarListaPeliculas();
}

// Función para mostrar la lista de películas en el elemento HTML.
function mostrarListaPeliculas() {
    // Limpiar el contenido anterior antes de mostrar las películas.
    pelisdiv.innerHTML = "";

    // Obtener la lista de películas desde localStorage.
    const peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];

    // Iterar a través de la lista de películas y agregarlas al elemento HTML.
    for (const pelicula of peliculasGuardadas) {
        const p = document.createElement("p");
        p.textContent = pelicula;
        pelisdiv.appendChild(p);
    }
}

// Establecer un evento de escucha en el botón "Agregar Película".
boton.addEventListener("click", mostrarPeliculas);

// Establecer un evento de escucha en el botón "Mostrar Películas".
mostrar.addEventListener("click", mostrarListaPeliculas);

// Mostrar la lista de películas al cargar la página por primera vez.
mostrarListaPeliculas();

*/

//-------------------Curso codigo-------------------

var formulario = document.querySelector("#formulario");

formulario.addEventListener("submit",()=>{
    var titulo = document.querySelector("#addpelicula").value;

    if(titulo.length >= 1){
        localStorage.setItem(titulo,titulo);
    }
});

var ul =document.querySelector("#peliculasList");

for(var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == "string"){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formulariob = document.querySelector("#formularioborrar");

formulariob.addEventListener("submit",()=>{
    var titulo = document.querySelector("#borrarpelicula").value;

    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
    }
});