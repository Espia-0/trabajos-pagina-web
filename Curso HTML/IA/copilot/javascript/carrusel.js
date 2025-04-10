
// filepath: c:\Users\Educamos\Documents\trabajos pagina web\Curso HTML\IA\copilot\js\carrusel.js
let currentIndex = 0;

function showNextImage() {
    const carrusel = document.querySelector('.carrusel');
    const totalItems = document.querySelectorAll('.carrusel-item').length;
    currentIndex = (currentIndex + 1) % totalItems;
    carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos