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

/**
 * Fonction lastNameValidation pour la validation du champ prénom
 * @param {String} lastNameInput
 */
const lastNameValidation = (lastNameInput) => {
  // Ecoute de l'événement "input" sur l'input lastNameInput
  lastNameInput.addEventListener("input", (e) => {
    e.preventDefault();
    if (regexName.test(lastNameInput.value) === false) {
      lastNameInput.style.borderColor = "var(--red)";
      lastNameInput.style.color = "var(--red)";
      return false;
    } else {
      lastNameInput.style.borderColor = "var(--green)";
      lastNameInput.style.color = "var(--green)";
      return true;
    }
  });
};
// Appel de la fonction lastNameValidation
lastNameValidation(lastNameInput);

/**
 * Déclaration de la fonction emailValidation pour la validation du champ email
 *  @param {String} emailInput
 */
const emailValidation = (emailInput) => {
  // Ecoute de l'événement "input" sur l'input emailInput
  emailInput.addEventListener("input", (e) => {
    e.preventDefault();
    if (regexEmail.test(emailInput.value) === false) {
      emailInput.style.borderColor = "var(--red)";
      emailInput.style.color = "var(--red)";
      return false;
    } else {
      emailInput.style.borderColor = "var(--green)";
      emailInput.style.color = "var(--green)";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
emailValidation(emailInput);

/**
 * Déclaration de la fonction arrivalTimeValidation pour la validation du champ arrivalDateInput
 *  @param {Number} arrivalDateInput
 */
const arrivalDateValidation = (arrivalTDateInput) => {
  // Ecoute de l'événement "change" sur l'input arrivalDateInput
  arrivalDateInput.addEventListener("input", (e) => {
    e.preventDefault();
    if (arrivalTDateInput.value.trim() == "") {
      arrivalTDateInput.style.borderColor = "var(--red)";
      arrivalTDateInput.style.color = "var(--red)";
      return false;
    } else {
      arrivalTDateInput.style.borderColor = "var(--green)";
      arrivalTDateInput.style.color = "var(--green)";
      return true;
    }
  });
};
// Appel de la fonction arrivalDateValidation
arrivalDateValidation(arrivalDateInput);

/**
 * Déclaration de la fonction arrivalTimeValidation pour la validation du champ arrivalTimeInput
 *  @param {Number} arrivalTimeInput
 */
const arrivalTimeValidation = (arrivalTimeInput) => {
  // Ecoute de l'événement "input" sur l'input arrivalTimeInput
  arrivalTimeInput.addEventListener("input", (e) => {
    e.preventDefault();
    if (regexTime.test(arrivalTimeInput.value) === false) {
      arrivalTimeInput.style.borderColor = "var(--red)";
      arrivalTimeInput.style.color = "var(--red)";
      return false;
    } else {
      arrivalTimeInput.style.borderColor = "var(--green)";
      arrivalTimeInput.style.color = "var(--green)";
      return true;
    }
  });
};
// Appel de la fonction arrivalTimeValidation
arrivalTimeValidation(arrivalTimeInput);

/**
 * Déclaration de la fonction departureTimeValidation pour la validation du champ arrivalDateInput
 *  @param {Number} departureDateInput
 */
const departureDateValidation = (departureDateInput) => {
  // Ecoute de l'événement "change" sur l'input departureDateInput
  departureDateInput.addEventListener("input", (e) => {
    e.preventDefault();
    if (departureDateInput.value.trim() == "") {
      departureDateInput.style.borderColor = "var(--red)";
      departureDateInput.style.color = "var(--red)";
      return false;
    } else {
      departureDateInput.style.borderColor = "var(--green)";
      departureDateInput.style.color = "var(--green)";
      return true;
    }
  });
};
// Appel de la fonction departureDateValidation
departureDateValidation(departureDateInput);

/**
 * Déclaration de la fonction departureTimeValidation pour la validation du champ departureTimeInput
 *  @param {Number} departureTimeInput
 */
const departureTimeValidation = (departureTimeInput) => {
  // Ecoute de l'événement "input" sur l'input departureTimeInput
  departureTimeInput.addEventListener("input", (e) => {
    e.preventDefault();
    if (regexTime.test(departureTimeInput.value) === false) {
      departureTimeInput.style.borderColor = "var(--red)";
      departureTimeInput.style.color = "var(--red)";
      return false;
    } else {
      departureTimeInput.style.borderColor = "var(--green)";
      departureTimeInput.style.color = "var(--green)";
      return true;
    }
  });
};
// Appel de la fonction departureTimeValidation
departureTimeValidation(departureTimeInput);

// Déclaration de la fonction submitForm qui va gérer la soumission du formulaire
const submitForm = () => {
  // Ecoute de l'événement "click" sur le bouton submitBtn
  submitBtn.addEventListener("click", (e) => {
    // Suppression du comportement par défaut
    e.preventDefault();
    if (
      regexName.test(lastNameInput.value) === false ||
      regexEmail.test(emailInput.value) === false ||
      regexTime.test(arrivalTimeInput.value) === false ||
      regexTime.test(departureTimeInput.value) === false ||
      arrivalDateInput.value.trim() == "" ||
      departureDateInput.value.trim() == ""
    ) {
      alert("Veuillez remplir correctement tous les champs du formulaire !");
    } else {
      // Création de l'objet contact
      const contact = {
        lastName: lastNameInput.value,
        email: emailInput.value,
        arrivalDate: arrivalDateInput.value,
        arrivalTime: arrivalTimeInput.value,
        departureDate: departureDateInput.value,
        departureTime: departureTimeInput.value,
      };
      console.log(contact);
      alert(
        "Inscription confirmée ! Nous allons vous envoyer un mail contenant les dates de nos prochains évènements. Cordialement."
      );
    }
  });
};
// Appel de la fonction submitForm()
submitForm();
