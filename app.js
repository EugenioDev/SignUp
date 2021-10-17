const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    //get the values from the inptus
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === "" || lastNameValue === "") {
      //Show Error
      //Add error Class
      setErrorFor(
        firstNameValue,
        "I campi Nome e Cognome non possono essere vuoti"
      );
    } else {
      //add success class
      setSuccessFor(firstNameValue, "Dati corretti");
    }

    if (emailValue === "") {
      setErrorFor(emailValue, "Devi inserire un email");
    } else if (!isEmail(emailValue)) {
      setErrorFor(emailValue, "Verifica che la email sia valida");
    }

    if (passwordValue === "") {
      setErrorFor(
        passwordValue,
        "Devi inserire una password di almeno 6 caratteri"
      );
    } else if (passwordValue.length < 6) {
      setErrorFor(
        passwordValue,
        "La password deve contenere almeno 6 caratteri"
      );
    }
    f
  }


  function setErrorFor(input, message) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("generalMessage");
    errorMessage.innerHTML = message;
    form.appendChild(errorMessage);
  }

  function setSuccessFor(input, message) {
    const successMessage = document.createElement("p");
    successMessage.classList.add("successMessage");
    successMessage.innerHTML = message;
    form.appendChild(successMessage);
  }

  function isEmail(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    );
  }
});
