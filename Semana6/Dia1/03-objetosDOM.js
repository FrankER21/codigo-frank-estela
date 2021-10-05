//window.console.log("Hola");

//Info del Navegador
console.log(`Info Navegador : ${window.navigator.userAgent}`);

//Cuál es mi URL
console.log(`URL: ${window.location}`);

navigator.geolocation.getCurrentPosition(function(ubicacion){
    console.log(ubicacion)
});

//JavaScript a travez del objeto window
//window = ventana/pestaña del navegador

console.log(window.document);

//estoy capturando un elemento
let miTitulo = document.querySelector("h1");

console.log(miTitulo);

//innerHTML, es el contenido HTML de un elemento
miTitulo.innerHTML = "Hola soy un nuevo Título";

//El HTML dentro de la etiqueta
console.log(miTitulo.innerHTML);

//Obtener un elemento
let miCaja = document.getElementById("caja");

console.log(miCaja);

//innerHTML, representa el contenido HTML de un elemento
miCaja.innerHTML = "<h2>Título Caja</h2>";

//background-color = backgroundColor
miCaja.style.backgroundColor = "purple";
miCaja.style.color = "white";

let misItems = document.getElementsByClassName("lista_item")

console.log(misItems);

//Array.from(htmlCollection), crea un arreglo
let arregloItems = Array.from(misItems);

console.log(arregloItems);

//anotación importante acerca de forEach, map, filter, find
//forEach(function(item, indice){})
arregloItems.forEach(function(item, indice, arreglo){
    item.style.backgroundColor = "skyblue";
    item.innerHTML = `Patata ${indice}`;
    // console.log ("mostrando el arreglo", arreglo);
})

//obtener element de diferentes maneras
let miTexto = document.querySelector("#texto");

console.log(miTexto);

let boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach(function(bx){
    bx.innerHTML = `<p>Soy un párrafo</p>`
})

//CREAR ELEMENTOS
let series = [
    "Squid Game",
    "Pasion de Gavilanes",
    "Dark",
    "Billions",
    "GOT",
    "Suits",
    "Mr. Robot",
    "House of Dragons",
    "Chernobyl",
    "Breaking Bad"
]

let divContenido = document.getElementById("contenido");

//createElement("etiqueta") : "p", "ul", "h1", "td"
let lista = document.createElement("ul");

//agregando ese elemento como hijo
//push a un elemento ya existente
divContenido.appendChild(lista);

let textoLI = "";
series.forEach(function(programaTv){
    textoLI = textoLI + `<li>${programaTv}</li>`;
});

lista.innerHTML = textoLI;

let imagen = document.createElement("img");

divContenido.appendChild(imagen);

//setAttribute("nombre_attr", "valor_attr")
imagen.setAttribute("src", "https://picsum.photos/200/300");

//clases de CSS
//a un leemento le podemos aplicar varias clases
//add("nombreclase")
lista.classList.add("resaltado");
lista.classList.add("redondeado");
//lista.classList.add("verdecito");
lista.classList.remove("resaltado");