let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-image');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initialize slider
showSlide(currentSlide);
