/* --- Elements --- */

const $main = document.querySelector("main");
const $shippingForm = document.querySelector("#shipping-form");
const $finishContainer = document.querySelector(".finish-container");
const $progressBar = document.querySelector(".wizard__progress-bar");
const $stage = document.querySelector("[data-stage='3']");

const $typeFree = $shippingForm.querySelector("#typeFree");
const $typeExtra = $shippingForm.querySelector("#typeExtra");
const $typePremium = $shippingForm.querySelector("#typePremium");
const $isGiftChkBox = $shippingForm.querySelector("#gift");
const $giftMessage = $shippingForm.querySelector("#giftMessage");
const $giftWrapper = $shippingForm.querySelector("#giftWrapper");
const $currentDate = $shippingForm.querySelector("#currentDate");
const $limitDate = $shippingForm.querySelector("#limitDate");
const $deliveryDateSection = $shippingForm.querySelector(".delivery_date");

/* --- Dates --- */

let currentDate = new Date();
let currentDateFormat = currentDate.toUTCString();

let freeShippingDate = new Date();
freeShippingDate.setHours(freeShippingDate.getHours() + 72);
let freeShippingDateFormat = freeShippingDate.toUTCString();

let extraShippingDate = new Date();
extraShippingDate.setHours(extraShippingDate.getHours() + 48);
let extraShippingDateFormat = extraShippingDate.toUTCString();

let premiumShippingDate = new Date();
premiumShippingDate.setHours(premiumShippingDate.getHours() + 24);
let premiumShippingDateFormat = premiumShippingDate.toUTCString();

/* --- DOM Events --- */

/* Enable and disable gift options */

$isGiftChkBox.addEventListener("click", (event) => {
  if ($isGiftChkBox.checked) {
    $giftMessage.removeAttribute("disabled");
    $giftWrapper.removeAttribute("disabled");
  } else {
    $giftMessage.setAttribute("disabled", true);
    $giftWrapper.setAttribute("disabled", true);
  }
});

/* Display Delivery Date */

$typeFree.addEventListener("click", (event) => {
  $deliveryDateSection.classList.remove("is-hidden");
  $currentDate.innerHTML = currentDateFormat;
  $limitDate.innerHTML = freeShippingDateFormat;
});

$typeExtra.addEventListener("click", (event) => {
  $deliveryDateSection.classList.remove("is-hidden");
  $currentDate.innerHTML = currentDateFormat;
  $limitDate.innerHTML = extraShippingDateFormat;
});

$typePremium.addEventListener("click", (event) => {
  $deliveryDateSection.classList.remove("is-hidden");
  $currentDate.innerHTML = currentDateFormat;
  $limitDate.innerHTML = premiumShippingDateFormat;
});

/* Switch Form */

$shippingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  $shippingForm.classList.add("is-hidden");
  $finishContainer.classList.remove("is-hidden");
  $progressBar.value++;
  $stage.classList.add("is-completed");

  $main.dataset.currentDate = $currentDate.innerHTML || currentDateFormat;
  $main.dataset.limitDate = $limitDate.innerHTML || freeShippingDateFormat;
  $main.dataset.shippingPrice = $shippingForm.querySelector("[name='shipping']:checked")?.value || 0;
});
