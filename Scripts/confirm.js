image_arr = ["sanjeet_chand.jpg", "eliud_mudiwa.jpg", "dorine_helen.jpg"];
window.onload = function () {
  random_Image();
  let firstName = JSON.parse(window.localStorage.getItem("FirstName"));
  let lastName = JSON.parse(window.localStorage.getItem("LastName"));
  let mail = JSON.parse(window.localStorage.getItem("Mail"));
  let dateOfAppointment = JSON.parse(window.localStorage.getItem("Date"));
  let people = JSON.parse(window.localStorage.getItem("Patient"));

  document.getElementById("name").innerHTML = `Name:- ${
    firstName + " " + lastName
  }`;
  document.getElementById("mail").innerHTML = `Email:- ${mail}`;
  document.getElementById("dapp").innerHTML = `Date:- ${dateOfAppointment}`;
  document.getElementById("patient").innerHTML = `Max Patient:- ${people}`;
};

function random_Image() {
  index = Math.floor(Math.random() * image_arr.length);

  selected_image = image_arr[index];

  document.getElementById("random_image").src = `./Image/${selected_image}`;

  if (selected_image == "sanjeet_chand.jpg") {
    document.getElementById("app_doc").innerHTML =
      "Your appointed doctor is:- Dr. Sanjeet Chand";
    document.getElementById("app_doc1").innerHTML =
      "Your appointment has been booked with Dr. Sanjeet Chand.";
    document.getElementById("time").innerHTML = "Time:-8am - 11:30am";
  } else if (selected_image == "dorine_helen.jpg") {
    document.getElementById("app_doc").innerHTML =
      "Your appointed doctor is:- Dr. Dorine Helen";
    document.getElementById("app_doc1").innerHTML =
      "Your appointment has been booked with Dr. Dorine Helen.";
    document.getElementById("time").innerHTML = "Time:-012:30pm - 4:00pm";
  } else {
    document.getElementById("app_doc").innerHTML =
      "Your appointed doctor is:- Dr. Eliud Mudiwa";
    document.getElementById("app_doc1").innerHTML =
      "Your appointment has been booked with Dr. Eliud Mudiwa.";
    document.getElementById("time").innerHTML = "Time:-5pm - 7pm";
  }
}
function home() {
  alert("You are being redirected to Home page");
  location.href = "./index.html";
}
