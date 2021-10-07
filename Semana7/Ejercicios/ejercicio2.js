/*
    -Como sabe la sunat si un RUC es válido?
    -Har un digito verificador
*/

function verificarRUC(ruc) {
    // verificquemos que el ruc tiene 11 dígitos
    if(ruc.length == 11){
        //es correcto
        //porque evetualmente en este bloque de codigo retornare un true
        let factorChequeo = [5,4,3,2,7,6,5,4,3,2];
        let total = 0;
        for (let i = 0; i < factorChequeo.length; i++) {
            let prod = ruc[i] * factorChequeo[i];
            //total = total + prod
            total += prod;
        }
        let modulo = total % 11;
        let digverificador = 11 - modulo;

        if(digverificador == ruc[10]){
            return true;
        }
    }
    return false;
}

console.log(verificarRUC("20552111169"));