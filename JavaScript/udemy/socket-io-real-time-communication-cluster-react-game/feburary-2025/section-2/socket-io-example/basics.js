const express = require("express");
const socketio = require("socket.io");

const app = express();
// anything inside the public folder will render if somebody gets to the filenames.html
app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8000);

// io refers to the entire socket server.
const io = socketio(expressServer);

//socket is always individual connection e.g. one user.
io.on("connection", (socket) => {
  console.log(socket.id, "has connected");

  // in ws we use 'send' method and in socket.io we use the 'emit' method.
  socket.emit("messageFromServer", { data: "Welcome to the server" });

  socket.on("messageFromClient", (data) => {
    console.log(data);
  });
});
