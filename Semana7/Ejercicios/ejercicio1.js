//Para esta parte usar if y for

/*
    *Ej1, crear una función que reciba un arreglo y un nombre
    *Si el nombre existe dentro de la función retonrar la posición
    *del nombre encontrado, en caso de no encontrarlo retornar -1

    *Tiempo aproximado unos 5 min.
*/

 let Alumnos = ["Frank", "Arturo", "Juan", "Luis"];

 let nombre = prompt("Ingrese el nombre a buscar: ");

 function nombreEncontrado(lista, nombre) {
     for (let i = 0; i < lista.length; i++) {
         if(nombre == lista[i]){
             let mensaje = `el nombre ubicado se encuentra en: ${i}`;
             return mensaje;
         }
     }
     return -1;
}

console.log(nombreEncontrado(Alumnos, nombre));

