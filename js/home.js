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

function inc(){
  const num=document.getElementById("num1");
  let number=parseInt(num.innerText);
  if (number<1000){
    num.innerText=++number;
    alert("Thankyou For Liking");
  } 
}

function dec(){
  const num=document.getElementById("num2");
  let number=parseInt(num.innerText);
  if (number<=1000){
    num.innerText=++number;  
    alert("We apologise for your inconvenience");  
  }
}
