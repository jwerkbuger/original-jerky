let currentSlide = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.quiz-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    if (currentSlide < slides.length) {
        slides[currentSlide].classList.add('active');
    }
}

// Initialize the first slide
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.quiz-slide')[0].classList.add('active');
});
