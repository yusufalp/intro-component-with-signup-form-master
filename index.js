function validateInput(value, field) {
  const inputField = document.getElementById(field);
  inputField.classList.remove("bg-image");

  const errorField = document.getElementsByClassName(field);
  errorField[0].classList.add("hidden");

  if (value.trim() === "") {
    errorField[0].classList.remove("hidden");
    inputField.classList.add("bg-image");
  }

  if (field === "email") {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;

    if (!emailPattern.test(value)) {
      errorField[0].classList.remove("hidden");
      inputField.classList.add("bg-image");
    }
  }

  if (field === "password") {
    if (value.length < 8) {
      errorField[0].classList.remove("hidden");
      inputField.classList.add("bg-image");
    }
  }
}

function waitForSubmit() {
  const infoForm = document.getElementById("info-form");

  infoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const infoFormElements = infoForm.elements;

    const userFirstName = infoFormElements["firstName"].value;
    const userLastName = infoFormElements["lastName"].value;
    const userEmail = infoFormElements["email"].value;
    const userPassword = infoFormElements["password"].value;

    validateInput(userFirstName, "firstName");
    validateInput(userLastName, "lastName");
    validateInput(userEmail, "email");
    validateInput(userPassword, "password");
  });
}

waitForSubmit();
