window.onload = function () {
  document.getElementById("submit").onclick = validate;
  console.log("working");
};

function validate() {
  //alert('in function');
  let fname2 = document.querySelector("#fname");
  let namepattern = /^[a-zA-Z]{3,30}$/;
  let lname2 = document.querySelector("#lname");
  let mail = document.querySelector("#email");

  //console.log(fname2.parentNode.children);
  if (fname2.value == "") {
    fname2.placeholder = "Please enter first name";
    fname2.style.border = "3px solid red";
  } else if (!namepattern.test(fname2.value)) {
    fname2.placeholder = "Please enter first name with letter only";
    fname2.style.border = "3px solid red";
  }

  if (lname2.value == "") {
    lname2.placeholder = "Please enter your last name";
    lname2.style.border = "3px solid red";
  } else if (!namepattern.test(lname2.value)) {
    lname2.placeholder = "Please enter your last name with letters only";
    lname2.style.border = "3px solid red";
  }
  if (mail.value == "") {
    mail.placeholder = "Email required";
    mail.style.border = "3px solid red";
  }
  var UserDate = document.getElementById("date").value;
  var ToDate = new Date();
  console.log(UserDate);
  if (new Date(UserDate).getTime() <= ToDate.getTime()) {
    alert("The Date must be Bigger or Equal to today date");
  } else if ((UserDate = "")) {
    lname2.style.border = "3px solid red";
  } else {
    return true;
  }
}
