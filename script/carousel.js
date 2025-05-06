document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.project-video');
    const descriptions = document.querySelectorAll('.project-description');
    const nextBtn = document.getElementById('btn-next');
    const prevBtn = document.getElementById('btn-prev');

    let currentIndex = 0;

    function updateCarousel(index) {
        videos.forEach((video, i) => {
            if (i === index) {
                video.classList.add('active');
            } else {
                video.classList.remove('active');
            }
        });

        const currentProject = videos[index].dataset.project;

        descriptions.forEach(desc => {
            if (desc.dataset.project === currentProject) {
                desc.classList.add('active');
            } else {
                desc.classList.remove('active');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % videos.length;
        updateCarousel(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
        updateCarousel(currentIndex);
    });
});