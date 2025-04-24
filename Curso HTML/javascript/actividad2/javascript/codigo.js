let nombre = prompt("introduzca el nombre de la persona")
let anodenacimiento = parseInt(prompt("introduzca el año de nacimiento"))
let anos = new Date().getFullYear() - anodenacimiento
let mensajecorrupto = parseInt("tu numero favroito porfi :)")
alert("gracias")
document.getElementById("contenido").innerHTML =
`hola ${nombre} tienes ${anos} años`
document.getElementById("contenido").style.color = "blue"
document.getElementById("contenido").style.fontSize = "20px"
document.getElementById("contenido").style.fontFamily = "Arial"
