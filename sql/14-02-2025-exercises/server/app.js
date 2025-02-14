const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sql = require("mssql");
const connectDb = require("./config/connectDb");

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
