function validation(){
    let Username = document.getElementById("username").value;
    let Password = document.getElementById("password").value;

    if(Username === null || Username === "" ){
       alert("Name can't be Blank");
       return false;
    }
    else if(Password.length<6){
        alert("Password must be at least 6 charcters long.");
        return false;
    }
    else if(Username != "" || Password != ""){
        alert("Login Information Submitted");
        return false;
    }
}

function Reset(){
    let Username = document.getElementById("username").value;
    let Password = document.getElementById("password").value;

    username.value  = "" ;
    password.value  = "" ;
}

