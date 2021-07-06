var userName = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordConfirmation = document.getElementById("password_confirmation");
var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var birthDate = document.getElementById("birthdate");
var address_1 = document.getElementById("address_1");
var address_2 = document.getElementById("address_2");
var zipCode = document.getElementById("zipcode");
var phoneNumber = document.getElementById("phonenumber");
var profileForm = document.getElementById("profile-form");
var addressForm = document.getElementById("address-form");
var nxtBtn = document.querySelector(".next-btn");





nxtBtn.addEventListener("click", nextButtonSubmit);

function nextButtonSubmit() {
    
  
  
  profileForm.classList.toggle("is-hidden");
  addressForm.classList.toggle("is-hidden");
}

