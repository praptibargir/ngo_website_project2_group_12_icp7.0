function validation(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == null || username == "" ){
       alert("Name can't be Blank");
       return false;
    }
    else if(password.length<6){
        alert("Password must be at least 6 charcters long.");
        return false;
    }
}