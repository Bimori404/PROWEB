/*

    Disoteca
    - Dejar pasar solo a los mayores de edad
    - El primero que entre despues de las 12am, entra gratis

*/

// let free = false;
// const validarCliente = (time) => {
//     let edad = prompt("Que edad tienes");
//     if (edad > 18) {
//         if (time >= 2 && time < 7 && free == false) {
//             alert("pasa papu OwO");
//             free = true;
//         } else { 
//             alert(`Vas a tener que pagar la entrada porque son las ${time}:00hrs`)
//         }
//     } else {
//         alert("No puedes entrar papu UnU")
//     }
// }
// validarCliente(1);
// validarCliente(2);
// validarCliente(3);

/*

    Registro de asistencias
    - Crear un mini sistema para registrar las asistencias(P) y las faltas(F)
    - Pasados 30 dias, mostrar la situacion total del alumnos
    - Maximo 10% de faltas para un alumno, si es mas esta reprobado

*/

// let cantidad = prompt("¿Cuantos alumnos son?");
// let totalAlumnos = [];

// for (let i = 0; i < cantidad; i++) {
//     totalAlumnos[i] = [prompt("Nombre del alumno "+(i+1)),0];

// }

// const Assitencia = (nombre, p) => {
//     let presente = prompt(nombre);

//     if (presente == "p" || presente  == "P") {
//         totalAlumnos[p][1]++;
//     }
// }

// // Aqui debe ir "i < 30"
// for (let i = 0; i < 5; i++) {
//     for ( alumno in totalAlumnos) {
//         Assitencia(totalAlumnos[alumno][0], alumno);
//     }
// }

// for ( alumno in totalAlumnos) {
//     let resultado = `${totalAlumnos[alumno][0]}:<br>
//     __________ Asistencias: ${totalAlumnos[alumno][1]} <br>
//     __________ Faltas: ${5 - totalAlumnos[alumno][1]} <br>`;
    
//     if (5 - totalAlumnos[alumno][1] > 2 ) {
//         resultado += "Reprobado por faltas <br><br> ";
//     } else {
//         resultado += "<br><br>";
//     }

//     document.write(resultado);
// }

/*

    Calculadora de Kofla

*/

const sumar =  (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar =  (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const divi =  (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}
const multi =  (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

alert("Que operacion quieres realizar?");
let ope = prompt("1:sumar, 2:restar, 3:divi, 4:multi");

if (ope == 1) {
    let nume1 = prompt("Num 1");
    let nume2 = prompt("Num 2");
    let res = sumar(nume1, nume2);
    alert("resultado: "+res);
}
else if (ope == 2) {
    let nume1 = prompt("Num 1");
    let nume2 = prompt("Num 2");
    let res = restar(nume1, nume2);
    alert("resultado: "+res);
}
else if (ope == 3) {
    let nume1 = prompt("Num 1");
    let nume2 = prompt("Num 2");
    let res = divi(nume1, nume2);
    alert("resultado: "+res);
}
else if (ope == 4) {
    let nume1 = prompt("Num 1");
    let nume2 = prompt("Num 2");
    let res = multi(nume1, nume2);
    alert("resultado: "+res);
}

else {
    alert("no se encontro la operacion")
}