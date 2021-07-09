/* --- Elements --- */

const $progressBar = document.querySelector(".wizard__progress-bar");
const $stage = document.querySelector("[data-stage='4']");
const $finishBuyBtn = document.querySelector(".finish-buyBtn");
let $finishForm = document.querySelector("#finish-form");
let $termsWarning = document.querySelector("#terms-warning");
let $termsCheckBox = document.querySelector("#termsChkBox");

$finishForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if ($termsCheckBox.checked) {
    $finishForm.innerHTML = "Gracias por su compra &#9829;";
    $progressBar.value++;
    $stage.classList.add("is-completed");
  } else {
    $termsWarning.innerHTML = "Please accept the terms and conditions";
    $termsWarning.classList.add("input-warning");
  }
});
