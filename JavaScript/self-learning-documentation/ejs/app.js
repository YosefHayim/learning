const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
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
  res.render("posts");
});

// 404 Handler
app.use((req, res) => {
  res.status(404).render("error", { message: "Page Not Found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
