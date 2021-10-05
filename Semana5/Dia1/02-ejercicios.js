//1. Pedir al usuario sus nombres, apellidos y edad cada uno por separado, el resultado deberia ser un console.log, resumiendo los datos del usuario.

let nombres = prompt("¿Cuál es tu nombre?");

let apellidos = prompt("¿Cuál es tu apellido?");

let edad = prompt("¿Cuál es tu edad?");

console.log(`Bienvenid@: ${nombres} ${apellidos} de ${edad} años de edad`);

//2. Área de un triángulo

let base = +prompt("¿Cuál es la base del triángulo?");

let altura = +prompt("¿Cuál es la altura del triángulo?")

let area = (base*altura)/2;

console.log(`Hola: La altura del triángulo es ${area}`)

//3. Preguntar al usuario por 2 números y mostrar el residuo de la division

let numero1 = +prompt("Ingrese el primer número");

let numero2 = +prompt("Ingrese el segundo número");

let residuo = numero1%numero2;

console.log(`Hola: El residuo es el siguiente ${residuo}`);