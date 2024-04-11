
//slider
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



// donation card
function donate(projectId) {
    let progressBarFill = document.querySelector('.progress-card:nth-child(' + projectId + ') .progress-bar-fill');
    let fundedText = document.querySelector('.progress-card:nth-child(' + projectId + ') .funded-text');
    let currentWidth = progressBarFill.style.width;
    currentWidth = parseInt(currentWidth.replace('%', ''));
    let newWidth = currentWidth + 10;
    progressBarFill.style.width = newWidth + '%';
    fundedText.textContent = newWidth + '% Funded';
}