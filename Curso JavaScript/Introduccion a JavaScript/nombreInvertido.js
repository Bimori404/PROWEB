var nombreOriginal = "Matias";
var nombreInvertido = "";

for (var i = nombreOriginal.length - 1; i >= 0; i--) {
    //console.log(nombreInvertido.length);
    //console.log(nombreInvertido);
    nombreInvertido += nombreOriginal[i];
}

console.log(nombreInvertido);

/*
Codigo generado con IA

function invertirNombre(nombre) {
    // Convierte el nombre en un array de caracteres
    var caracteres = nombre.split('');

    // Invierte el array de caracteres
    var nombreInvertido = caracteres.reverse().join('');

    return nombreInvertido;
}

// Ejemplo de uso
var nombre = "Juan";
var nombreInvertido = invertirNombre(nombre);
console.log(nombreInvertido); // Mostrará "nauJ"

*/