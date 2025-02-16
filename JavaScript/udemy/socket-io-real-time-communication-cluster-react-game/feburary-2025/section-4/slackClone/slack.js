const express = require("express");
const socketio = require("socket.io");
const namespaces = require("./data/namespaces");
const Room = require("./classes/Room");

const app = express();
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

// example to show how to do auth with socket.io and middleware
// io.use((socket, next) => {
//   const jwt = socket.handshake.auth.jwt;
//   console.log(jwt);
//   if (jwt) {
//     next();
//   } else {
//     next(new Error("invalid jwt"));
//     socket.disconnect();
//   }
// });

io.on("connection", (socket) => {
  // console.log(socket.handshake);

  // example illustration on how to do auth with socket.io
  // const username = socket.handshake.query.username;
  // const jwt = socket.handshake.query.jwt;

  io.emit("welcome", "Welcome to the server.");
  socket.on("clientConnect", () => {
    console.log(`${socket.id}: has connected.`);
  });
  socket.emit("nsList", namespaces);
});

namespaces.forEach((namespace) => {
  io.of(namespace.endpoint).on("connection", (socket) => {
    // console.log(`${socket.id} has connected to ${namespace.endpoint}`);

    // this needs to be async because we need to fetch the amount of users
    socket.on("joinRoom", async (roomObj, ackCallback) => {
      // need to fetch the history
      const thisNs = namespaces[roomObj.namespaceId];
      const thisRoomObj = thisNs.rooms.find(
        (room) => room.roomTitle === roomObj.roomTitle
      );

      const thisRoomsHistory = thisRoomObj.history;
      // console.log(roomTitle);

      // leave all rooms, because the client can only be in one room
      const rooms = socket.rooms;
      // console.log(rooms);

      let i = 0;
      rooms.forEach((room) => {
        // we dont want to leave the sockets personal room which is guaranteed to be the first room
        if (!i == 0) {
          socket.leave(room);
        }
        i++;
      });

      // join the room!
      // NOTE -  room title is coming from the client
      // Auth to make sure the socket has right to be in that room
      socket.join(roomObj.roomTitle);

      // fetch the number of sockets in this room
      const sockets = await io
        .of(namespace.endpoint)
        .in(roomObj.roomTitle)
        .fetchSockets();

      const socketsCount = sockets.length;

      ackCallback({
        numUsers: socketsCount,
        thisRoomsHistory,
      });
    });

    socket.on("newMessageToRoom", (messageObj) => {
      console.log(messageObj);
      // broadcast this to all the connect clients... this room only!
      // how we can find out what room is this socket is in ?
      const rooms = socket.rooms;

      const currentRoom = [...rooms][1]; // this is a set not array!

      // send out this messageObj to everyone including the sender
      io.of(namespace.endpoint)
        .in(currentRoom)
        .emit("messageToRoom", messageObj);

      // add thi message to this room history
      const thisNs = namespaces[messageObj.selectedNsId];
      const thisRoom = thisNs.rooms.find(
        (room) => room.roomTitle === currentRoom
      );
      console.log(thisRoom);
      thisRoom.addMessage(messageObj);
    });
  });
});
