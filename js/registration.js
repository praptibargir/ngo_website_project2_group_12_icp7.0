function validate() {
    let username = document.getElementById("applicant-name").value;
    let PanNO = document.getElementById("PAN-no").value;
    let Email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobileNo = document.getElementById("mobile-no").value;

    if (username === null || username === "") {
        alert("Name can't be Blank");
        return false;
    }
    else if(PanNO === ""){
        alert("Please Enter Your PAN Number");
        return false;
    }
    else if(Email === "" || !Email.includes('@')){
        alert("Please Enter a valid E-Mail Address");
        return false;
    }
    else if(password === "" || password.length < 6){
        alert("Password must be at least 6 charcters long.");
        return false;
    }
    else if(mobileNo === ""){
        alert("Enter MObile Number");
        return false;
    }
    else if(username != "" || PanNO != "" || Email != "" || password != "" || mobileNo != "" ){
        alert("All Information Should be Submitted");
        return false;
    }
}

function reset(){
    let username = document.getElementById("applicant-name").value;
    let PanNO = document.getElementById("PAN-no").value;
    let HeadName = document.getElementById("head-name").value;
    let Email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobileNo = document.getElementById("mobile-no").value;

    username.value = "";    
    PanNO.value = "";
    HeadName.value = "";
    Email.value = "";
    password.value = "";
    mobileNo .value = "";
}



