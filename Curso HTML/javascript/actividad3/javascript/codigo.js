let radio = parseFloat(prompt("introduzca el radio (El numero NO LETRAS)"))
let longitud = 2*Math.PI * radio
let area = Math.PI * Math.pow(radio, 2) 
document.getElementById("contenido").innerHTML =
`la longitud de la circunferencia de radio  ${radio} cm <br>
es ${longitud.toFixed(2)} cm y el area es ${area.toFixed(2)} cm2`;
document.getElementById("contenido").style.color = "blue"
document.getElementById("contenido").style.fontSize = "20px"
document.getElementById("contenido").style.fontFamily = "Arial"

dibujarCanvas();
function dibujarCanvas(){
    const PIXELESPORCM = 37.795275591;
    var radioenpixeles = radio * PIXELESPORCM;

    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');
      // c. Arco desde 0 grados hasta 360 grados en sentido de las agujas del reloj
    contexto.lineWidth= 15;
     contexto.beginPath(); 
     contexto.arc(300,300,radioenpixeles,radianes('0'),radianes('360')); 
     contexto.stroke(); 
     contexto.fillStyle = "red";
     contexto.fill();
}
 function radianes(grados){
     var radianes = (Math.PI/180)*grados;
     return radianes;
}