// Récupération des éléments HTML5
const lastNameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const arrivalDateInput = document.querySelector("#arrival");
const arrivalTimeInput = document.querySelector("#time__arrival");
const departureDateInput = document.querySelector("#departure");
const departureTimeInput = document.querySelector("#time__departure");
const submitBtn = document.querySelector(".confirm__btn");

// Regex
const regexName = /^[A-Z][A-Za-z\é\è\ê\ô\-]+$/;
const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
const regexDate =
  /^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/;
const regexTime = /^(2[0-3]|1[0-9]|0[0-9]):([0-5][0-9])$/;
