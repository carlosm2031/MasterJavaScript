'use strict'

// Bucle while

var year = 2023;

while(year <= 2051){
    // ejecuta esto
    console.log("Estamos en el año: "+ year);
    year++;
    if(year == 2040){
        break;
    }
}

// Do while

var years = 20;

do{
    console.log("year: "+ years);
    years++;
}while(years<25);