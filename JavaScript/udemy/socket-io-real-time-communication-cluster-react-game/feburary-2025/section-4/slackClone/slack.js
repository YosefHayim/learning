const express = require("express");
const socketio = require("socket.io");

const app = express();
const namespaces = require("./data/namespaces");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);

const io = socketio(expressServer, {
  cors: {
    origin: ["http://localhost:8000", "http://127.0.0.1:5500"],
  },
});
io.on("connection", (socket) => {
  io.emit("welcome", "Welcome to the server.");
  socket.on("clientConnect", () => {
    console.log(`${socket.id}: has connected.`);
  });
  socket.emit("nsList", namespaces);
});

namespaces.forEach((namespace) => {
  io.of(namespace.endpoint).on("connection", (socket) => {
    console.log(`${socket.id} has connected to ${namespace.endpoint}`);
  });
});
