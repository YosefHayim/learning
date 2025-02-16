// const posts = <%- JSON.stringify(posts) %>
// console.log(posts);

const ulEl = document.querySelector(".posts-list");

ulEl.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const postId = e.target.closest(".post-container").id;
    window.location.href = `/post/${postId}`;
  }
});
