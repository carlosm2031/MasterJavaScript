"use strict";

//Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

getUsuarios()
  .then((data) => data.json())
  .then((users) => {
    listadoUsuarios(users.data);
    return getJanet();
  })
  .then((data) => data.json())
  .then((janet) => {
    mostrarJanet(janet.data);
  });

function getUsuarios() {
  return fetch("https://reqres.in/api/users");
}

function getJanet() {
  return fetch("https://reqres.in/api/users/2");
}

function listadoUsuarios(usuarios) {
  usuarios.map((user, i) => {
    let nombre = document.createElement("h3");
    let img = document.createElement("img");

    nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
    img.src=user.avatar;

    div_usuarios.appendChild(nombre);
    
    div_usuarios.appendChild(img);

    document.querySelector(".loading").style.display = "none";
  });
}

function mostrarJanet(user) {
  let nombre = document.createElement("h4");
  
  let img = document.createElement("img");

  nombre.innerHTML = user.first_name + " " + user.last_name;
  img.src=user.avatar;

  div_janet.appendChild(nombre);
  div_janet.appendChild(img);

  document.querySelector("#janet .loading").style.display = "none";
}
