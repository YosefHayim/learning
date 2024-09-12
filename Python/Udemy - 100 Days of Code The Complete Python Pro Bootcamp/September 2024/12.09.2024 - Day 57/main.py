import requests
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    blog_url = "https://api.npoint.io/c790b4d5cab58020d391"
    response = requests.get(blog_url)
    all_posts = response.json()
    return render_template("index.html", posts=all_posts)


@app.route("/post/blog/<int:num>")
def get_blog_post(num):
    blog_url = "https://api.npoint.io/c790b4d5cab58020d391"
    response = requests.get(blog_url)
    all_posts = response.json()

    # Find the post by ID
    post = next((post for post in all_posts if post["id"] == num), None)

    # If the post is found, pass it to the template
    if post:
        return render_template("post.html", title=post["title"], subtitle=post["subtitle"], content=post["body"])
    else:
        return "Post not found", 404


if __name__ == "__main__":
    app.run(debug=True)
