$(document).ready(function(){
    // Load
    // $('#datos').load('https://reqres.in/')

    //GET 
    $.get("https://reqres.in/api/users",{page:2},function(response){
        console.log(response);
        response.data.forEach((element,index)=>{
            $("#datos").append("<p>"+element.first_name+ " "+element.last_name+"</p>");
        });
    });

    // Post

    $("#formulario").submit(function(e){
        e.preventDefault();
        var name = $("#name").val();
        var web = $("#web").val();
        // $.post("https://reqres.in/api/users",{name:name,web:web},function(response){
        //     console.log(response);
        // }).done(function(){
        //     alert("Usuario añadido bien");
        // });

        $.ajax({
            type: 'POST',
            url:"https://reqres.in/api/users",
            data:{name:name,web:web},
            beforeSend: function(){
                console.log("Enviando...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("Error");
            },
            timeOut: 1000
        });
        return false;
    });
});