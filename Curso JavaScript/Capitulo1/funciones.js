// function saludar () {
//     respuesta = prompt ("Hola, como tas");
//     if (respuesta == "bien") {
//         alert("me alegro")
//     } else {
//         alert("una pena")
//     }
// }
// saludar()

// function regresarSaludo () {
//     alert("hola");
//     return "la funcion se ejecuto bien";
// }
// let saludo = regresarSaludo();
// document.write(saludo)

// let num1 = 32
// let num2 = 12
// function suma () {
//     let res = num1 + num2
//     document.write(res)
// }
// suma()

// function suma (num1, num2) {
//     let res = num1 + num2
//     document.write(res)
//     document.write("<br>")
// }
// suma(12,32)
// suma(22,55)

// function saludar (nombre) {
//     frase = `hola ${nombre} , como estas?` 
// }
// saludar("sam")
// document.write(frase)

// const saludar = (nombre) => {
//     frase = `hola ${nombre} , como estas?` 
// }
// saludar("sam")
// document.write(frase)

const saludar = nombre => {
    let frase = `hola ${nombre}, como estas?`;
    document.write(frase);
}
saludar("sam");
