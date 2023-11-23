$(document).ready(function () {
  if (window.location.href.indexOf("index") > -1) {
    $(".galeria").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
      slideHeight: 200,
    });
  }

  if (window.location.href.indexOf("index") > -1) {
    // Posts
    var posts = [
      {
        title: "Prueba de Titulo 1",
        date: new Date(),
        contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae nesciunt nostrum beatae fugiat
      aspernatur voluptate iure repellat facilis saepe veniam porro quisquam, id possimus! Debitis
      recusandae et dolorum repudiandae?
      Ipsa quia ad modi delectus reiciendis, quasi ratione quo perferendis ea voluptatum laborum sapiente
      ipsam unde, voluptatem provident error, quas quibusdam consequuntur consequatur earum ullam
      assumenda? Earum consectetur eius magni!
      Veritatis beatae soluta blanditiis, fugit, dignissimos velit magnam sunt obcaecati illum impedit
      vero omnis hic ipsum cum deserunt cumque cupiditate reiciendis quasi tempore quia? Quam molestias
      non aperiam odit dignissimos.`,
      },
      {
        title: "Prueba de Titulo 2",
        date: new Date(),
        contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae nesciunt nostrum beatae fugiat
      aspernatur voluptate iure repellat facilis saepe veniam porro quisquam, id possimus! Debitis
      recusandae et dolorum repudiandae?
      Ipsa quia ad modi delectus reiciendis, quasi ratione quo perferendis ea voluptatum laborum sapiente
      ipsam unde, voluptatem provident error, quas quibusdam consequuntur consequatur earum ullam
      assumenda? Earum consectetur eius magni!
      Veritatis beatae soluta blanditiis, fugit, dignissimos velit magnam sunt obcaecati illum impedit
      vero omnis hic ipsum cum deserunt cumque cupiditate reiciendis quasi tempore quia? Quam molestias
      non aperiam odit dignissimos.`,
      },
      {
        title: "Prueba de Titulo 3",
        date: new Date(),
        contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae nesciunt nostrum beatae fugiat
      aspernatur voluptate iure repellat facilis saepe veniam porro quisquam, id possimus! Debitis
      recusandae et dolorum repudiandae?
      Ipsa quia ad modi delectus reiciendis, quasi ratione quo perferendis ea voluptatum laborum sapiente
      ipsam unde, voluptatem provident error, quas quibusdam consequuntur consequatur earum ullam
      assumenda? Earum consectetur eius magni!
      Veritatis beatae soluta blanditiis, fugit, dignissimos velit magnam sunt obcaecati illum impedit
      vero omnis hic ipsum cum deserunt cumque cupiditate reiciendis quasi tempore quia? Quam molestias
      non aperiam odit dignissimos.`,
      },
      {
        title: "Prueba de Titulo 4",
        date: new Date(),
        contenido: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae nesciunt nostrum beatae fugiat
      aspernatur voluptate iure repellat facilis saepe veniam porro quisquam, id possimus! Debitis
      recusandae et dolorum repudiandae?
      Ipsa quia ad modi delectus reiciendis, quasi ratione quo perferendis ea voluptatum laborum sapiente
      ipsam unde, voluptatem provident error, quas quibusdam consequuntur consequatur earum ullam
      assumenda? Earum consectetur eius magni!
      Veritatis beatae soluta blanditiis, fugit, dignissimos velit magnam sunt obcaecati illum impedit
      vero omnis hic ipsum cum deserunt cumque cupiditate reiciendis quasi tempore quia? Quam molestias
      non aperiam odit dignissimos.`,
      },
    ];

    posts.forEach((item, index) => {
      var post = `
                <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.contenido}</p>
                <a href="#" class="boton-more">Leer más</a>
                </article>
                `;
      $("#posts").append(post);
    });
  }

  // SELECTOR DE TEMA
  var theme = $("#theme");

  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });

  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });

  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });

  // Scroll arriba de la web
  $(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });

  // Login falso
  $("#login form").submit(function () {
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");
    about_parrafo.html("<br> <strong>Bienvemido, " + form_name + "</strong>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");

    $("#login form").hide();
    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  // Acordeón
  if (window.location.href.indexOf("sobre-mi") > -1) {
    if ($.ui) {
      console.log("jQuery UI está cargado correctamente.");
    } else {
      console.log("¡Error! jQuery UI no está cargado.");
    }

    // Inicialización del acordeón
    $("#accordion").accordion({
      collapsible: true,
      active: false, // Todas las secciones estarán cerradas inicialmente
    });
  }

  // Reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function () {
      // Formatea la fecha en el formato deseado (puedes ajustar el formato)
      var horaFormateada = moment().format("HH:mm:ss");

      // Actualiza el contenido del elemento con ID "reloj"
      $("#reloj").text(horaFormateada);
    }, 1000);
  }

  // Formulario
  if (window.location.href.indexOf("contact") > -1) {

    $("#form_contact input[name='date']").datepicker({
      dateFormat: "dd-mm-yy",
    });
    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollToTopOnError: true
    });
  }
});
