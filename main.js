// Variable Declaration

let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confPass = document.getElementById("password_confirmation");
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
let confPassWarning = document.getElementById("confpass-warning");
let nxtBtn = document.querySelector(".next-btn");

let validUserName;
let validEmail;
let validPassword;
let validConfPass;

// Regular Expression Declaration

let regExpLetterNumber = /^[A-Za-z0-9]+$/;
let regExpEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
let regExpPassword = /^.{8,15}$/;

// Function Validate Profile Form

profileForm.addEventListener("submit", nextButtonSubmit);

function nextButtonSubmit(event) {
  event.preventDefault();
  console.log("enviando formulario");

  // Validate UserName

  if (userName.value === null || userName.value === "") {
    userNameWarning.innerHTML = "Please introduce an Username";
    userNameWarning.classList.toggle("input-warning");
  } else if (userName.value.length < 5 || userName.value.length > 20) {
    userNameWarning.innerHTML = "Please introduce an Username between 5 and 20 characters ";
    userNameWarning.classList.toggle("input-warning");
  } else if (!regExpLetterNumber.test(userName.value)) {
    userNameWarning.innerHTML = "Please only use letters and/or numbers ";
    userNameWarning.classList.toggle("input-warning");
  } else {
    validUserName = true;
    userNameWarning.innerHTML = null;
  }

  // Validate email

  if (email.value === null || email.value === "") {
    emailWarning.innerHTML = "Please introduce an email";
    emailWarning.classList.toggle("input-warning");
  } else if (email.value > 50) {
    emailWarning.innerHTML = "Email too Long";
    emailWarning.classList.toggle("input-warning");
  } else if (!regExpEmail.test(email.value)) {
    emailWarning.innerHTML = "Please introduce an valid Email";
    emailWarning.classList.toggle("input-warning");
  } else {
    validEmail = true;
    emailWarning.innerHTML = null;
  }

  // Validate Password

  if (password.value === null || password.value === "") {
    passwordWarning.innerHTML = "Please introduce a Password";
    passwordWarning.classList.toggle("input-warning");
  } else if (!regExpPassword.test(password.value)) {
    passwordWarning.innerHTML = "Please introduce a valid Password";
    passwordWarning.classList.toggle("input-warning");
  } else {
    validPassword = true;
    passwordWarning.innerHTML = null;
  }

  // Validate Confirm Password

  if (confPass.value === null || confPass.value === "") {
    confPassWarning.innerHTML = "Please introduce a Password";
    confPassWarning.classList.toggle("input-warning");
  } else if (validPassword == true && password.value != confPass.value) {
    confPassWarning.innerHTML = "Please introduce the same Password";
    confPassWarning.classList.toggle("input-warning");
  } else {
    validConfPass = true;
    confPassWarning.innerHTML = null;
  }

  if (validConfPass == true && validPassword == true && validEmail == true && validUserName == true) {
    console.log("hola");
    profileForm.classList.add("is-hidden");
    addressForm.classList.remove("is-hidden");
  }
}
