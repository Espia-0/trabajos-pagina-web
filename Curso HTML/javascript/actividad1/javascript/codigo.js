let cadenainicial = "Compartir el conocimiento es el acto más fundamental de la amistad. Porque es una forma de dar algo sin perder nada.";
let longitudcadena = cadenainicial.length;
let cadenaenmayus = cadenainicial.toUpperCase()
let cadenaenminus = cadenainicial.toLowerCase()
let cadenasinespacios = cadenainicial.replace(/\s+/g, "");
let cadenacontenido = `la cadena inicial es "${cadenainicial}" <br>
y la cadena en mayus es "${cadenaenmayus}" <br>
y la cadena en minus es "${cadenaenminus}" <br>
la longitud de la cadena es "${longitudcadena}" <br>
la cadena sin espacios es "${cadenasinespacios}" <br>
la longitud sin espacios es "${cadenasinespacios.length}"`;
document.getElementById("contenido").innerHTML = cadenacontenido;
document.getElementById("contenido").style.color = "blue"
document.getElementById("contenido").style.fontSize = "20px"
document.getElementById("contenido").style.fontFamily = "Arial"
console.log(cadenacontenido);