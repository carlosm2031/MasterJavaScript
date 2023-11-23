$(document).ready(function(){
    $("#ocultar").click(function(){
        $("#caja").hide('fast');
    });

    $("#mostrar").click(function(){
        $("#caja").show('slow');
    });

    $("#todoUno").click(function(){
        $("#caja").toggle("fast");
    });
});