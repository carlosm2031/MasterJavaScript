$(document).ready(function(){

    $("#addbtn").removeAttr("disabled");

    reloadLinks();
    
    var añadir = $("#addbtn");

    añadir.click(function(){
        var link = $("#add_link");
        var texto = link.val();
        $("#menu").append(`<li><a href="https://${texto}.com">${texto}</a></li>`);
        link.val("");
        reloadLinks();
    });

    function reloadLinks(){
        $('a').each(function(){
            var that = $(this);
            var enlace = that.attr("href");
            that.attr("target","blank");
            that.text(enlace);
        });
    }
});