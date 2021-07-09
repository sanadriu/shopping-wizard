/* --- Main DOM Elements --- */
const $main = document.querySelector("main");
const $product = document.querySelector(".product");
const $wizard = document.querySelector(".wizard");
const $productViewThumbnailList = $product.querySelectorAll(".product__view-thumbnail");
const $productColorThumbnailList = $product.querySelectorAll(".product__color-thumbnail");
const $productViewImg = $product.querySelector(".product__primary-view-img");

/* --- Product Page Functionality --- */

function setDefaults() {
  $productViewImg.setAttribute("src", $product.querySelector(".product__view-thumbnail.is-selected").getAttribute("src"));
  $main.dataset.productColor = $product.querySelector(".product__color-thumbnail.is-selected").dataset.color;
  $main.dataset.productSize = $product.querySelector(".product__size-select").value;
  $main.dataset.productPrice = 30;
  $main.dataset.productName = "Cap with adjustable closure";
}

function selectColor($element) {
  const color = $element.dataset.color;

  $product.querySelector(".product__color-thumbnail.is-selected").classList.remove("is-selected");
  $element.classList.add("is-selected");

  $productViewThumbnailList.forEach(($productViewThumbnail) => {
    $productViewThumbnail.setAttribute("src", $productViewThumbnail.getAttribute("src").replaceAll($main.dataset.productColor, color));
  });

  $productViewImg.setAttribute("src", $productViewImg.getAttribute("src").replaceAll($main.dataset.productColor, color));

  $main.dataset.productColor = color;
}

function selectView($element) {
  $product.querySelector(".product__view-thumbnail.is-selected").classList.remove("is-selected");
  $element.classList.add("is-selected");

  $productViewImg.setAttribute("src", $element.getAttribute("src"));
}

function selectSize($element) {
  $main.dataset.productSize = $element.value;
}

/* --- DOM Events --- */

document.addEventListener("DOMContentLoaded", (event) => {
  setDefaults();
});

$product.addEventListener("click", (event) => {
  const $element = event.target;

  if ($element.matches(".product__color-thumbnail")) {
    selectColor($element);
    return;
  }

  if ($element.matches(".product__view-thumbnail")) {
    selectView($element);
    return;
  }

  if ($element.matches(".product__BuyBtn")) {
    $product.classList.add("is-hidden");
    $wizard.classList.remove("is-hidden");
  }
});

$product.addEventListener("change", (event) => {
  const $element = event.target;

  if ($element.matches(".product__size-select")) {
    selectSize($element);
  }
});
