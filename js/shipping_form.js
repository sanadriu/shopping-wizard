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
const $currentDate = $shippingForm.querySelector(".currentDate");
const $limitDate = $shippingForm.querySelector(".limitDate");
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

/* --- Set Order Details --- */

function setOrderDetails() {
  $finishContainer.querySelector(".finish-your-purchase__product-title").textContent = $main.dataset.productName;
  $finishContainer.querySelector(".finish-your-purchase__product-property--size").innerHTML = `Size: <b>${$main.dataset.productSize}</b>`;
  $finishContainer.querySelector(".finish-your-purchase__product-property--color").innerHTML = `Color: <b>${$main.dataset.productColor}</b>`;
  $finishContainer.querySelector(".finish-your-purchase__shipping-date > .currentDate").textContent = $currentDate.textContent || currentDateFormat;
  $finishContainer.querySelector(".finish-your-purchase__shipping-date > .limitDate").textContent = $limitDate.textContent || freeShippingDateFormat;
  $finishContainer.querySelector(".finish-your-purchase__price--product").innerHTML = `Cap price: <b>${$main.dataset.productPrice}</b>€`;
  $finishContainer.querySelector(".finish-your-purchase__price--shipping").innerHTML = `Shipping cost: <b>${$main.dataset.shippingPrice || 0}</b>`;
  $finishContainer.querySelector(".finish-your-purchase__price--total").innerHTML = `Total: <b>${parseFloat($main.dataset.productPrice) + (parseFloat($main.dataset.shippingPrice) || 0)}</b>`;
  $finishContainer.querySelector(".finish-your-purchase__product-image").setAttribute("src", $main.querySelector(".product__view-thumbnail").getAttribute("src"));
}

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
  $currentDate.textContent = currentDateFormat;
  $limitDate.textContent = freeShippingDateFormat;
  $main.dataset.shippingPrice = $typeFree.value;
});

$typeExtra.addEventListener("click", (event) => {
  $deliveryDateSection.classList.remove("is-hidden");
  $currentDate.textContent = currentDateFormat;
  $limitDate.textContent = extraShippingDateFormat;
  $main.dataset.shippingPrice = $typeExtra.value;
});

$typePremium.addEventListener("click", (event) => {
  $deliveryDateSection.classList.remove("is-hidden");
  $currentDate.textContent = currentDateFormat;
  $limitDate.textContent = premiumShippingDateFormat;
  $main.dataset.shippingPrice = $typePremium.value;
});

/* Switch Form */

$shippingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  $shippingForm.classList.add("is-hidden");
  $finishContainer.classList.remove("is-hidden");
  $progressBar.value++;
  $stage.classList.add("is-completed");

  setOrderDetails();
});
