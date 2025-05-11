window.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const container = document.getElementById('carousel-container');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    const totalSlides = carousel.children.length;
    let currentIndex = 0;

    function updateSlide() {
        const slideWidth = container.offsetWidth;
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function moveSlide(direction) {
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        updateSlide();
    }

    prevBtn.addEventListener('click', () => moveSlide(-1));
    nextBtn.addEventListener('click', () => moveSlide(1));
    window.addEventListener('resize', updateSlide);
});
