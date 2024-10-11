const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  
  let allValid = true;

  // Validation for first name
  const firstName = form.elements['fname'];
  const firstNameError = document.querySelector('.error-message-fName');
  if (firstName.value.trim() === "") {
    firstName.style.border = '1px solid var(--red)';
    firstNameError.style.display = 'block';
    allValid = false;
  } else {
    firstName.style.border = '1px solid var(--grey-500)';
    firstNameError.style.display = 'none';
  }

  // Validation for last name
  const lastName = form.elements['lname'];
  const lastNameError = document.querySelector('.error-message-lName');
  if (lastName.value.trim() === "") {
    lastName.style.border = '1px solid var(--red)';
    lastNameError.style.display = 'block';
    allValid = false;
  } else {
    lastName.style.border = '1px solid var(--grey-500)';
    lastNameError.style.display = 'none';
  }

  // Validation for email
  const email = form.elements['email'];
  const emailError = document.querySelector('.error-message-email');
  if (email.value.trim() === "") {
    email.style.border = '1px solid var(--red)';
    emailError.style.display = 'block';
    allValid = false;
  } else {
    email.style.border = '1px solid var(--grey-500)';
    emailError.style.display = 'none';
  }

  // Validation for query type (radio buttons)
  const queryTypeError = document.querySelector('.error-message-query-type');
  if (!form.elements['enquiry_type'].value) {
    queryTypeError.style.display = 'block';
    allValid = false;
  } else {
    queryTypeError.style.display = 'none';
  }

  // Validation for message
  const message = form.elements['message-input'];
  const messageError = document.querySelector('.error-message-message');
  if (message.value.trim() === "") {
    message.style.border = '1px solid var(--red)';
    messageError.style.display = 'block';
    allValid = false;
  } else {
    message.style.border = '1px solid var(--grey-500)';
    messageError.style.display = 'none';
  }

  // Validation for consent checkbox
  const consentCheckbox = form.elements['checkbox'];
  const consentError = document.querySelector('.error-message-submit');
  if (!consentCheckbox.checked) {
    consentError.style.display = 'block';
    allValid = false;
  } else {
    consentError.style.display = 'none';
  }

  if (allValid) {
  }
});
