// console.log permite mostrar en la consola de JS, lo que nos antoje es muy util para saber que esta pasando internamente dentro de js.
console.log("Hola Mundo!!");

// Variables
// Palabras reservadas, JS las usa
// Los nombres de variables son sensibles a Mayus y Minus
var nombre ="Frank";

console.log(nombre); // Solamente para mostrar algo

// Tipos de gastos - texto, números, booleanos
// String - texto - cadena de texto
var nombre ="Adolfo";

console.log(nombre);

// Number - número
var edad = 31;

console.log(edad);

//Boolean - Booleano
var esDeNoche = true; //true ó false
console.log(esDeNoche);

// para ver el tipo de dato
console.log(typeof esDeNoche);

//para cambiar de valor a una variable, me basta con llamarla, esta variable tiene que existir antes
edad = 25;

console.log(edad);

nombre = "Frank";

console.log(nombre);

// cambiar de tipo de dato

var anio = 2021;

anio = "dos mil veintidos";

console.log(anio);

// JS es un lenguaje que no es tipado, no pre declaramos los tipos de datos

// Valores raros en variables

var nota; //undefined, no esta definido

console.log(nota);

var nulo = null; //deberia haber algo, pero no esta

console.log(nulo);

// Not a Number = NaN
var rareza = 100 / "cebollas";

console.log(rareza);

// Infinito
var infinito = 100 / 0;

infinito = null;

console.log(infinito);

console.log(typeof infinito);