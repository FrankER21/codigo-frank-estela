let a = 1;

let b = "4"; //string

let c = a +b;

console.log(typeof c);

let nombre = "Jorge ";

let apellido = "Montesinos";

let nombreCompleto = nombre + apellido;

console.log(nombreCompleto);

// Template String / Template Literal
// Backticks ''
// ${acá adentro, podemos poner código de JS}

let edad = 26;

let texto = `Hola soy ${nombre} ${apellido} y soy de Lim, tengo ${edad} años` ; 

console.log(texto);

// Prompt, capturar datos, del usuario

let cantidadMascotas = prompt("Cuantas mascotas tienes?");

console.log(`Mascotas : ${cantidadMascotas}`); //todo lo ingresado en un prompt es string

console.log(typeof cantidadMascotas); //todo lo ingresado en un prompt es string

let convertido = +cantidadMascotas;
// parseInt, parse = interprentar, convierte a un entero
// let convertido = parseInt(cantidadMascotas);
// let convertido = parseFloat(cantidadMascotas);

console.log(typeof convertido, convertido, "PATATA");
