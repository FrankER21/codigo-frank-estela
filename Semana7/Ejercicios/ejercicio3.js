let pagoHora = +prompt("¿Cuánto es el pago por hora?");

let totalHoras = 0;

for (let i = 1; i <= 6; i++){
    let cantDiaria = +prompt("¿Cuántas horas fueron hoy?");
    totalHoras += cantDiaria;
}

console.log(`El trabajador tiene ${totalHoras} horas trabajadas con un pago S/. ${totalHoras * pagoHora}`);

