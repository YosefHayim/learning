const form = document.querySelector('form');
const successMessage = document.querySelector('.message-sent-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let allFieldsValid = true;

  // List of form fields we want to validate
  const fieldsToCheck = [
    { element: form.elements['fname'], errorClass: 'fName' },
    { element: form.elements['lname'], errorClass: 'lName' },
    { element: form.elements['email'], errorClass: 'email' },
    { element: form.elements['message-input'], errorClass: 'message' },
    { element: form.elements['checkbox'], errorClass: 'submit', type: 'checkbox' },
    { element: form.elements['enquiry_type'], errorClass: 'query-type', type: 'radio' }
  ];

  fieldsToCheck.forEach((field) => {
    const input = field.element; 
    const errorElement = document.querySelector(`.error-message-${field.errorClass}`); // The error message element

    // For checkboxes: make sure it is checked
    if (field.type === 'checkbox' && !input.checked) {
      errorElement.style.display = 'block'; // Show error
      allFieldsValid = false;
    } 
    // For radio buttons: make sure one is selected
    else if (field.type === 'radio' && !form.elements['enquiry_type'].value) {
      errorElement.style.display = 'block'; // Show error
      allFieldsValid = false;
    } 
    // For regular text fields: make sure there is text entered
    else if (!field.type && input.value.trim() === "") {
      input.style.border = '1px solid var(--red)'; // Show a red border
      errorElement.style.display = 'block'; // Show error
      allFieldsValid = false;
    } 
    // If the field is valid, hide any existing error message
    else if (!field.type) {
      input.style.border = '1px solid var(--grey-500)'; // Reset border
      errorElement.style.display = 'none'; // Hide error
    }
  });

  if (allFieldsValid) {
    successMessage.style.display = 'flex';
  } else {
    successMessage.style.display = 'none'; // Hide success message if not valid
  }
});
