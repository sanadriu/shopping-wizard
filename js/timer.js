/* --- Elements --- */

const $ProductBuyBtn = document.querySelector(".product__buyBtn");

const $product = document.querySelector(".product");
const $wizard = document.querySelector(".wizard");
const $profileForm = document.querySelector("#profile-form");
const $addressForm = document.querySelector("#address-form");
const $shippingForm = document.querySelector("#shipping-form");
const $finishForm = document.querySelector("#finish-form");

const $wizardTimer = document.querySelector(".wizard__timer");

const $stageList = document.querySelectorAll(".stage-signal");
const $progressBar = document.querySelector(".wizard__progress-bar");

/* --- Timer Setup --- */

let time = 0;
let timer;

$ProductBuyBtn.addEventListener("click", (event) => {
  timer = setInterval(() => {
    time++;
    $wizardTimer.classList.remove("is-hidden");

    if (time === 5) {
      $wizardTimer.innerHTML = `<p>You started registering <b>${time} minutes ago</b>. Your time has exceded!</p>`;
    } else {
      $wizardTimer.innerHTML = `<p>You started registering <b>${time} minutes ago</b>.</p>`;
    }

    setTimeout(() => {
      $wizardTimer.classList.add("is-hidden");

      if (time === 5) {
        clearInterval(timer);
        location.reload();
      }
    }, 5000);
  }, 1000 * 60);
});

$finishForm.addEventListener("submit", (event) => {
  event.preventDefault();

  clearInterval(timer);
});
