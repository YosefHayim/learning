const formEl = document
  .querySelector("form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const body = formData.get("body");
    createPost(title, body);
  });

const createPost = async (title, body) => {
  const url = `http://localhost:3000/submit/post`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    if (response.ok) {
      console.log(response);
    }
  } catch (error) {
    console.error(`Could not create post: `, error);
  }
};
