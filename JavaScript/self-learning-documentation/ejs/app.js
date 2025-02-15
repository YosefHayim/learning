const express = require("express");
const sql = require("mssql");
const path = require("path");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const { stat } = require("fs");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

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
      res.render("posts", { posts: result.recordset });
    }
  });
});

app.get("/create/post", (req, res) => {
  res.render("createPost");
});

app.post("/submit/post", (req, res) => {
  const { title, content } = req.body;
  const sql = `INSERT INTO posts (Title, Body, CreationDate) VALUES (?, ?, NOW())`;

  db.query(sql, [title, content], (err, result) => {
    if (err) throw err;
    res.send(`Post created with timestamp: ${result.insertId}`);
  });
  res.status(200).json({
    status: "success",
    message: "Post created successfully",
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).render("error", { message: "Page Not Found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
