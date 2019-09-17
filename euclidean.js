/*
PROGRAMAR EL ALGORITMO DE EUCLIDES, EN CUALQUIER LENGUAJE DE PROGRAMACION QUE GUSTEN.

- ENTREGAR UN EJECUTABLE EN .EXE, CON FORMATO ZIP O RAR PARA QUE NO SEA BLOQUEADO POR LA PLATAFORMA.
- VALIDAR QUE EL PROGRAMA NO DEJE INGRESAR 0 O NUMEROS NEGATIVOS.
- EL PROGRAMA DEBERA DE REALIZAR LA DIVISION POR MEDIO DEL ALGORITMO DE EUCLIDES VISTO EN CLASE.
- EL PROGRAMA DEBERA DE SACAR LA TABLA DE DIVISIONES, RESIDUOS Y COCIENTES PARA LLEVAR EL CONTROL DE LA DIVISION.
- EL PROGRAMA DEBERA DE SACAR EL RESULTADO MCD.
*/

let first = true;

function euclideanAlgorithm(originalA, originalB) {

    const a = Math.abs(originalA);
    const b = Math.abs(originalB);
    let string = "";

    if (!first) {
        if (a > b) {
            if (!isNaN(parseInt(a / b)) && !isNaN(parseInt(a % b))) {
                string += a
                string += " = ";
                string += b
                string += " * ";
                string += parseInt(a / b);
                string += " + ";
                string += parseInt(a % b);
            }
        } else {
            if (!isNaN(parseInt(b / a)) && !isNaN(parseInt(b % a))) {
                string += b
                string += " = ";
                string += a
                string += " * ";
                string += parseInt(b / a);
                string += " + ";
                string += parseInt(b % a);
            }
        }
    }
    first = false;

    console.log(string);

    return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}

console.log("MCD =", euclideanAlgorithm(1701, 3768));

//console.log(euclideanAlgorithm(10, 45))
