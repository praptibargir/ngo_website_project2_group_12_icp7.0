
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

// stars 
const stars = document.querySelectorAll(".stars i");
        const sendReviewButton = document.querySelector(".send-review-button button");

        stars.forEach((star, index1) => {
            star.addEventListener("mouseover", () => {
                stars.forEach((star, index2) => {
                    index1 >= index2
                        ? (star.style.transform = "scale(1.2)")
                        : (star.style.transform = "scale(1)");
                });
            });
            star.addEventListener("mouseout", () => {
                star.style.transform = "scale(1)";
            });
            star.addEventListener("click", () => {
                stars.forEach((star, index2) => {
                    index1 >= index2
                        ? star.classList.add("active")
                        : star.classList.remove("active");
                });
                // Enable send review button if at least one star is selected
                sendReviewButton.disabled = false;
            });
        });

        function showMessage() {
            const message = document.getElementById("message");
            message.style.display = "block";
            // Hide stars and review button
            const starsContainer = document.querySelector(".stars");
            const reviewButton = document.querySelector(".send-review-button");
            starsContainer.style.display = "none";
            reviewButton.style.display = "none";
            // Hide h2
            const h2 = document.querySelector(".container-star h2");
            h2.style.display = "none";
        }


        //successful campaigns
        function freeEdu() {
            const image = document.getElementById("gallery-image");
            const subheading = document.getElementById("gallery-subheading");
            const text = document.getElementById("gallery-text");
            image.src = "../images/home/h5.jpg";
            subheading.innerText = "Free Education";
            text.innerText = "'Education for All' is a noble cause. Access to Education, Equitable Education, Quality Education, Early Childhood Education, etc.";
          }
          
          function womenEmp() {
            const image = document.getElementById("gallery-image");
            const subheading = document.getElementById("gallery-subheading");
            const text = document.getElementById("gallery-text");
            image.src = "../images/home/h2.jpg";
            subheading.innerText = "Women Empowerment";
            text.innerText = "Women empowerment is a multifaceted concept that encompasses various aspects of enhancing the social, economic, political, and psychological status of women, enabling them to participate fully and equally in society. ";
          }
          
          function health() {
            const image = document.getElementById("gallery-image");
            const subheading = document.getElementById("gallery-subheading");
            const text = document.getElementById("gallery-text");
            image.src = "../images/home/h4.jpg";
            subheading.innerText = "Health";
            text.innerText = "Health is a fundamental aspects of well-being and quality of life.We play a significant role in promoting health and hygiene practices, particularly in communities facing challenges such as poverty, inadequate healthcare infrastructure, and lack of education. ";
          }
          
          function awareness() {
            const image = document.getElementById("gallery-image");
            const subheading = document.getElementById("gallery-subheading");
            const text = document.getElementById("gallery-text");
            image.src = "../images/home/h3.jpg";
            subheading.innerText = "Awareness";
            text.innerText = "An awareness campaign conducted by an NGO can be a powerful tool to educate communities about important issues such as hygiene, sanitation, public health, and environmental sustainability. ";
          }
          
          function care() {
            const image = document.getElementById("gallery-image");
            const subheading = document.getElementById("gallery-subheading");
            const text = document.getElementById("gallery-text");
            image.src = "../images/home/h1.jpeg";
            subheading.innerText = "Hygiene";
            text.innerText = "We promote hygiene practices and improving sanitation, particularly in regions where access to clean water and sanitation facilities is limited. ";
          }