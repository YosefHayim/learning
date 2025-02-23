const express = require("express");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const expressServer = app.listen(9000);

const io = socketIo(expressServer, {
  cors: {
    origin: "http://127.0.0.1:5500",
  },
});

// App organization
// servers.js is not the entry point for the app, but it creates our servers
// and exports them
module.exports = {
  app,
  io,
};
