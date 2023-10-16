function crearElementoCayendo() {
    // Crear un nuevo elemento
    var newElement = document.createElement('div');
    newElement.textContent = '🍁';
    newElement.classList.add('cayendo');

    // Posición aleatoria en la parte superior
    newElement.style.left = Math.random() * window.innerWidth + 'px';

    // Duración de la animación aleatoria
    var duration = Math.random() * 5 + 5;
    newElement.style.animationDuration = duration + 's';

    // Añadir el elemento al cuerpo del documento
    document.body.appendChild(newElement);

    // Eliminar el elemento después de que termine la animación
    setTimeout(function() {
        document.body.removeChild(newElement);
    }, duration * 1000);
}

// Crear un nuevo elemento cada segundo
setInterval(crearElementoCayendo, 1000);