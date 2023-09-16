var filasCuadrado = 3;
let asteriscos = '';
for (let altura = 0; altura < filasCuadrado; altura++) { // Columnas
    for (let relleno = 0; relleno < filasCuadrado; relleno++) { //filas
        asteriscos += '*';
    } asteriscos += '\n';
} console.log(asteriscos);

/*-------------------------------------------------------------------- */

var filasPiramide = 3;
for (let altura = 1; altura <= filasPiramide; altura++) { //controla la altura de la pirámide
    let asteriscos = '';
    for (let agregar = 1; agregar <= altura; agregar++) { //se utiliza para agregar asteriscos a la fila actual
        asteriscos += '*';
    }
    console.log(asteriscos);
}

console.log(" "); /*------------------------------------------------- */


var filasRombo = 3;
if (filasRombo % 2 === 0) {
    console.log("El número de filas debe ser impar.");
} else {
    const mitad = Math.floor(filasRombo / 2);
    for (let altura = 0; altura < filasRombo; altura++) {
        let asteriscos = "";
        for (let espBlanco = 0; espBlanco < Math.abs(mitad - altura); espBlanco++) {
            asteriscos += " ";
        }
        /*
            El número de asteriscos se calcula como 2 * (mitad - Math.abs(mitad - altura)) + 1.
            La expresión 2 * (mitad - Math.abs(mitad - i)) calcula el número de asteriscos
            en el centro de la fila, y luego se le suma 1 para incluir el asterisco central.
        */
        for (let agregar = 0; agregar < 2 * (mitad - Math.abs(mitad - altura)) + 1; agregar++) {
            asteriscos += "*";
        }
        console.log(asteriscos);
    }
}

console.log(" "); /*------------------------------------------------- */

