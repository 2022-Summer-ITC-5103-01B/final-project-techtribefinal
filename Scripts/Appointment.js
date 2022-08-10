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
  let UserDate = document.getElementById("date");
  let noOfPatient = document.getElementById("patient");
  let text = noOfPatient.options[noOfPatient.selectedIndex].text;

  let numberOfPatient = window.localStorage.setItem(
    "Patient",
    JSON.stringify(noOfPatient.value)
  );
  let first = window.localStorage.setItem(
    "FirstName",
    JSON.stringify(fname2.value)
  );
  let email = window.localStorage.setItem("Mail", JSON.stringify(mail.value));

  let last = window.localStorage.setItem(
    "LastName",
    JSON.stringify(lname2.value)
  );

  let date = window.localStorage.setItem(
    "Date",
    JSON.stringify(UserDate.value)
  );
  document
    .getElementById("update_form")
    .addEventListener("submit", function (e) {
      if (!fname2.value && !lname2.value && !mail.value && !UserDate) {
        // You should check other inputs if you have.
        e.preventDefault();
        return false;
      }
      // Do nothing, the form will be submitted.
    });

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

  let ToDate = new Date();

  if (new Date(UserDate).getTime() <= ToDate.getTime()) {
    alert("The Date must be Bigger or Equal to today date");
  } else if ((UserDate = "")) {
    UserDate.style.border = "3px solid red";
  } else {
    return true;
  }
}
