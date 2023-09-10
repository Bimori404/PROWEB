var a = 1, b = 6, c = 2;
var resul1, resul2;

console.log("Coeficiente a: "+a);
console.log("Coeficiente b: "+b);
console.log("Coeficiente c: "+c);

resul1 = (-b+(Math.sqrt(Math.pow(b,2)-4*a*c)))/(2*a);
resul2 = (-b-(Math.sqrt(Math.pow(b,2)-4*a*c)))/(2*a);

console.log("Resultado 1 "+resul1);
console.log("Resultado 2 "+resul2);