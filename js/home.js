function lightmode() {
  const theme = document.getElementById("body");
  theme.className = "theme-light";
}

function darkmode() {
  const theme = document.getElementById("body");
  theme.className = "theme-dark";
}

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
  text.innerText = "Health and hygiene are fundamental aspects of well-being and quality of life. NGOs play a significant role in promoting health and hygiene practices, particularly in communities facing challenges such as poverty, inadequate healthcare infrastructure, and lack of education. ";
}

function awareness() {
  const image = document.getElementById("gallery-image");
  const subheading = document.getElementById("gallery-subheading");
  const text = document.getElementById("gallery-text");
  image.src = "../images/home/h3.jpg";
  subheading.innerText = "Awareness";
  text.innerText = "Awareness of general hygine, women empowerment and other important health issues are very important.  ";
}

function care() {
  const image = document.getElementById("gallery-image");
  const subheading = document.getElementById("gallery-subheading");
  const text = document.getElementById("gallery-text");
  image.src = "../images/home/h1.jpeg";
  subheading.innerText = "Hygiene";
  text.innerText = "Hygine is very necessary. Specially for women, menstrunal hygine is very important for a healthy living. ";
}



