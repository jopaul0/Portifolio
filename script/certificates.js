let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Atualiza o índice atual com base na direção
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Move o carrossel para o item atual
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
