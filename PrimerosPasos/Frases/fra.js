'use strict'
var author = document.querySelector(".author");
var content = document.querySelector(".content");
var container = document.querySelector(".container");

fetch("https://api.quotable.io/random")
    .then((data) => data.json())
    .then((quote)=>{
        console.log(quote);
        author.append(quote.author);
        content.append(quote.content);
        // document.write(quote.author);
    });

container.addEventListener('click',()=>{
    fetch("https://api.quotable.io/random")
    .then((data) => data.json())
    .then((quote)=>{
        console.log(quote);
        author.append(quote.author);
        content.append(quote.content);
        // document.write(quote.author);
    });
});

