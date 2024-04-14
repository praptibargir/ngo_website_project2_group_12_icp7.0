//light and dark theme
function lightmode() {
    const theme = document.getElementById("body");
    theme.className = "theme-light";
  }
  
  function darkmode() {
    const theme = document.getElementById("body");
    theme.className = "theme-dark";
  }

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
                        ? star.classList.add("active-1")
                        : star.classList.remove("active-1");
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

          //
          let currentIndex = 0;
        const images = [
            "https://www.ryangroup.org/public/images/front_end/engagement_events_thumnail/cooking%20_1601567190.jpg", "https://stdominicsavio.com/wp-content/uploads/2022/07/02-24.jpg", "https://www.fis.school/files/news/WhatsApp%20Image%202019-07-23%20at%2009.59.34.jpeg"
            // Add more image URLs as needed
        ];

        const subheadings = ["Education For All ", "Education For Girls", "Hygiene", "Health Awareness", "Women Empowerment"];
        const texts = [
            "'Education for All' is a noble cause. Access to Education, Equitable Education, Quality Education, Early Childhood Education, etc.",
            "Women empowerment is a multifaceted concept that encompasses various aspects of enhancing the social, economic, political, and psychological status of women, enabling them to participate fully and equally in society.",
            "Health and hygiene are fundamental aspects of well-being and quality of life. NGOs play a significant role in promoting health and hygiene practices, particularly in communities facing challenges such as poverty, inadequate healthcare infrastructure, and lack of education.",
            "Awareness of general hygine, women empowerment and other important health issues are very important.",
            "Hygine is very necessary. Specially for women, menstrunal hygine is very important for a healthy living."
        ];

        function showSlide(index) {
            const image = document.getElementById("gallery-image");
            const subheading = document.getElementById("gallery-subheading");
            const text = document.getElementById("gallery-text");

            image.src = images[index];
            subheading.innerText = subheadings[index];
            text.innerText = texts[index];
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }

        // Automatically switch to the next slide every 5 seconds (5000 milliseconds)
        setInterval(nextSlide, 2000);

        // Initial display of the first slide
        showSlide(currentIndex);

        function freeEdu() {
            const image = document.getElementById("gallery-image");
            const subheading = document.getElementById("gallery-subheading");
            const text = document.getElementById("gallery-text");
            image.src = "https://media.istockphoto.com/id/839295596/photo/six-pre-teen-friends-piggybacking-in-a-park-close-up-portrait.jpg?s=612x612&w=0&k=20&c=MWkFYzpRSvO1dRql3trV4k6ECO-rTy4HgF8OxrtUkH8=";
            subheading.innerText = "Education For All";
            text.innerText = "'Education for All' is a noble cause. Access to Education, Equitable Education, Quality Education, Early Childhood Education, etc.",
                "Women empowerment is a multifaceted concept that encompasses various aspects of enhancing the social, economic, political, and psychological status of women, enabling them to participate fully and equally in society.",
                "Health and hygiene are fundamental aspects of well-being and quality of life. NGOs play a significant role in promoting health and hygiene practices, particularly in communities facing challenges such as poverty, inadequate healthcare infrastructure, and lack of education.",
                "Awareness of general hygine, women empowerment and other important health issues are very important.",
                "Hygine is very necessary. Specially for women, menstrunal hygine is very important for a healthy living.";
        }

        function womenEmp() {
            const image = document.getElementById("gallery-image");
            const subheading = document.getElementById("gallery-subheading");
            const text = document.getElementById("gallery-text");
            image.src = "https://t4.ftcdn.net/jpg/04/11/19/61/360_F_411196155_bAztsXMFRSprbiFP8mWtDIG6WNVJCg6d.jpg";
            subheading.innerText = "Education For Girls";
            text.innerText = "Education for All' is a noble cause. Access to Education, Equitable Education, Quality Education, Early Childhood Education, etc.",
                "Women empowerment is a multifaceted concept that encompasses various aspects of enhancing the social, economic, political, and psychological status of women, enabling them to participate fully and equally in society.",
                "Health and hygiene are fundamental aspects of well-being and quality of life. NGOs play a significant role in promoting health and hygiene practices, particularly in communities facing challenges such as poverty, inadequate healthcare infrastructure, and lack of education.",
                "Awareness of general hygine, women empowerment and other important health issues are very important.",
                "Hygine is very necessary. Specially for women, menstrunal hygine is very important for a healthy living. ";
        }

        function health() {
            const image = document.getElementById("gallery-image");
            const subheading = document.getElementById("gallery-subheading");
            const text = document.getElementById("gallery-text");
            image.src = "https://media.istockphoto.com/id/839295596/photo/six-pre-teen-friends-piggybacking-in-a-park-close-up-portrait.jpg?s=612x612&w=0&k=20&c=MWkFYzpRSvO1dRql3trV4k6ECO-rTy4HgF8OxrtUkH8=";
            subheading.innerText = "Women Empowerment";
            text.innerText = "Education for All' is a noble cause. Access to Education, Equitable Education, Quality Education, Early Childhood Education, etc.",
                "Women empowerment is a multifaceted concept that encompasses various aspects of enhancing the social, economic, political, and psychological status of women, enabling them to participate fully and equally in society.",
                "Health and hygiene are fundamental aspects of well-being and quality of life. NGOs play a significant role in promoting health and hygiene practices, particularly in communities facing challenges such as poverty, inadequate healthcare infrastructure, and lack of education.",
                "Awareness of general hygine, women empowerment and other important health issues are very important.",
                "Hygine is very necessary. Specially for women, menstrunal hygine is very important for a healthy living. ";
        }

        function awareness() {
            const image = document.getElementById("gallery-image");
            const subheading = document.getElementById("gallery-subheading");
            const text = document.getElementById("gallery-text");
            image.src = "https://media.istockphoto.com/id/839295596/photo/six-pre-teen-friends-piggybacking-in-a-park-close-up-portrait.jpg?s=612x612&w=0&k=20&c=MWkFYzpRSvO1dRql3trV4k6ECO-rTy4HgF8OxrtUkH8=";
            subheading.innerText = "event 4";
            text.innerText = "Awareness of general hygine, women empowerment and other important health issues are very important.  ";
        }

        function care() {
            const image = document.getElementById("gallery-image");
            const subheading = document.getElementById("gallery-subheading");
            const text = document.getElementById("gallery-text");
            image.src = "https://media.istockphoto.com/id/839295596/photo/six-pre-teen-friends-piggybacking-in-a-park-close-up-portrait.jpg?s=612x612&w=0&k=20&c=MWkFYzpRSvO1dRql3trV4k6ECO-rTy4HgF8OxrtUkH8=";
            subheading.innerText = "event 5";
            text.innerText = "Hygine is very necessary. Specially for women, menstrunal hygine is very important for a healthy living. ";
        }


        // donation
        function donate(projectId) {
            let donationAmount = prompt("How much do you want to donate?");
            if (donationAmount != null && donationAmount != "") {
              
                let donation = parseFloat(donationAmount);
        
                let totalDonationElement = document.querySelector('.progress-card:nth-child(' + projectId + ') .colour-red');
                let currentTotal = parseFloat(totalDonationElement.textContent.replace('Total Donation:', '').trim());
                let newTotal = currentTotal + donation;
                totalDonationElement.textContent = 'Total Donation:' + newTotal;
        
               
                let progressBar = document.querySelector('.progress-card:nth-child(' + projectId + ') .progress-bar-fill');
                let currentWidth = parseFloat(progressBar.style.width);
                let currentFunded = parseFloat(document.querySelector('.progress-card:nth-child(' + projectId + ') .funded-text').textContent.replace('% Funded', ''));
                
                
                let newWidth = ((currentWidth / currentFunded) * (currentFunded + (donation / newTotal) * 100)).toFixed(2);
                let newFunded = ((currentFunded + (donation / newTotal) * 100)).toFixed(0);
        
                
                if (newFunded > 100) {
                    newFunded = 100;
                }
        
                
                progressBar.style.width = newWidth + '%';
                document.querySelector('.progress-card:nth-child(' + projectId + ') .funded-text').textContent = newFunded + '% Funded';
            }
        }
        
    