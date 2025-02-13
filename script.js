// Función para crear pétalos
function crearPetalo() {
    const petalo = document.createElement('img');
    petalo.src = `petalo/petalo${Math.floor(Math.random() * 5) + 1}.png`; // Cambia el número 5 por la cantidad de imágenes de pétalos que tengas
    petalo.classList.add('petalo');

    // Posición horizontal aleatoria
    petalo.style.left = `${Math.random() * 100}%`;

    // Duración de la animación aleatoria (entre 4 y 6 segundos)
    const duracion = Math.random() * 2 + 4; // Entre 4 y 6 segundos
    petalo.style.animationDuration = `${duracion}s`;

    // Tamaño aleatorio
    const tamaño = Math.random() * 40 + 20; // Entre 20px y 60px
    petalo.style.width = `${tamaño}px`;

    // Rotación aleatoria inicial
    const rotacionInicial = Math.random() * 360; // Entre 0 y 360 grados
    petalo.style.transform = `rotate(${rotacionInicial}deg)`;

    // Añadir el pétalo al contenedor
    document.getElementById('petalos-container').appendChild(petalo);

    // Eliminar el pétalo después de que termine la animación
    petalo.addEventListener('animationend', () => {
        petalo.remove();
    });
    
}

// Crear pétalos cada 300ms (más rápido)
setInterval(crearPetalo, 300);
// Redireccionar a la segunda página al hacer clic en el botón
document.getElementById('siguienteBtn').addEventListener('click', () => {
    window.location.href = 'pagina2.html'; // Cambia "pagina2.html" por el nombre de tu segunda página
});