// $(document).ready(function(){

//     var enviar = $("#enviar");
//     enviar.click(function(){
//         var cards = $(".cards");

//         var nombre = $("#name");
//         var descripcion = $("#description");


//         cards.append(`
//         <div class="card">
//         <img class="image">
//         <h2 class="c_titulo">${nombre.val()}</h2>
//         <p class="parraf">${descripcion.val()}</p>
//         </div>
        
        
//         `);
//         // cards.append(`<p>${descripcion.val()}</p>`)
//         //limpio los campos para que no se repitan valores
//         // nombre.val("");
//         // descripcion.val("");
//     });
// });


$(document).ready(function () {
    var enviar = $("#enviar");
    var cards = $(".cards");
    var nombre = $("#name");
    var descripcion = $("#description");
    var fileInput = $("#fileInput");

    var imageData = null;

    // Escucha el cambio en el campo de entrada de tipo archivo
    fileInput.change(function (e) {
        var selectedFile = e.target.files[0];
        var reader = new FileReader();

        reader.onload = function (event) {
            // Guarda los datos de la imagen
            imageData = event.target.result;
        };

        reader.readAsDataURL(selectedFile);
    });

    // Escucha el clic en el botón "Guardar"
    enviar.click(function () {
        // Crea la tarjeta con nombre, descripción e imagen
        var card = `
            <div class="card">
                <img class="image" src="${imageData}" alt="Imagen">
                <h2 class="c_titulo">${nombre.val()}</h2>
                <p class="parraf">${descripcion.val()}</p>
            </div>
        `;

        // Agrega la tarjeta al contenedor de tarjetas
        cards.append(card);

        // Limpia los campos y la imagen para que no se repitan los valores
        nombre.val("");
        descripcion.val("");
        fileInput.val(""); // Limpia el campo de entrada de tipo archivo
        imageData = null; // Reinicia la imagen
    });
});
