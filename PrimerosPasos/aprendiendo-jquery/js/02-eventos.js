$(document).ready(function(){
    // MouseOver y MouseOut
    var caja = $("#caja");

    // caja.mouseover(function(){
    //     $(this).css("background","red");
    // });
    // caja.mouseout(function(){
    //     $(this).css("background","yellow");
    // });

    // Hover
    function cambiarRojo(){
        $(this).css("background","red");
    }

    function cambiaAmarillo(){
        $(this).css("background","yellow");
    }

    caja.hover(cambiarRojo, cambiaAmarillo);

    // Click, Doble click

    caja.click(()=>{
        caja.css("color","white");
    });
    caja.dblclick(()=>{
        caja.css("color","black");
    });

    // Focus y blur

    var datos = $("#datos");

    $("#Nombre").focus(function(){
        $(this).css("border","2px solid green");
        console.log("input")
    });

    $("#Nombre").blur(function(){
        $(this).css("border","2px solid transparent");
        
        datos.text($(this).val()).show();
    });

    // Mousedown y mouseup

    datos.mousedown(function(){
        $(this).css("border-color","gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color","black");
    });

    // Mousemove
    $(document).mousemove(function(){
        // console.log(event.clientX);
        // console.log(event.clientY);
        $("#sigueme").css("left",event.clientX);
        $("#sigueme").css("top",event.clientY);
    })    

});