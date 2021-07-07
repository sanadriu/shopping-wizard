const $addressForm = document.querySelector("#address-form");

$addressForm.addEventListener("submit", (event) => {
  console.log(event.target);
});

function checkValue($input, validatorCallback) {
  const value = $input.value;
  const name = $input.name;

  const $previousError = $addressForm.querySelector(`[data-input='${name}']`);

  if ($previousError !== null) {
    $previousError.remove();
  }

  let message = validatorCallback(value);

  if (message) {
    const $error = document.createElement("p");
    $error.dataset.input = name;
    $error.classList.add("error-message");
    $error.innerHTML = message;
    $input.insertAdjacentElement("afterend", $error);
  }
}

$addressForm.addEventListener("change", (event) => {
  const $input = event.target;
  const name = $input.name;

  switch (name) {
    case "firstname":
      checkValue($input, (value) => {
        if (value.length === 0) return "Please enter the first name.";
        if (!/^([A-ZÀ-ŸÑ][-,a-za-ÿñ.']+\s*)+$/.test(value))
          return `Please enter a valid first name.
          <br>· Names must start with uppercase.
          <br>· Names cannot contain numbers.
          <br>· Names cannot contain special characters (except period, comma, apostrophe and space after a name)`;
      });
      break;
    case "lastname":
      checkValue($input, (value) => {
        if (value.length === 0) return "Please enter the last name.";
        if (!/^([A-ZÀ-ŸÑ][-,a-za-ÿñ.']+\s*)+$/.test(value))
          return `Please enter a valid last name.
          <br>· Names must start with uppercase.
          <br>· Names cannot contain numbers.
          <br>· Names cannot contain special characters (except period, comma, apostrophe and space after a name)`;
      });
      break;
    case "birthdate":
      checkValue($input, (value) => {
        if (new Date(value) < new Date("1900-01-01")) return "The birth date cannot be older than 1900-01-01.";
        if (new Date(value) > new Date()) return "The birth date cannot be a future date.";
      });

      console.log($input.value);
      break;
    case "address_1":
      checkValue($input, (value) => {
        if (value.length === 0) return "Please enter the first name.";
      });
      break;
    case "zipcode":
      checkValue($input);
      break;
    case "country":
      checkValue($input);
      break;
    case "phone":
      checkValue($input);
      break;
  }
});
