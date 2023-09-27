'use strict'
window.addEventListener("DOMContentLoaded",function(){
    console.log("Dom cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = this.document.querySelector(".dashed");
    box_dashed.style.display = "none";


    formulario.addEventListener("submit", function(){
        console.log("Submit realizado");
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        mostrarDatos(nombre,apellido,edad);
    });


    function mostrarDatos(nombre,apellido,edad){
        box_dashed.style.display = "block";
        var contenedor = document.querySelector(".dashed");
        var datos_usuario = {Nombre:nombre,Apellido:apellido,Edad:edad};

        var indice;
        for(indice in datos_usuario){
            
            var parrafo = document.createElement("p");
            parrafo.append(indice +": "+datos_usuario[indice]);
            contenedor.append(parrafo)

        }

    }
});