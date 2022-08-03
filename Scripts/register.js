windows.onload = function (){
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

   //Username
    if(name2.value == ''){
        alert('Error: Please enter the Username');
        return false;
    }
    else if(!pattern.test(name2.value)){
        alert('Error: Plese enter username with letters');
        return false;
    }
    else{
         alert('Success: Valid Username!!');
    }

    //Fullname
    if(last2.value == ''){
        alert('Error: Please enter the full-name');
        return false;
    }
    else if(!pattern.test(last2.value)){
        alert('Error: Please enter full-name with letters');
        return false;
    }
    else{
      alert('Success: Valid Full name!!');
    }

    //Mobilenumber
    if(mobile2.value == ''){
        alert('Error: Please enter the mobile number');
        return false;
    }

    else if(!pattern3.test(mobile2.value)){
        alert('Error: The mobile number should be of 10 digits or should not contain any negative values!!');
        return false;
    }
    else{
        alert('Success: Valid mobile number!!');
        
    }

    //E-mail
    if(email2.value == ''){
        alert('Error: Please enter the E-MAIL address');
        return false;
    }
    else if(!pattern4.test(email2.value)){
        alert('Error: Invalid E-MAIL address!');
        return false;
    }
    else{
        alert('Success: Valid E-MAIL address!!');
    }

    //Password
    if(pswd2.value == ''){
        alert('Error: Please enter the password');
        return false;
    }
    else if(!pattern5.test(pswd2.value)){
        alert('Error: The password should  be at least between 6 - 20 characters and contain at least 1 numeric digit, 1 upper and lower case');
        return false;
    }
    else{
        alert('Success: Strong Password!');
    }

    if(reppswd2.value != pswd2.value){
        alert('Error: Password does not matches!!');
        return false;
    }
    else{
        alert('Success: Password Matched!! ');
        window.location = "./success.html";
        return false;

    }

}
 