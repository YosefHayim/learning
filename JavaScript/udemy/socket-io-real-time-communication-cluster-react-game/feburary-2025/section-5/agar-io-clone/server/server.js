const express = require("express");
const socketIo = require("socket.io");

const app = express();
app.use(static(__dirname + "/public"));

const expressServer = app.listen(9000);
const io = socketIo(expressServer);

io.on("connection,", (socket) => {
  socket.on("event", () => {});
  socket.on("event2", () => {});
  socket.on("event3", () => {});
});
