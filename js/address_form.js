/* Form Elements */

const $addressForm = document.querySelector("#address-form");
const $shippingForm = document.querySelector("#shipping-form");

/* --- Phone Prefix Changer --- */
/* Selects automatically the phone prefix in function of the selected country. */

function changePhonePrefix($input) {
  const value = $input.value;

  for (let i = 0; i < $addressForm["phone_prefix"].options.length; i++) {
    if ($addressForm["phone_prefix"].options[i].value === value) {
      $addressForm["phone_prefix"].selectedIndex = i;
      break;
    }
  }
}

/* --- Error Message Displayer --- */

function showErrorMessage($input, wrongCases) {
  const value = $input.value;
  const name = $input.name;

  /* If there was printed an old error message, it will be removed to avoid message accumulation below the input. */
  /* If the input has the input-warning-border class, it will be removed. */

  const $previousError = $addressForm.querySelector(`[data-input='${name}']`);

  if ($previousError !== null) {
    $previousError.remove();
  }

  $input.classList.remove("input-warning-border");

  /* When a error message is returned, it will be printed just below the input that has fullfilled a wrong case. */
  /* Also, the input will be given the input-warning-border class. */

  let message = wrongCases(value); // WrongCases is a callback function that evaluates the value and returns a message if something is wrong.

  if (message) {
    const $error = document.createElement("p");
    $error.dataset.input = name;
    $error.classList.add("input-warning");
    $error.innerHTML = message;
    $input.insertAdjacentElement("afterend", $error);
    $input.classList.add("input-warning-border");
  }
}

/* --- Address Form Validator --- */

function AddressFormValidator($input) {
  switch ($input.name) {
    case "firstname":
      showErrorMessage($input, (value) => {
        if (value.length === 0) return "Please enter the first name.";
        if (!/^([A-ZÀ-ŸÑ][-,a-za-ÿñ.']+\s*)+$/.test(value))
          return `Please enter a valid first name.
          <br>· Names must start with uppercase.
          <br>· Names cannot contain numbers.
          <br>· Names cannot contain special characters (except period, comma, apostrophe and space after a name)`;
      });
      break;
    case "lastname":
      showErrorMessage($input, (value) => {
        if (value.length === 0) return "Please enter the last name.";
        if (!/^([A-ZÀ-ŸÑ][-,a-za-ÿñ.']+\s*)+$/.test(value))
          return `Please enter a valid last name.
          <br>· Names must start with uppercase.
          <br>· Names cannot contain numbers.
          <br>· Names cannot contain special characters (except period, comma, apostrophe and space after a name)`;
      });
      break;
    case "birthdate":
      showErrorMessage($input, (value) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return "Please enter a valid date.";
        if (new Date(value) < new Date("1900-01-01")) return "The birth date cannot be older than 1900-01-01.";
        if (new Date(value) > new Date()) return "The birth date cannot be a future date.";
      });
      break;
    case "address_1":
      showErrorMessage($input, (value) => {
        if (value.length === 0) return "Please enter an address.";
      });
      break;
    case "zipcode":
      showErrorMessage($input, (value) => {
        if (value.length === 0) return "Please enter the zipcode.";
      });
      break;
    case "phone":
      showErrorMessage($input, (value) => {
        if (value.length === 0) return "Please enter the phone number.";
        if (!/\d+$/.test(value)) return "Please enter a valid phone number. It must be numeric.";
      });
      break;
  }
}

/* --- DOM Events --- */

/* Submit Event */

$addressForm.addEventListener("submit", (event) => {
  event.preventDefault();

  /* When submitting, all the input are traversed to validate its value. */
  for (let i = 0; i < $addressForm.elements.length; i++) {
    const $input = $addressForm.elements[i];
    AddressFormValidator($input);
  }

  const numErrors = $addressForm.querySelectorAll(".input-warning").length;

  if (numErrors === 0) {
    /* Switch Form */
    $addressForm.classList.add("is-hidden");
    $shippingForm.classList.remove("is-hidden");
  }
});

/* Input Field Focus Out Event */

$addressForm.addEventListener("focusout", (event) => {
  const $input = event.target;
  AddressFormValidator($input);
});

/* Input Changed Value Event */

$addressForm.addEventListener("change", (event) => {
  const $input = event.target;

  switch ($input.name) {
    case "country":
      changePhonePrefix($input);
      break;
  }
});
