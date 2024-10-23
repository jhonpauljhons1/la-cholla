document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById('carousel');
    let currentIndex = 0;
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;
    const intervalTime = 3000; // Cambiar cada 3 segundos

    // Mostrar la imagen correspondiente
    function showImage(index) {
        currentIndex = (index + totalImages) % totalImages;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Cambiar a la imagen siguiente automáticamente
    function autoSlide() {
        currentIndex++;
        showImage(currentIndex);
    }

    // Iniciar el carrusel automático
    let slideInterval = setInterval(autoSlide, intervalTime);

    // Agregar eventos de los botones para la navegación manual
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    prev.addEventListener('click', () => {
        clearInterval(slideInterval); // Detener el carrusel automático cuando el usuario interactúe
        showImage(currentIndex - 1);
        slideInterval = setInterval(autoSlide, intervalTime); // Reiniciar el carrusel automático después de la interacción
    });

    next.addEventListener('click', () => {
        clearInterval(slideInterval); // Detener el carrusel automático cuando el usuario interactúe
        showImage(currentIndex + 1);
        slideInterval = setInterval(autoSlide, intervalTime); // Reiniciar el carrusel automático después de la interacción
    });
});
