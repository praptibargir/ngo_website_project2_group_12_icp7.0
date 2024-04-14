function reset(){

    const input1 = document.getElementById("info");



    const ansElement = document.getElementById("ans");

    input1.value="";


    ansElement.innerText = ""
  }


  function lightmode() {
    const theme = document.getElementById("body");
    theme.className = "theme-light";
  }
  
  function darkmode() {
    const theme = document.getElementById("body");
    theme.className = "theme-dark";
  }
