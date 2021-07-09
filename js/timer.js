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

const timerList = [];

$ProductBuyBtn.addEventListener("click", (event) => {
  for (let i = 0; i < 5; i++) {
    if (i < 4) {
      timerList[i] = setTimeout(() => {
        $wizardTimer.innerHTML = `<p>You started registering <b>${i + 1} minutes ago.</b></p>`;
        $wizardTimer.classList.remove("is-hidden");

        setTimeout(() => {
          $wizardTimer.classList.add("is-hidden");
        }, 5000);
      }, 1000 * 60 * (i + 1));
    } else {
      timerList[i] = setTimeout(() => {
        $wizardTimer.innerHTML = `<p>You started registering <b>${i + 1} minutes ago. Your time has exceded!</b></p>`;
        $wizardTimer.classList.remove("is-hidden");

        setTimeout(() => {
          $wizardTimer.classList.add("is-hidden");

          /* Reset Forms */

          $profileForm.reset();
          $addressForm.reset();
          $shippingForm.reset();
          $finishForm.reset();

          /* Hide Forms & Show Product Page */

          $product.classList.remove("is-hidden");
          $wizard.classList.add("is-hidden");
          $profileForm.classList.remove("is-hidden");
          $addressForm.classList.add("is-hidden");
          $shippingForm.classList.add("is-hidden");
          $finishForm.classList.add("is-hidden");

          /* Reset Progress Visual Indicators */

          $progressBar.value = 0;

          $stageList.forEach(($stage) => {
            $stage.classList.remove("is-completed");
          });

          /* Clear the timerList */

          for (let i = 0; i < 5; i++) {
            timerList.pop();
          }
        }, 5000);
      }, 1000 * 60 * (i + 1));
    }
  }
});

$finishForm.addEventListener("submit", (event) => {
  event.preventDefault();

  timerList.forEach((timer) => {
    clearTimeout(timer);
  });
});
