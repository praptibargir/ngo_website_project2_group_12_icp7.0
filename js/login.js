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


//
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
        let isAnyFieldEmpty = false;

        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                isAnyFieldEmpty = true;
            }
        });

        if (isAnyFieldEmpty) {
            // Show the popup or alert
            alert('All fields are required!');
        } else {
            // Submit the form
            form.submit();
        }
    });
});
