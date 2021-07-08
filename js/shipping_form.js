//---------shipping -------------------------

//--------------------------- text Enable/Disable-----------------------------------------------------------
document.getElementById("giftMessage").setAttribute("disabled", true);
document.getElementById("gift").onclick = function() {
        document.getElementById("giftMessage").removeAttribute("disabled", true);
    }
    //-- -- -- -- -- -- -- -- - selección de botones-- -- -- -- -- -- -- -- -- -- -- -- -- -- -

let $typeFree = document.getElementById("typeFree");
let $typeExtra = document.getElementById("typeExtra");
let $typePremium = document.getElementById("typePremium");

console.log($typeFree, $typeExtra, $typePremium)

//-------------------------------hora Actual -------------------------------------------------------------------
let dateA = new Date();
let dateActual = dateA.toUTCString()
    //------------------------------hora type free-------------------------------------------------------
let freeLater = new Date();
freeLater.setHours(freeLater.getHours() + 72);
let freeLaterFormat = freeLater.toUTCString();
//--------------------------------------hora type Extra-------------------------------------------------
let extraLater = new Date();
extraLater.setHours(extraLater.getHours() + 48);
let extraLaterFormat = extraLater.toUTCString();
//-------------------------------------- hora type Premium-----------------------------------------------
let premiumLater = new Date();
premiumLater.setHours(premiumLater.getHours() + 24);
let premiumLaterFormat = premiumLater.toUTCString();
// ------------------------------type Free------------------------------------------------------------------
$typeFree.addEventListener("click", dateFree);

function dateFree() {
    let visibleDisplay = document.querySelector(".delivery_date").style.display = "inline-block";
    let actualHour = document.getElementById("current").innerHTML = dateActual;
    let laterHour = document.getElementById("later").innerHTML = freeLaterFormat;
}

//  -------------------------------type Extra------------------------------------------------------------------
$typeExtra.addEventListener("click", dateExtra);

function dateExtra() {
    document.querySelector(".delivery_date").style.display = "inline-block";
    document.getElementById("current").innerHTML = dateActual;
    document.getElementById("later").innerHTML = extraLaterFormat;
}


// ------------------------------type Premium---------------------------------------------------------------

$typePremium.addEventListener("click", datePremium);

function datePremium() {
    document.querySelector(".is-hidden").style.display = "inline-block";
    document.getElementById("current").innerHTML = dateActual;
    document.getElementById("later").innerHTML = premiumLaterFormat;
}