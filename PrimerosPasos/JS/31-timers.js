"use strict";

window.addEventListener("load", () => {

    function intervalo(){
        var tiempo = setInterval(()=>{
            var titulo = document.querySelector("h1");

            if(titulo.style.background == "red"){
                titulo.style.background = "green";
            }else{
                titulo.style.background = "red";
            }

        }, 1000);
        return tiempo;
    };

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click",()=>{
        clearInterval(tiempo);
        console.log("stop");
    });

    var start = document.querySelector("#start");

    start.addEventListener("click",()=>{
        clearInterval(tiempo);
        tiempo = intervalo();
        console.log("start");
    })


});


/*
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("h1");
    let intervaloId;

    function cambiarColorFondo() {
        if (titulo.style.background === "red") {
            titulo.style.background = "green";
        } else {
            titulo.style.background = "red";
        }
    }

    function iniciarIntervalo() {
        intervaloId = setInterval(cambiarColorFondo, 1000);
    }

    function detenerIntervalo() {
        clearInterval(intervaloId);
    }

    const stop = document.querySelector("#stop");
    stop.addEventListener("click", () => {
        detenerIntervalo();
        console.log("stop");
    });

    const start = document.querySelector("#start");
    start.addEventListener("click", () => {
        detenerIntervalo();
        iniciarIntervalo();
        console.log("start");
    });

    // Iniciar el intervalo al cargar la página
    iniciarIntervalo();
});

*/