// String
let cadena: string = "hola mundo";

// Number
let edad: number = 30;

// Boolean
let verdadero_o_falso: boolean = true;

// Any
let cualquiera: any = "hola";
cualquiera = 123;


// Arrays
var lenguajes: Array<string> = ["PHP","JS","GO","JAVA","C#","C","PASCAL"];

var years:any[] = [1,2,3,4,5,6,7,8,9,10,"hola"];

// Multiples tipos de datos
let cad: string | number ="123";
cad=123;

// Tipos de datos propios

type letrasonumeros = string | number;

let letras: letrasonumeros = "hola";
letras = 123;

// let vs var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1,numero2);
}

console.log(numero1,numero2);
console.log(cadena,edad,verdadero_o_falso,cualquiera,lenguajes,years,cad); 