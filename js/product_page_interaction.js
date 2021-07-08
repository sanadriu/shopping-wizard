var order = {
  product: {
    color: null,
    size: null,
    price: null,
  },
};

/* Main DOM Elements */

const $product = document.querySelector(".product");
const $wizard = document.querySelector(".wizard");
const $productViewThumbnailList = $product.querySelectorAll(".product__view-thumbnail");
const $productColorThumbnailList = $product.querySelectorAll(".product__color-thumbnail");
const $productViewImg = $product.querySelector(".product__primary-view-img");

/* Product Page Functionality */

function setDefaults() {
  $productViewImg.setAttribute("src", $product.querySelector(".product__view-thumbnail.is-selected").getAttribute("src"));
  order.product.color = $product.querySelector(".product__color-thumbnail.is-selected").dataset.color;
  order.product.size = $product.querySelector(".product__size-select").value;
  order.product.price = 30;
}

function selectColor($element) {
  const color = $element.dataset.color;

  $product.querySelector(".product__color-thumbnail.is-selected").classList.remove("is-selected");
  $element.classList.add("is-selected");

  $productViewThumbnailList.forEach(($productViewThumbnail) => {
    $productViewThumbnail.setAttribute("src", $productViewThumbnail.getAttribute("src").replaceAll(order.product.color, color));
  });

  $productViewImg.setAttribute("src", $productViewImg.getAttribute("src").replaceAll(order.product.color, color));

  order.product.color = color;
}

function selectView($element) {
  $product.querySelector(".product__view-thumbnail.is-selected").classList.remove("is-selected");
  $element.classList.add("is-selected");

  $productViewImg.setAttribute("src", $element.getAttribute("src"));
}

function selectSize($element) {
  order.product.size = $element.value;
}

/* DOM Events */

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
    console.log(order);
  }
});

$product.addEventListener("change", (event) => {
  const $element = event.target;

  if ($element.matches(".product__size-select")) {
    selectSize($element);
  }
});
