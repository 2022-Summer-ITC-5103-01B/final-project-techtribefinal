//Variable to count number of attempts.
var attempt = 3;
//function to execute the onclick button
window.onload = function(){
    document.getElementById('submit').onclick = validate;
}
function validate(){
    let username2 = document.querySelector('#username');
    let password2 = document.querySelector('#password');
    let pattern = /^[a-zA-Z]{3,30}$/;

    if(username2.value == ''){
        alert('Please enter the username');
        return false;
    }
    else if(!pattern.test(username2.value)){
        alert('The username should consist of letters');
        return false;
    }
    else{
        alert('Valid Username');
}

if(password2.value== ''){
    alert('Error: Input the Password!');
    attempt--;
    alert("Warning: You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
        }
}
else{
    alert('Log in sucessful!');
    //redirecting to the next page.
    window.location = "./Home.html";
    return false;
}
}

