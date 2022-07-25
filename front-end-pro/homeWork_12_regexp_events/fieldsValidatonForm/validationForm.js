////////////////////////Task#1////////////////////////////////
//const userName = document.getElementById('uname');
//const phoneNumber = document.getElementById('pnumber');
//const email = document.getElementById('email');

//import { emptyError } from "../constants";

const nameFld = document.querySelector("#exampleNameInput");
const phoneFld = document.querySelector("#examplePhoneInput");
const emailFld = document.querySelector("#exampleEmailInput");
const emailInputError = document.querySelector("#emailInputError");
const nameInputError = document.querySelector("#nameInputError");
const phoneInputError = document.querySelector("#phoneInputError");

console.log(emailFld);

document
  .querySelector("#dataForm")
  .addEventListener("submit", onAddContactFormSubmit);

function onAddContactFormSubmit(e) {
  e.preventDefault();
  submitForm();
}

function submitForm() {
  validateUserName();
  validatePhoneNumber();
  validateEmail();
}

function validateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailFld.value)) {
    showError(emailInputError, emailFld, false);
  } else {
    showError(emailInputError, emailFld, true);
  }
}

function validateUserName() {
  if(/^[a-zA-Z]+$/.test(nameFld.value)){
    showError(nameInputError, nameFld, false);
  }else{
    showError(nameInputError, nameFld, true);
  }
}

function validatePhoneNumber() {
  if (/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phoneFld.value)) {
    showError(phoneInputError, phoneFld, false);
  } else {
    showError(phoneInputError, phoneFld, true);
  }
}

function showError(elementError, webElement, showErrorFlag) {
  if (!showErrorFlag) {
    elementError.hidden = true;
    webElement.style.color = "green";
  } else {
    elementError.hidden = false;
    webElement.style.color = "red";
  }
}
