// const posts = <%- JSON.stringify(posts) %>
// console.log(posts);

const ulEl = document.querySelector(".posts-list");

ulEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button").innerText;
  const postId = e.target.closest(".post-container").id;
  const postContainer = e.target.closest(".post-container");

  if (btn === "View post") {
    window.location.href = `/post/${postId}`;
  }
  if (btn === "Delete post") {
    console.log("Delete post");
    deletePostById(postId);
    postContainer.style.display = "none";
  }

  if (btn === "Edit post") {
    console.log("Edit post");
  }
});

const deletePostById = async (id) => {
  try {
    const r = await fetch(`/delete/post/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(`Error deleting post: `, error);
  }
};
