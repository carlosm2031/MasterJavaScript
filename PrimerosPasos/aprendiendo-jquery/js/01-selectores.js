// Ahora puedes utilizar jQuery en tu código
$(document).ready(function () {
  // Selector de id
  var rojo = $("#rojo").css("background", "red").css("color", "white");
  console.log(rojo);

  var amarillo = $("#amarillo").css("background", "yellow");

  var verde = $("#verde").css("background", "green");

  // Selectores de clase

  var rosa = $(".crojo, .camarillo")
    .css("background", "pink")
    .css("color", "black");

  rosa.click(function () {
    $(this).css("background", "blue");
  });

  // Selectores de etiqueta

  var parrafos = $('p');
  parrafos.click(function(){
    $(this).removeClass("crojo");
  });

// Selectores otros

var res = $(".resaltado").css("background","red");
console.log(res);
});
