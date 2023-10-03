function validateName(name, type) {
  const inputField = document.getElementById(type);
  inputField.classList.remove("bg-image");

  const errorField = document.getElementsByClassName(type);
  errorField[0].classList.add("hidden");

  if (name.trim() === "") {
    errorField[0].classList.remove("hidden");
    inputField.classList.add("bg-image");
  }
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;

  const inputField = document.getElementById("email");
  inputField.classList.remove("bg-image");

  const errorField = document.getElementsByClassName("email");
  errorField[0].classList.add("hidden");

  if (email.trim() === "" || !emailPattern.test(email)) {
    errorField[0].classList.remove("hidden");
    inputField.classList.add("bg-image");
  }
}

function validatePassword(password) {
  const inputField = document.getElementById("password");
  inputField.classList.remove("bg-image");

  const errorField = document.getElementsByClassName("password");
  errorField[0].classList.add("hidden");

  if (password.trim() === "" || password.length < 8) {
    errorField[0].classList.remove("hidden");
    inputField.classList.add("bg-image");
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

    validateName(userFirstName, "firstName");
    validateName(userLastName, "lastName");
    validateEmail(userEmail);
    validatePassword(userPassword);
  });
}

waitForSubmit();
