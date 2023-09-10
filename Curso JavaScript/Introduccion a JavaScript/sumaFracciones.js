var num1 = 2, den1 = 4;
var num2 = 3, den2 = 6;

console.log("El numerador 1 es "+num1+" y el denominador 1 es "+den1);
console.log("El numerador 2 es "+num2+" y el denominador 2 es "+den2);

if (num1!=0 && den2!=0) {
    console.log("Suma: "+((num1/den1)+(num2/den2)));
} else if (num1==0 && den2==0) {
    console.log("La suma no es valida");
}


/*
Codigo generado con IA

// Definición de las fracciones
var num1 = 2;
var den1 = 4;
var num2 = 3;
var den2 = 6;

// Función para calcular el máximo común divisor (MCD) de dos números
function calcularMCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return calcularMCD(b, a % b);
    }
}

// Función para simplificar una fracción
function simplificarFraccion(numerador, denominador) {
    var mcd = calcularMCD(numerador, denominador);
    return [numerador / mcd, denominador / mcd];
}

// Suma de las fracciones
var sumaNumerador = num1 * den2 + num2 * den1;
var sumaDenominador = den1 * den2;

// Simplificar la fracción resultante
var resultadoSimplificado = simplificarFraccion(sumaNumerador, sumaDenominador);

// Imprimir el resultado
console.log("La suma de las fracciones es: " + resultadoSimplificado[0] + " / " + resultadoSimplificado[1]);

*/ 