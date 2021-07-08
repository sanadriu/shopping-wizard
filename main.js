// Variable Declaration

let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordConfirmation = document.getElementById("password_confirmation");
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let birthDate = document.getElementById("birthdate");
let address_1 = document.getElementById("address_1");
let address_2 = document.getElementById("address_2");
let zipCode = document.getElementById("zipcode");
let phoneNumber = document.getElementById("phonenumber");
let profileForm = document.getElementById("profile-form");
let addressForm = document.getElementById("address-form");
let userNameWarning = document.getElementById("username-warning");
let emailWarning = document.getElementById("email-warning");
let passwordWarning = document.getElementById("password-warning");
let nxtBtn = document.querySelector(".next-btn");

// Regular Expression Declaration

let regExpLetterNumber = /^[A-Za-z0-9]+$/;
let regExpEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
let regExpPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,15}$/;
// Function Validate Profile Form -------------------------------------------

profileForm.addEventListener("submit", nextButtonSubmit);

function nextButtonSubmit(event) {
  event.preventDefault();
  console.log("enviando formulario");

  // Validate UserName --------------------------------------------

  if (userName.value === null || userName.value === "") {
    userNameWarning.innerHTML = "Please introduce an Username";
    userNameWarning.style.backgroundColor = "lightgray";
    userNameWarning.style.color = "red";
    userNameWarning.style.fontSize = "0.8rem";
  }

  if (userName.value.length < 5 || userName.value.length > 20) {
    userNameWarning.innerHTML = "Please introduce an Username between 5 and 20 characters ";
    userNameWarning.style.backgroundColor = "lightgray";
    userNameWarning.style.color = "red";
    userNameWarning.style.fontSize = "0.8rem";
  }
  console.log(regExpLetterNumber.test(userName.value));
  if (!regExpLetterNumber.test(userName.value)) {
    userNameWarning.innerHTML = "Please only use letters and/or numbers ";
    userNameWarning.style.backgroundColor = "lightgray";
    userNameWarning.style.color = "red";
    userNameWarning.style.fontSize = "0.8rem";
  }

  // Validate email ---------------------------------------------
  if (email.value === null || email.value === "") {
    emailWarning.innerHTML = "Please introduce an email";
    emailWarning.style.backgroundColor = "lightgray";
    emailWarning.style.color = "red";
    emailWarning.style.fontSize = "0.8rem";
  }

  if (email.value > 50) {
    emailWarning.innerHTML = "Email too Long";
    emailWarning.style.backgroundColor = "lightgray";
    emailWarning.style.color = "red";
    emailWarning.style.fontSize = "0.8rem";
  }

  if (!regExpEmail.test(email.value)) {
    emailWarning.innerHTML = "Please introduce an valid Email";
    emailWarning.style.backgroundColor = "lightgray";
    emailWarning.style.color = "red";
    emailWarning.style.fontSize = "0.8rem";
  }

  // Validate Password

  if (password.value === null || password.value === "") {
    passwordWarning.innerHTML = "Please introduce a Password";
    passwordWarning.style.backgroundColor = "lightgray";
    passwordWarning.style.color = "red";
    passwordWarning.style.fontSize = "0.8rem";
  }
  if (!regExpPassword.test(password.value)) {
    passwordWarning.innerHTML = "Please introduce a valid Password";
    passwordWarning.style.backgroundColor = "lightgray";
    passwordWarning.style.color = "red";
    passwordWarning.style.fontSize = "0.8rem";
  } else {
    userNameWarning.innerHTML = "Username Enviado";
    userNameWarning.style = null;
    emailWarning.innerHTML = "email Enviado";
    emailWarning.style = null;
    passwordWarning.innerHTML = " password Enviado";
    passwordWarning.style = null;
    console.log(userName.value);
    return true;
  }
}
