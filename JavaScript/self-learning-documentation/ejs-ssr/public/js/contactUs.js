const formEl = document
  .querySelector("form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const age = formData.get("age");

    sendContactUs(fName, lastName, email, age);
  });

const sendContactUs = async (fName, lastName, email, age) => {
  const url = `http://localhost:3000/submit/contact-us`;
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fName, lastName, email, age }),
    });

    if (r.ok) {
      console.log(r);
    }
  } catch (error) {
    console.error(`Could not send contact us: `, error);
  }
};
