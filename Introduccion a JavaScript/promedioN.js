var numeros = [7,3,4,4,6];
var suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log(suma)
console.log(numeros.length)

var promedio = suma/numeros.length;

console.log("El promedio es "+promedio)
