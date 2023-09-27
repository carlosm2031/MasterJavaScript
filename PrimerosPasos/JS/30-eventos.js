"use strict";

// Eventos del ratón

window.addEventListener("load", () => {
  function cambiarColor() {
    console.log("Me has dado click");

    var bg = boton.style.backgroundColor;

    if (bg == "green") {
      boton.style.backgroundColor = "red";
    } else {
      console.log("else");
      boton.style.backgroundColor = "green";
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
    boton.style.color = "white";

    return true;
  }

  var boton = document.querySelector("#boton");

  // Click
  boton.addEventListener("click", function () {
    cambiarColor();
  });

  // Mouse Over
  boton.addEventListener("mouseover", function () {
    boton.style.background = "#157";
  });

  // Mouseout

  boton.addEventListener("mouseout", function () {
    boton.style.background = "#3498db";
  });

  var campo = document.querySelector("#campo_nombre");

  // Focus
  campo.addEventListener("focus", function () {
    console.log("focus");
  });

  // Blur
  campo.addEventListener("blur", function () {
    console.log("Blur");
  });

  // Keydown
  campo.addEventListener("keydown", function (e) {
    console.log(`Key: ${e.key}`);
  }); // keycode

  // Keypress

  campo.addEventListener("keypress", function (e) {
    console.log(`[kEYPRESS] ${e.key}`);
  });

  // Keyup
  campo.addEventListener("keyup", function () {
    console.log("[KEYUP]");
  });
});
