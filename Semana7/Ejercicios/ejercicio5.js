let ventas = [
    {
        nombre: "televisor",
        precio: 1200,
    },
    {
        nombre: "radio",
        precio: 400,
    },
    {
        nombre: "smartphone",
        precio: 1500,
    },
    {
        nombre: "gráfica",
        precio: 1800,
    },
    {
        nombre: "exprimidor",
        precio: 100,
    },
    {
        nombre: "tablet",
        precio: 550,
    },
    {
        nombre: "monitor",
        precio: 600,
    },
];

function calcularReporte(arrVentas) {
    //T1, de 1000 a +
    //T2, de 500 a 1000
    //T3, de 500 a -
    //x cada una necesito saber el total
    //y aparte la suma de los totales
    let T1 = 0;
    let T2 = 0;
    let T3 = 0;
    for (let i = 0; i < arrVentas.length; i++) {
        if (arrVentas[i].precio > 1000) {
            T1 += arrVentas[i].precio;
        } else if (arrVentas[i].precio > 500) {
            T2 += arrVentas[i].precio;
        } else {
            //Acá por descarte, cuesta menos de 500
            T3 += arrVentas[i].precio;
        }
    }

    let reporte = {
        mayorAMil: T1,
        mayorAQuinientos: T2,
        menorAQuinientos: T3,
        totalGlobal: T1 + T2 + T3,
    };
    return reporte;
}

console.table(calcularReporte(ventas));

let datos = calcularReporte(ventas);

let cuerpo = document.querySelector("body");

let p = document.createElement("p");

p.innerHTML = `El monto global es ${datos.totalGlobal}`;

cuerpo.appendChild(p);