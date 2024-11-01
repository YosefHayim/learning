// Select the form and the success message container
const form = document.querySelector('form');
const successMessage = document.querySelector('.message-sent-container');

// Add an event listener to handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  let allFieldsValid = true; // Assume form is valid until we find an error

  // Create FormData object from the form
  const formData = new FormData(form);

  // Clear any previous error messages and reset styles
  document.querySelectorAll('[class*="error-message"]').forEach(error => {
    error.style.display = 'none';
  });
  form.querySelectorAll('input, textarea').forEach(input => {
    input.style.border = '1px solid var(--grey-500)';
  });

  // Check if 'fname' field is empty
  if (!formData.get('fname').trim()) {
    showError('fName');
    allFieldsValid = false;
  }

  // Check if 'lname' field is empty
  if (!formData.get('lname').trim()) {
    showError('lName');
    allFieldsValid = false;
  }

  // Check if 'email' field is empty
  if (!formData.get('email').trim()) {
    showError('email');
    allFieldsValid = false;
  }

  // Check if 'message-input' field is empty
  if (!formData.get('message-input').trim()) {
    showError('message');
    allFieldsValid = false;
  }

  // Check if checkbox is not checked
  if (!formData.get('checkbox')) {
    showError('submit');
    allFieldsValid = false;
  }

  // Check if no radio button is selected
  if (!formData.get('enquiry_type')) {
    showError('query-type');
    allFieldsValid = false;
  }

  // Show success message if all fields are valid
  if (allFieldsValid) {
    successMessage.style.display = 'flex';
  } else {
    successMessage.style.display = 'none';
  }
});

// Function to show error for a specific field
function showError(fieldName) {
  const errorElement = document.querySelector(`.error-message-${fieldName}`);
  if (errorElement) {
    errorElement.style.display = 'block';
    const inputElement = form.elements[fieldName];
    if (inputElement) {
      inputElement.style.border = '1px solid var(--red)';
    }
  }
}
