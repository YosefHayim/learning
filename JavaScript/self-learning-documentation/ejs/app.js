const express = require("express");
let ejs = require("ejs");
const app = express();

let people = ["geddy", "neil", "alex"];
let html = ejs.render('<%= people.join(", "); %>', { people: people });

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    response: "learning ejs server side rendering",
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port: ${3000}`);
});
