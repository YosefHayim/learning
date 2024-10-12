const inputE = document.querySelector('.email-input');
const buttonSubscribe = document.querySelector('.subscribe-button');
const emailUserShown = document.querySelector('.email-user-provided');
const emailLabel = document.querySelector('.email-label')
const emailInvalidLabel = document.querySelector('.invalid-email-label')

buttonSubscribe.addEventListener('click', (ev) => {
  ev.preventDefault();

  const emailUserEnterValue = inputE.value; // Use .value to get input value

  // Check for a valid email format (basic validation)
  if (!emailUserEnterValue.includes('@') || !emailUserEnterValue.includes('.')) {
    emailInvalidLabel.style.cssText = `
    display: block;
    `
    inputE.style.cssText = `
    border: 1px solid var(--color-tomato);
    background: #ff84884d;
    color: var(--color-tomato);
    `
    return
  }

  // Show the success message elements
  const elementsToDisplay = document.querySelectorAll(`
    .icon-success-message, 
    .thanks-for-sub-title, 
    .confirmation-text-success-message,
    .dissmiss-button-sucess-message
  `);
  elementsToDisplay.forEach((element) => {
    element.style.display = 'block';
  });

  // Hide the subscription input elements
  const elementsToHide = document.querySelectorAll(`
    .subscribe-img, 
    .stay-updated-title, 
    .first-sentence, 
    .single-pro-container, 
    .email-label, 
    .email-input, 
    .subscribe-button
  `);
  elementsToHide.forEach((element) => {
    element.style.display = 'none';
  });

  // Set the email value to be displayed in the confirmation message
  emailUserShown.textContent = emailUserEnterValue; // Display the user's email
});
