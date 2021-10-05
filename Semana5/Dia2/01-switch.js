let producto = +prompt("Ingrese el código del producto");

switch (producto) {
    //case posible_valor, este puede ser un num, booleano, string
    case 1:
        console.log("Chocolate");
        //todo el código que quiera
        break; //corta la ejecución, como un return
    case 2:
        console.log("Papitas");
        break;
    case 3:
        console.log("Galletas");
        break;
    case 4:
        console.log("Pollo");        
    default:
        //else
        console.log("Código no encontrado");
}

let horas = +prompt("Ingrese sus horas semanales");

//si el trabajador trabaja mas de 35 horas tiene horas extra

//si el trabajador tiene igual o más de 30 hasta menos de 35 horas, cumplio con su jornada

//si tiene menos de 309 se le debe mandar un aviso

switch (true) {
    case horas > 35:
        console.log("horas extras");
        break;
    case horas >= 30 && horas <=35:
        console.log("Cumplio con su jornada");
        break;3030
}