const express = require("express");
const sql = require("mssql");
const path = require("path");
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectDb");
const makeDateReadable = require("./utils/readableDateFn");
const removeUnnecessaryTags = require("./utils/removeUnnecessaryTags");

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as templating engines
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/posts", (req, res) => {
  const querySql = new sql.Request();

  querySql.query("select top 10 * from Posts", (err, result) => {
    if (err) {
      console.log(`Query error: `, err);
      res.status(500).send("Database error");
    } else {
      res.render("posts", {
        posts: result.recordset,
        makeDateReadable,
        removeUnnecessaryTags,
      });
    }
  });
});

app.get("/post/:id", (req, res) => {
  const { id } = req.params;

  const querySql = new sql.Request();

  querySql.input("Id", sql.Int, id).query(
    `
    SELECT * FROM Posts WHERE Id = @Id
  `,
    (err, result) => {
      if (err) {
        console.log(`Query error: `, err);
        res.status(500).send("Database error");
      } else {
        if (result.recordset.length === 0) {
          res.status(404).render("error", { message: "Post not found" });
        } else {
          res.render("post", {
            post: result.recordset[0],
            makeDateReadable,
            removeUnnecessaryTags,
          });
        }
      }
    }
  );
});

app.get("/create/post", (req, res) => {
  res.render("createPost");
});

app.post("/submit/post", async (req, res) => {
  const { title, body } = req.body;

  const transaction = new sql.Transaction();

  try {
    await transaction.begin(); // Start the transaction

    const request = new sql.Request(transaction);

    await request
      .input("Title", sql.VarChar, title)
      .input("Body", sql.Text, body)
      .input("CreationDate", sql.DateTime, new Date())
      .input("ViewCount", sql.Int, 0)
      .input("LastActivityDate", sql.DateTime, new Date())
      .input("PostTypeId", sql.Int, 1)
      .input("Score", sql.Int, 0).query(`
        INSERT INTO Posts (Title, Body, CreationDate, ViewCount, LastActivityDate, PostTypeId, Score) 
        VALUES (@Title, @Body, @CreationDate, @ViewCount, @LastActivityDate, @PostTypeId, @Score)
      `);

    await transaction.commit(); // Commit transaction if successful

    res
      .status(200)
      .json({ status: "success", message: "Post created successfully" });
  } catch (err) {
    await transaction.rollback(); // Rollback on error
    console.error("SQL Transaction Error:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
});

app.use((req, res) => {
  res.status(404).render("error");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
