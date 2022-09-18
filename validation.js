const validateEmail = (elementId) => {
  let emailInput = document.getElementById(elementId);
  let arrayOfEmail = emailInput.value.split("");
  let includesDotAndAt = false;
  let longerThanFour = false;
  let isValid = false;
  if (arrayOfEmail.indexOf(".") > 0 && arrayOfEmail.indexOf("@") > 0) {
    includesDotAndAt = true;
  }
  if (arrayOfEmail.length > 4) {
    longerThanFour = true;
  }

  if (includesDotAndAt && longerThanFour) {
    isValid = true;
  }
  if (isValid) {
    emailInput.classList.add("shadow-[0_0px_0px_3px_#a5f48ad6]");
    emailInput.classList.remove("shadow-[0_0px_0px_3px_#ff505041]");
    console.log("The email is valid");
  }
  if (!isValid) {
    emailInput.classList.remove("shadow-[0_0px_0px_3px_#a5f48ad6]");
    emailInput.classList.add("shadow-[0_0px_0px_3px_#ff505041]");
    console.log("The email is NOT valid");
  }
  return isValid;
};

export { validateEmail };
