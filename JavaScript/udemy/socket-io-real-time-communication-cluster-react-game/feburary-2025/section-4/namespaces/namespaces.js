const express = require("express");
const socketio = require("socket.io");

const app = express();
// anything inside the public folder will render if somebody gets to the filenames.html
app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8000);

// io refers to the entire socket server.
const io = socketio(expressServer, {
  cors: {
    origin: ["http://localhost:8000", "http://127.0.0.1:5500"],
  },
});

//socket is always individual connection e.g. one user.
io.on("connection", (socket) => {
  console.log(socket.id, "has connected");

  // in ws we use 'send' method and in socket.io we use the 'emit' method.
  // socket.emit("messageFromServer", { data: "Welcome to the server" });

  // creating a new namespace named "newMessageToServer" and sending all the data
  // on it to the entire server within "newMessageToClients"
  socket.on("newMessageToServer", (data) => {
    io.emit("newMessageToClients", { text: data.text });
  });
});

io.of("/admin").on("connection", (socket) => {
  console.log(socket.id, "has joined /admin");
  io.of("/admin").emit("messageToClientsFromAdmin", {
    text: "Welcome to the messages from admins from server",
  });
});
