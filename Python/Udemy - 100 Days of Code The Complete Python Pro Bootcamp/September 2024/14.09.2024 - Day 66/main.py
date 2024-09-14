from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String, Boolean
from sqlalchemy.sql import func


app = Flask(__name__)

# CREATE DB
class Base(DeclarativeBase):
    pass
# Connect to Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cafes.db'
db = SQLAlchemy(model_class=Base)
db.init_app(app)


# Cafe TABLE Configuration
class Cafe(db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(250), unique=True, nullable=False)
    map_url: Mapped[str] = mapped_column(String(500), nullable=False)
    img_url: Mapped[str] = mapped_column(String(500), nullable=False)
    location: Mapped[str] = mapped_column(String(250), nullable=False)
    seats: Mapped[str] = mapped_column(String(250), nullable=False)
    has_toilet: Mapped[bool] = mapped_column(Boolean, nullable=False)
    has_wifi: Mapped[bool] = mapped_column(Boolean, nullable=False)
    has_sockets: Mapped[bool] = mapped_column(Boolean, nullable=False)
    can_take_calls: Mapped[bool] = mapped_column(Boolean, nullable=False)
    coffee_price: Mapped[str] = mapped_column(String(250), nullable=True)


with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/random")
def get_random_cafe():
    # Get a random cafe from the database
    random_cafe = db.session.query(Cafe).order_by(func.random()).first()

    # Return the random cafe data in JSON format
    return jsonify(
        id=random_cafe.id,
        name=random_cafe.name,
        map_url=random_cafe.map_url,
        img_url=random_cafe.img_url,
        location=random_cafe.location,
        seats=random_cafe.seats,
        has_toilet=random_cafe.has_toilet,
        has_wifi=random_cafe.has_wifi,
        has_sockets=random_cafe.has_sockets,
        can_take_calls=random_cafe.can_take_calls,
        coffee_price=random_cafe.coffee_price
    )

@app.route("/all")
def get_all_cafes():
    # Get all cafes from the database
    all_cafes = db.session.query(Cafe).all()

    # Create a list of cafes with their data in dictionary format
    cafes_list = []
    for cafe in all_cafes:
        cafes_list.append({
            "id": cafe.id,
            "name": cafe.name,
            "map_url": cafe.map_url,
            "img_url": cafe.img_url,
            "location": cafe.location,
            "seats": cafe.seats,
            "has_toilet": cafe.has_toilet,
            "has_wifi": cafe.has_wifi,
            "has_sockets": cafe.has_sockets,
            "can_take_calls": cafe.can_take_calls,
            "coffee_price": cafe.coffee_price
        })

    # Return the list of cafes as JSON
    return jsonify(cafes=cafes_list)


@app.route("/search")
def search_cafes():
    # Get the location from the query parameters in the URL (e.g., /search?loc=location_name)
    location = request.args.get('loc')

    # Query the database for cafes that match the given location
    cafes_at_location = db.session.query(Cafe).filter_by(location=location).all()

    if cafes_at_location:
        # If cafes are found, return them in JSON format
        cafes_list = []
        for cafe in cafes_at_location:
            cafes_list.append({
                "id": cafe.id,
                "name": cafe.name,
                "map_url": cafe.map_url,
                "img_url": cafe.img_url,
                "location": cafe.location,
                "seats": cafe.seats,
                "has_toilet": cafe.has_toilet,
                "has_wifi": cafe.has_wifi,
                "has_sockets": cafe.has_sockets,
                "can_take_calls": cafe.can_take_calls,
                "coffee_price": cafe.coffee_price
            })
        return jsonify(cafes=cafes_list)
    else:
        # If no cafes are found, return a message
        return jsonify(error={"Not Found": "Sorry, we don't have a cafe at that location."}), 404

@app.route("/add", methods=["POST"])
def add_cafe():
    # Get the data from the JSON request body
    data = request.json

    # Extract values from the JSON data
    cafe_name = data.get("name")
    map_url = data.get("map_url")
    img_url = data.get("img_url")
    location = data.get("location")
    seats = data.get("seats")
    has_toilet = data.get("has_toilet")
    has_wifi = data.get("has_wifi")
    has_sockets = data.get("has_sockets")
    can_take_calls = data.get("can_take_calls")
    coffee_price = data.get("coffee_price")

    # Ensure all required fields are provided
    if not cafe_name or not map_url or not img_url or not location or not seats:
        return jsonify(error={"Missing Data": "Please make sure all required fields are provided."}), 400

    # Create a new cafe entry
    new_cafe = Cafe(
        name=cafe_name,
        map_url=map_url,
        img_url=img_url,
        location=location,
        seats=seats,
        has_toilet=has_toilet,
        has_wifi=has_wifi,
        has_sockets=has_sockets,
        can_take_calls=can_take_calls,
        coffee_price=coffee_price
    )

    # Add new cafe to the database
    try:
        db.session.add(new_cafe)
        db.session.commit()
        return jsonify(response={"Success": "Cafe added successfully!"}), 201
    except Exception as e:
        db.session.rollback()  # Rollback in case of error
        return jsonify(error={"Database Error": "There was an issue adding the cafe."}), 500

@app.route("/update-price/<int:cafe_id>", methods=["PATCH"])
def update_coffee_price(cafe_id):
    # Get the cafe by ID or return 404 if not found
    cafe_to_update = Cafe.query.get_or_404(cafe_id, description="Cafe not found.")

    # Get the new coffee price from the request (use form if submitting via form-data or json for JSON payloads)
    new_price = request.args.get("new_price") or request.json.get("new_price")

    # Ensure that the new price is provided
    if not new_price:
        return jsonify(error={"Missing Data": "Please provide a new coffee price."}), 400

    # Update the coffee price and save to the database
    try:
        cafe_to_update.coffee_price = new_price
        db.session.commit()
        return jsonify(response={"Success": f"Successfully updated the price of cafe id {cafe_id}."}), 200
    except Exception as e:
        db.session.rollback()  # Rollback in case of error
        return jsonify(error={"Database Error": "There was an issue updating the price."}), 500

@app.route("/report-closed/<int:cafe_id>", methods=["DELETE"])
def delete_cafe(cafe_id):
    # Get the API key from the request headers
    api_key = request.headers.get("api-key")

    # Check if the API key is correct
    if api_key != "TopSecretAPIKey":
        return jsonify(error={"Unauthorized": "You are not authorized to delete this cafe."}), 403

    # Find the cafe by ID or return a 404 if not found
    cafe_to_delete = Cafe.query.get_or_404(cafe_id, description="Cafe not found.")

    # Delete the cafe from the database
    try:
        db.session.delete(cafe_to_delete)
        db.session.commit()
        return jsonify(response={"Success": f"Cafe with id {cafe_id} has been deleted."}), 200
    except Exception as e:
        db.session.rollback()  # Rollback in case of error
        return jsonify(error={"Database Error": "There was an issue deleting the cafe."}), 500


if __name__ == '__main__':
    app.run(debug=True)
