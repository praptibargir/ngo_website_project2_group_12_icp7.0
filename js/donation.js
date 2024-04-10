

let slideIndex = 0;
carousel();

function carousel() {
    let i;
    const slides = document.querySelectorAll('.slider-container img');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(carousel, 3000);
}