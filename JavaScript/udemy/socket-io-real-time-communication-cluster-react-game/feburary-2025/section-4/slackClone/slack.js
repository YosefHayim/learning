const express = require("express");
const socketio = require("socket.io");

const app = express();
const namespaces = require("./data/namespaces");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);

const io = socketio(expressServer);

io.on("connection", (socket) => {
  // socket.on("newMessageToServer", (data) => {
  // });
  io.emit("welcome", "Welcome to the server.");

  socket.on("clientConnect", () => {
    console.log(`${socket.id}: has connected.`);
  });
  socket.emit("nsList", namespaces);
});
