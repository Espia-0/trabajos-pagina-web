let numero1 = parseFloat(prompt("introduzca el primer numero"));
let numero2 = parseFloat(prompt("introduzca el segundo numero"));
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let potencia = numero1 ** numero2;
document.getElementById("contenido").innerHTML = 
`La suma de ${numero1}  y ${numero2} es: ${suma}` + "<br>" +
`La resta de ${numero1} menos ${numero2} es: ${resta}` + "<br>" +
`La multiplicacion de ${numero1} y ${numero2} es: ${multiplicacion}` + "<br>" +
`La division de ${numero1} y ${numero2} es: ${division}` + "<br>" +
`La potencia de ${numero1} elevado a ${numero2} es: ${potencia}`;
document.getElementById("contenido").style.color = "blue"
document.getElementById("contenido").style.fontSize = "20px"
document.getElementById("contenido").style.fontFamily = "Arial"