const formEl = document
  .querySelector("form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const age = formData.get("age");
  });
