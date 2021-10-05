//ámbito global = todo el documento

let constante = 2;

function calcularAreaTriangulo(base, altura){
    
    //ámbito local = solamente dentro de esta función
    let mivariable = 1000;

    //ponemos el codigo que se va a ejecutar
    //cuando invoquemos/llamemo/ejecutemos
    //esta función   
    let area = (base * altura) / 2;

    //a) indica que va a devolver mi función
    //b) termina la ejecución de mi función
    console.log("mi variable", mivariable);
    return area;
}

let resultado = calcularAreaTriangulo(50,15);

console.log(constante);
console.log(resultado);