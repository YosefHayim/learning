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
    const content = postContainer.querySelector(".post-content");

    if (!content.isContentEditable) {
      content.contentEditable = true;
      e.target.innerText = "update post";
      content.focus();
    } else {
      content.contentEditable = false;
    }
  }

  if (btn === "update post") {
    const content = postContainer.querySelector(".post-content");
    savePostById(postId, content.innerText);
    window.location.reload();
  }
});

const savePostById = async (id, newContent) => {
  try {
    const response = await fetch(`/update/post/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: newContent }),
    });

    if (response.ok) {
      console.log("Post updated successfully!");
    } else {
      console.error("Failed to update post");
    }
  } catch (error) {
    console.error(`Error updating post: `, error);
  }
};

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
