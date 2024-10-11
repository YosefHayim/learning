const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  
  let allValid = true;


  // Check individual fields and show corresponding error messages if validation fails
  const validations = [
    { element: form.elements['fname'], errorClass: 'fName' },
    { element: form.elements['lname'], errorClass: 'lName' },
    { element: form.elements['email'], errorClass: 'email' },
    { element: form.elements['message-input'], errorClass: 'message' },
    { element: form.elements['checkbox'], errorClass: 'submit', type: 'checkbox' },
    { element: form.elements['enquiry_type'], errorClass: 'query-type', type: 'radio' }
  ];

  validations.forEach(({ element, errorClass, type }) => {
    const errorElement = document.querySelector(`.error-message-${errorClass}`);

    if (type === 'checkbox' && !element.checked) {
      errorElement.style.display = 'block';
      allValid = false;
    } else if (type === 'radio' && !form.elements['enquiry_type'].value) {
      errorElement.style.display = 'block';
      allValid = false;
    } else if (!type && element.value.trim() === "") {
      element.style.border = '1px solid var(--red)';
      errorElement.style.display = 'block';
      allValid = false;
    } else if (!type) {
      element.style.border = '1px solid var(--grey-500)';
    }
  });

  if (allValid) {
    // Code to proceed with form submission or further processing
  }
});
