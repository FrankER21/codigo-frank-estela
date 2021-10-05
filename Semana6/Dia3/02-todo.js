/**
 * 1, que datos necesito?
 * -la tarea (string), estado la tarea(bool)
 * -referencia del formulario
 * 2, como obtengo los datos
 * -evento click, tomando el value del input
 * crear un li
 */

let formToDo = document.getElementById("formToDo");

let ulTareas = document.getElementById("tareas");

let tareas = []; //aqui almacenaré las tareas a mostrar

//a, vamos a obtener el valor del input y agregarlo a tareas[]

formToDo.addEventListener("submit", function(ev){
    //evento
    ev.preventDefault();
    //formulario.name_input.value
    let nuevaTarea = formToDo.tarea.value;
    tareas.push(nuevaTarea);
    console.log(tareas);
    //reset(), reincio todo el formulario
    formToDo.reset();
    dibujarTareas();
});

function dibujarTareas(){
    //cada vez que se ejecute dibujarTareas lo primero que hago es decir que el contenido en HTML va a ser ""
    ulTareas.innerHTML = "";
    //se va encargar de dibujar las tareas
    tareas.forEach(function(item, posicion){
        let li = document.createElement("li");
        li.innerText = item;
        ulTareas.appendChild(li);

        //Agregar 01 evento por cada item
        li.addEventListener("dblclick", function(){
            //la idea es que este nos permita eliminar una tarea
            tareas.splice(posicion, 1);
            // console.log("después de eliminar", tareas);
            dibujarTareas();
        });
    });
};

