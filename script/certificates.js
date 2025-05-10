const carousel = document.getElementById('carousel');
const container = document.getElementById('carouselContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

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
window.addEventListener('DOMContentLoaded', () => {
    prevBtn.addEventListener('click', () => moveSlide(-1));
    nextBtn.addEventListener('click', () => moveSlide(1));
    window.addEventListener('resize', updateSlide);
});
