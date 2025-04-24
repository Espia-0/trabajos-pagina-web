let nombre = prompt("introduzca el nombre de la persona")
let edadpersona = parseInt(prompt("introduzca la edad (NO MAYOR A 120)"))
let cadenaamostrar;
if (edadpersona < 0 || edadpersona > 120) {
  cadenaamostrar = `hola parece que la edad introducida es incorrecta`
} else{ 
if (edadpersona < 18) {
  cadenaamostrar = `hola ${nombre} tienes ${edadpersona} y eres menor de edad`}

  else{cadenaamostrar = `hola ${nombre} tienes ${edadpersona} y eres mayor de edad`
  }
}
  document.getElementById("contenido").innerHTML = cadenaamostrar;
document.getElementById("contenido").style.color = "blue"
document.getElementById("contenido").style.fontSize = "20px"
document.getElementById("contenido").style.fontFamily = "Arial"