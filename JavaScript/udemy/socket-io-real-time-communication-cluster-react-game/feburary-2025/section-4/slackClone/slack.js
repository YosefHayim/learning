const express = require("express");
const socketio = require("socket.io");

const app = express();
const namespaces = require("./data/namespaces");
const Room = require("./classes/Room");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);

const io = socketio(expressServer, {
  cors: {
    origin: ["http://localhost:8000", "http://127.0.0.1:5500"],
  },
});

// manufactured way to change a namespace without building a huge ui
app.get("/change-ns", (req, res) => {
  // update namespaces array
  namespaces[0].addRoom(new Room(0, "Deleted Articles", 0));

  // let everyone know in this namespace that it change
  io.of(namespaces[0].endpoint).emit("nsChange", namespaces[0]);

  res.json(namespaces[0]);
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
    // console.log(`${socket.id} has connected to ${namespace.endpoint}`);
    socket.on("joinRoom", (data) => {
      console.log(data);
    });
  });
});
