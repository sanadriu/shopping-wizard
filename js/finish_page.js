let $finalImage = document.querySelector(".product__view-thumbnail");
let $productImage = document.querySelector(".finish-your-purchase__product-image");
$productImage.setAttribute("src", $finalImage.getAttribute("src"));
let $finishBuyBtn = document.querySelector(".finish-buyBtn");
let $finishDivToRemove = document.querySelector(".finish-div-to-remove");
let $termsWarning = document.getElementById("terms-warning");
let $termsCheckBox = document.getElementById("cbox2");

/*
if ($termsCheckBox.checked == false) {
    $termsWarning.innerHTML = "Please accept the terms and conditions";
    $termsWarning.classList.add("input-warning");
}
$finishBuyBtn.addEventListener("click", (event) => {
    $finishDivToRemove.innerHTML = "Gracias por su compra" + " &#9829;";
});*/

function checkCheckBox(f) {
    if (f.agree.checked == false) {
        $termsWarning.innerHTML = "Please accept the terms and conditions";
        return false;
    } else
        return true;
}