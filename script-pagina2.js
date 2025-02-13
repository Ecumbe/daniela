// Función para reproducir música de fondo
function reproducirMusica() {
    const musica = document.getElementById('musicaFondo');
    musica.play().catch(error => {
        console.log("La reproducción automática fue bloqueada. Haz clic en la página para reproducir.");
    });
}

// Mostrar el pop-up al cargar la página
window.onload = function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
};

// Cerrar el pop-up y reproducir la música
document.getElementById('cerrarPopup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    reproducirMusica(); // Reproducir música al cerrar el pop-up
});

// Función para crear estrellas
function crearEstrella() {
    const estrella = document.createElement('div');
    estrella.classList.add('estrella');

    // Posición aleatoria
    estrella.style.left = `${Math.random() * 100}%`;
    estrella.style.top = `${Math.random() * 100}%`;

    // Duración de la animación aleatoria
    const duracion = Math.random() * 2 + 1; // Entre 1 y 3 segundos
    estrella.style.animationDuration = `${duracion}s`;

    // Tamaño aleatorio
    const tamaño = Math.random() * 3 + 2; // Entre 2px y 5px
    estrella.style.width = `${tamaño}px`;
    estrella.style.height = `${tamaño}px`;

    // Añadir la estrella al contenedor
    document.getElementById('estrellas-container').appendChild(estrella);

    // Desaparecer y reaparecer la estrella en un nuevo lugar
    setTimeout(() => {
        estrella.remove();
        crearEstrella(); // Crear una nueva estrella
    }, duracion * 1000); // Desaparecer después de la duración de la animación
}

// Función para crear estrellas fugaces
function crearEstrellaFugaz() {
    const estrellaFugaz = document.createElement('div');
    estrellaFugaz.classList.add('estrella-fugaz');

    // Posición inicial aleatoria
    estrellaFugaz.style.left = `${Math.random() * 100}%`;
    estrellaFugaz.style.top = `${Math.random() * 100}%`;

    // Duración de la animación aleatoria
    const duracion = Math.random() * 2 + 1; // Entre 1 y 3 segundos
    estrellaFugaz.style.animationDuration = `${duracion}s`;

    // Añadir la estrella fugaz al contenedor
    document.getElementById('estrellas-fugaces-container').appendChild(estrellaFugaz);

    // Eliminar la estrella fugaz después de que termine la animación
    estrellaFugaz.addEventListener('animationend', () => {
        estrellaFugaz.remove();
    });
}

// Crear estrellas iniciales
for (let i = 0; i < 100; i++) { // Crear 100 estrellas iniciales
    crearEstrella();
}

// Crear estrellas fugaces cada 10 segundos (1 o 2 a la vez)
setInterval(() => {
    crearEstrellaFugaz();
    if (Math.random() > 0.7) { // 30% de probabilidad de crear una segunda estrella fugaz
        setTimeout(crearEstrellaFugaz, 500); // Segunda estrella fugaz después de 500ms
    }
}, 10000); // Intervalo de 10 segundos