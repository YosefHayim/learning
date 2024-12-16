from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String, Float

app = Flask(__name__)


# Define the base class for models
class Base(DeclarativeBase):
    pass


# Initialize the SQLAlchemy object
db = SQLAlchemy(model_class=Base)

# Configure the SQLite database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///books.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)


# Define the Book model (table)
class Book(db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(250), nullable=False)
    author: Mapped[str] = mapped_column(String(250), nullable=False)
    rating: Mapped[float] = mapped_column(Float, nullable=False)


# Step 2: Create the tables in the database
with app.app_context():
    db.create_all()


# Route for the home page to display the list of books and handle updates
@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        # Check if it's an update operation
        book_id = request.form.get("book_id")
        if book_id:
            # Fetch the book to be updated
            book_to_update = db.session.get(Book, int(book_id))
            # Update the book details
            book_to_update.title = request.form["book_name"]
            book_to_update.author = request.form["book_author"]
            book_to_update.rating = float(request.form["rating"])
            db.session.commit()
        else:
            # Create a new book instance from form data (if no ID is provided)
            new_book = Book(
                title=request.form["book_name"],
                author=request.form["book_author"],
                rating=float(request.form["rating"])
            )
            db.session.add(new_book)
            db.session.commit()
        # Redirect to home page after adding or updating
        return redirect(url_for("home"))

    # Fetch all books from the database for display
    books = db.session.execute(db.select(Book)).scalars().all()
    return render_template("index.html", all_books=books)


# Route for deleting a book
@app.route("/delete/<int:book_id>")
def delete(book_id):
    # Fetch the book to be deleted by its ID
    book_to_delete = db.session.get(Book, book_id)
    # Delete the book and commit to the database
    db.session.delete(book_to_delete)
    db.session.commit()
    # Redirect to the home page after deleting
    return redirect(url_for("home"))


if __name__ == "__main__":
    app.run(debug=True)
