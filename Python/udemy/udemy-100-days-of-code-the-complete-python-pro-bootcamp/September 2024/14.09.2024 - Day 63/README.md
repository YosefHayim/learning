## Day 63: Key Takeaways

1. **Today's Goals**
   - Learn how to create an SQLite database and how to create, read, update, and delete data in the database.
   - Hook up the database with a Flask application to serve data whenever needed.
   - Understand how to handle CRUD (Create, Read, Update, Delete) operations through SQLAlchemy and Flask.

2. **Things I Learned or Concluded from Today's Lesson**
   - SQLAlchemy is an ORM (Object Relational Mapping) library. It can map the relationships in the database into objects. Fields become object properties, and tables can be defined as separate classes. Each row of data becomes a new object.
   - Implemented full CRUD functionality using Flask and SQLAlchemy: 
     - **Create**: Added a new book with a form.
     - **Read**: Displayed all books on the home page.
     - **Update**: Updated book details directly on the home page using a pre-filled form.
     - **Delete**: Added the ability to delete books with a confirmation prompt.
   - Learned how to manage routes efficiently using a unified approach for both creating and updating data via the same form and route.

