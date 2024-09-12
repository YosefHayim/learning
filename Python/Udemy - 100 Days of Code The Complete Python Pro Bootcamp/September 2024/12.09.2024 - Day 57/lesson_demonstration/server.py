from flask import Flask,render_template
from datetime import datetime
import requests


app = Flask(__name__)
current_date = datetime.now().strftime("%Y")


@app.route("/")
def home():
    return render_template("index.html",year=current_date)


# Challenge 397:
@app.route("/guess/<name>")
def name(name):
    # Get the gender type
    response_gender_type = requests.get(f"https://api.genderize.io?name={name}")
    response_gender_type.raise_for_status()
    data_gender_type = response_gender_type.json()
    gender_type = data_gender_type["gender"]

    # Get the age type
    response_age = requests.get(f"https://api.agify.io?name={name}")
    response_age.raise_for_status()
    data_age = response_age.json()
    data_age_probability = data_age["age"]

    # Send the data to the html
    return render_template(f"index.html",name=name.title(),gender=gender_type,age=data_age_probability,year=current_date)

@app.route("/blog/")
def get_blog():
    blog_url = "https://api.npoint.io/c790b4d5cab58020d391"
    response = requests.get(blog_url)
    all_posts = response.json()
    return render_template("blog.html",posts=all_posts)

if __name__ == "__main__":
    app.run(debug=True)