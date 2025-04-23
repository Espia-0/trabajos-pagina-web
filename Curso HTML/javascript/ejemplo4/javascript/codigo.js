let cadenainicial = prompt("introduzca cantidad de cadenares");
let longitudcadena = cadenainicial.length;
let cadenaenmayus = cadenainicial.toUpperCase()
let cadenaenminus = cadenainicial.toLowerCase()

document.getElementById("contenido").innerHTML = 
`la cadena inicial es "${cadenainicial}" <br>
 y la cadena en mayus es "${cadenaenmayus}" <br>
y la cadena en minus es "${cadenaenminus}" <br>
la longitud de la cadena es "${longitudcadena}"`;
document.getElementById("contenido").style.color = "blue"
document.getElementById("contenido").style.fontSize = "20px"
document.getElementById("contenido").style.fontFamily = "Arial"