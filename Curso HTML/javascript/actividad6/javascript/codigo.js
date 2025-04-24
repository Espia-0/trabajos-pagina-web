let respuestaUsuario = prompt('Tengo agujas pero no sé coser, tengo números pero no sé leer, las horas te doy, ¿Sabes quién soy?');
const respuestacorrecta = "reloj";
let cadenaamostrar;

if(respuestaUsuario.toLowerCase() == respuestacorrecta){
  cadenaamostrar = `¡correcto! la respuesta es "${respuestaUsuario}"`}
  else {
    cadenaamostrar= `¡incorrecto! la respuesta "${respuestaUsuario}" es incorrecta`
  }
document.getElementById("contenido").innerHTML = cadenaamostrar;
document.getElementById("contenido").style.color = "blue"
document.getElementById("contenido").style.fontSize = "20px"
document.getElementById("contenido").style.fontFamily = "Arial"