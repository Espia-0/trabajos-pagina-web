let numero1 = prompt("introduzca el numero1");
let numero2 = parseInt(prompt("introduzca el numero 2"));
let numero3 = parseInt(prompt("introduzca el numero 3"));
let cadenaamostrar = `el numero 1 es ${numero1}, el numero 2 ${numero2} y el numero 3${numero3} <br>`;
if (numero1 > numero2 && numero1 > numero3) {
  cadenaamostrar += `el numero 1 es el mayor`}
  else if (numero2 > numero1 && numero2 > numero3) { 
  cadenaamostrar += `el numero 2 es el mayor`}
  else if (numero3 > numero1 && numero3 > numero2 ){ 
  cadenaamostrar += `el numero 3 es el mayor`}
  else{
  cadenaamostrar += `los 3 son iguales`
  }
document.getElementById("contenido").innerHTML = cadenaamostrar;
document.getElementById("contenido").style.color = "blue"
document.getElementById("contenido").style.fontSize = "20px"
document.getElementById("contenido").style.fontFamily = "Arial"