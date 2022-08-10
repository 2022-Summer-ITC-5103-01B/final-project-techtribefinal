
//function to execute the onclick button
window.onload = function(){
    document.getElementById('submit').onclick = validate;
}
function validate(){
    let userName = JSON.parse(window.localStorage.getItem("UserName"));
console.log(userName);
let password  = JSON.parse(window.localStorage.getItem("Password"));
console.log(password);

    let username2 = document.getElementById("username");
    let password2 = document.getElementById("password");
    console.log(username2.value);
    console.log(password2.value);
   
   
    if(username2.value==userName && password==password2.value){
        
            window.location = "./index.html";
        
        }
        else{
            alert("Informations not registered");
    }
     if(username2.value == ''){
         alert('Error: Please enter the username');
         return false;
     }


if(password2.value== ''){
    alert('Error: Input the Password!');

}

}

