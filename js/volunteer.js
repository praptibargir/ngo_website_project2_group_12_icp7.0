let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initial slide display
showSlide(currentSlide);

// Automatic slideshow
setInterval(nextSlide, 2000); // Change slides every 2 seconds


function expandCard(cardId) {
const expandedText = document.getElementById(`expandedText`);
const expandedTitle = document.getElementById(`expandedTitle`);
const expandedDescription = document.getElementById(`expandedDescription`);
const card = document.getElementById(cardId);

expandedTitle.innerText = card.querySelector('h2').innerText;
expandedDescription.innerText = card.querySelector('p').innerText;

const overlay = document.getElementById('overlay');
overlay.style.display = 'flex';

expandedText.style.display = "block";
}

function closeExpanded() {
const overlay = document.getElementById('overlay');
overlay.style.display = 'none';
}