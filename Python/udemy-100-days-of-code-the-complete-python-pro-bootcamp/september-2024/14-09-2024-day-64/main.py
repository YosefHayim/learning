from flask import Flask, render_template, redirect, url_for
from flask_bootstrap import Bootstrap5
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from sqlalchemy import asc
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

app = Flask(__name__)
app.config['SECRET_KEY'] = '8BYkEfBA6O6donzWlSihBXox7C0sKR6b'
# CREATE DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///moviesproject.db'  # SQLite database
db = SQLAlchemy(app)
Bootstrap5(app)

# CREATE THE TABLE
class Movie(db.Model):  # Inherit from db.Model (Flask-SQLAlchemy)
    __tablename__ = 'Movie'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, unique=True)
    year = db.Column(db.String)
    description = db.Column(db.String)
    rating = db.Column(db.String)
    ranking = db.Column(db.String)
    review = db.Column(db.String)
    img_url = db.Column(db.String)

# Example of adding a data to the row
# new_movie = Movie(
#         id = 1,
#         title="Phone Booth",
#         year=2002,
#         description="Publicist Stuart Shepard finds himself trapped in a phone booth, pinned down by an extortionist's sniper rifle. Unable to leave or receive outside help, Stuart's negotiation with the caller leads to a jaw-dropping climax.",
#         rating=7.3,
#         ranking=10,
#         review="My favourite character was the caller.",
#         img_url="https://image.tmdb.org/t/p/w500/tjrX2oWRCM3Tvarz38zlZM7Uc10.jpg"
#     )
#
# second_movie = Movie(
#     id = 2,
#     title="Avatar The Way of Water",
#     year=2022,
#     description="Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
#     rating=7.3,
#     ranking=9,
#     review="I liked the water.",
#     img_url="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
# )

# Move db.create_all() outside the class
with app.app_context():
    pass
    # db.create_all()
    # db.session.add(second_movie)
    # db.session.commit()

class MovieForm(FlaskForm):
    title = StringField("Movie Title", validators=[DataRequired()])
    year = StringField("Year", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    rating = StringField("Rating", validators=[DataRequired()])
    ranking = StringField("Ranking", validators=[DataRequired()])
    review = StringField("Review", validators=[DataRequired()])
    img_url = StringField("Movie Poster URL", validators=[DataRequired()])
    submit = SubmitField("Submit")



@app.route("/")
def home():
    all_movies = Movie.query.order_by(asc(Movie.ranking)).all()  # Order by ranking descending
    return render_template("index.html", movies=all_movies)


@app.route("/add", methods=["GET", "POST"])
def add():
    form = MovieForm()
    if form.validate_on_submit():
        new_movie = Movie(
            title=form.title.data,
            year=form.year.data,
            description=form.description.data,
            rating=form.rating.data,
            ranking=form.ranking.data,
            review=form.review.data,
            img_url=form.img_url.data,
        )
        db.session.add(new_movie)
        db.session.commit()
        return redirect(url_for('home'))  # Redirect to home page after adding a movie

    return render_template("add.html", form=form)


@app.route("/select")
def select():
    return render_template("select.html")


@app.route("/edit/<int:movie_id>", methods=["GET", "POST"])
def edit(movie_id):
    movie = Movie.query.get(movie_id)
    form = MovieForm(
        title=movie.title,
        year=movie.year,
        description=movie.description,
        rating=movie.rating,
        ranking=movie.ranking,
        review=movie.review,
        img_url=movie.img_url,
    )

    if form.validate_on_submit():
        movie.title = form.title.data
        movie.year = form.year.data
        movie.description = form.description.data
        movie.rating = form.rating.data
        movie.ranking = form.ranking.data
        movie.review = form.review.data
        movie.img_url = form.img_url.data
        db.session.commit()
        return redirect(url_for('home'))  # Redirect to home after editing

    return render_template("edit.html", form=form, movie=movie)

@app.route("/delete/<int:movie_id>", methods=["POST"])
def delete(movie_id):
    movie_to_delete = Movie.query.get(movie_id)
    if movie_to_delete:
        db.session.delete(movie_to_delete)
        db.session.commit()
        return redirect(url_for('home'))
    else:
        return "Movie not found", 404


if __name__ == '__main__':
    app.run(debug=True)
