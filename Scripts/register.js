window.onload = function (){
document.getElementById('submit').onclick = validate;

}


 function validate (){
    let name2 = document.querySelector('#name');
    let pattern = /^[a-zA-Z]{3,30}$/;

    let last2 = document.querySelector('#last');

    let mobile2 = document.querySelector('#mobile');
    let pattern3 = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    let email2 = document.querySelector('#email');
    let pattern4 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let pswd2 = document.querySelector('#pswd');
    let pattern5 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    let reppswd2 = document.querySelector('#rep-pswd');
    let btn = document.getElementById('submit');

    let name  = window.localStorage.setItem("UserName", JSON.stringify(name2.value));
    let password  = window.localStorage.setItem("Password", JSON.stringify(pswd2.value));
   


   //Username
    if(name2.value == '' ){
        alert('Error: Please enter the Username');
        return false;
    }
    else if(!pattern.test(name2.value)){
        alert('Error: Plese enter username with letters');
        return false;
    }
   

    //Fullname
    else if(last2.value == ''){
        alert('Error: Please enter the full-name');
        return false;
    }
    else if(!pattern.test(last2.value)){
        alert('Error: Please enter full-name with letters');
        return false;
    }
    

    //Mobilenumber
    else if(mobile2.value == ''){
        alert('Error: Please enter the mobile number');
        return false;
    }

    else if(!pattern3.test(mobile2.value)){
        alert('Error: The mobile number should be of 10 digits or should not contain any negative values!!');
        return false;
    }
    

    //E-mail
    else if(email2.value == ''){
        alert('Error: Please enter the E-MAIL address');
        return false;
    }
    else if(!pattern4.test(email2.value)){
        alert('Error: Invalid E-MAIL address!');
        return false;
    }
    
    //Password
    else if(pswd2.value == ''){
        alert('Error: Please enter the password');
        return false;
    }
    else if(!pattern5.test(pswd2.value)){
        alert('Error: The password should  be at least between 6 - 20 characters and contain at least 1 numeric digit, 1 upper and lower case');
        return false;
    }
   
//Password Match
   else if(reppswd2.value != pswd2.value){
        alert('Error: Password does not matches!!');
        return false;
    }
    else{
        alert('Success: You are registered!! ');
        window.location = "./success.html";
        return false;

    }

}
 