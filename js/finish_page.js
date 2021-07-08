let $finalImage = document.querySelector(".product__view-thumbnail");
let $productImage = document.querySelector(".finish-your-purchase__product-image");
$productImage.setAttribute("src", $finalImage.getAttribute("src"));
let $finishBuyBtn = document.querySelector(".finish-buyBtn");
let $finishDivToRemove = document.querySelector(".finish-div-to-remove");
let $termsWarning = document.getElementById("terms-warning");
let $termsCheckBox = document.getElementById("cbox2");



$finishBuyBtn.addEventListener("click", (event) => {
    if ($termsCheckBox.checked) {
        $finishDivToRemove.innerHTML = "Gracias por su compra" + " &#9829;";
    }
    else  {
        $termsWarning.innerHTML = "Please accept the terms and conditions";
        $termsWarning.classList.add("input-warning");
    } 
    
});

