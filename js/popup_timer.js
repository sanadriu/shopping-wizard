// Variable Declaration

let buyBtn = document.querySelector(".product__BuyBtn");
let seg = 1000;
let finishBuyBtn = document.querySelector(".finish-buyBtn");
let windowPopup;
let $termsCheckBox = document.querySelector("#termsChkBox");
let popupTime1;
let popupTime2;
let popupTime3;
let popupTime4;
let popupTime5;

buyBtn.addEventListener("click", popup);
finishBuyBtn.addEventListener("click", cleanTimeout)
function popup(){

    
    popupTime1 = setTimeout(function(){ windowPopup = window.open("", "", "width=100,height=100,left=1300,top=100");
    windowPopup.document.write("<p>4 minutes left</p>"); 
    closePopup() }, 60*seg);
    popupTime2 = setTimeout(function(){ windowPopup = window.open("", "", "width=100,height=100,left=1300,top=100"); 
    windowPopup.document.write("<p>3 minutes left</p>"); 
    closePopup()  }, 120*seg);
    popupTime3 = setTimeout(function(){ windowPopup = window.open("", "", "width=100,height=100,left=1300,top=100");
    windowPopup.document.write("<p>2 minutes left</p>"); 
    closePopup()  }, 180*seg);
    popupTime4 = setTimeout(function(){ windowPopup = window.open("", "", "width=200,height=50,left=1300,top=100");
    windowPopup.document.write("<p>1 minute left!! Hurry Up!!</p>"); 
    closePopup()  }, 240*seg);
    popupTime5 = setTimeout(function(){ windowPopup = window.open("", "", "width=300,height=200,left=1300,top=100");
    windowPopup.document.write("<p>Sorry. Your time is over we are sending you back to the beggining</p>");
    closePopup(); refresh(); }, 297*seg);
}


function closePopup(){
    setTimeout(function(){ windowPopup.close()}, 2*seg);
}

function refresh(){
    location.reload();
}

function cleanTimeout(){

    if($termsCheckBox.checked){
        clearTimeout(popupTime1);
        clearTimeout(popupTime2);
        clearTimeout(popupTime3);
        clearTimeout(popupTime4);
        clearTimeout(popupTime5);

    }
}

