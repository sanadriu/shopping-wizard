let $typeFree = document.getElementById("typeFree");
let $typeExtra = document.getElementById("typeExtra");
let $typePremium = document.getElementById("typePremium");
let $isGiftChkBox = document.getElementById("gift");
let $giftMessage = document.getElementById("giftMessage");

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

//$giftMessage.setAttribute("disabled", true);

$isGiftChkBox.addEventListener("click", (event) => {
  if ($isGiftChkBox.checked) {
    $giftMessage.removeAttribute("disabled");
  } else {
    $giftMessage.setAttribute("disabled", true);
  }
});

$typeFree.addEventListener("click", (event) => {
  document.querySelector(".delivery_date").classList.remove("is-hidden");
  document.getElementById("currentDate").innerHTML = currentDateFormat;
  document.getElementById("limitDate").innerHTML = freeShippingDateFormat;
});

$typeExtra.addEventListener("click", (event) => {
  document.querySelector(".delivery_date").classList.remove("is-hidden");
  document.getElementById("currentDate").innerHTML = currentDateFormat;
  document.getElementById("limitDate").innerHTML = extraShippingDateFormat;
});

$typePremium.addEventListener("click", (event) => {
  document.querySelector(".delivery_date").classList.remove("is-hidden");
  document.getElementById("currentDate").innerHTML = currentDateFormat;
  document.getElementById("limitDate").innerHTML = premiumShippingDateFormat;
});
