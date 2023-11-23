$(document).ready(function() {
    // Verifica que jQuery UI esté cargado
    if ($.ui) {
        console.log('jQuery UI está cargado correctamente.');
    } else {
        console.log('¡Error! jQuery UI no está cargado.');
    }

    // Inicialización del acordeón
    $("#accordion").accordion({
        collapsible: true,
        active: false  // Todas las secciones estarán cerradas inicialmente
    });
});
