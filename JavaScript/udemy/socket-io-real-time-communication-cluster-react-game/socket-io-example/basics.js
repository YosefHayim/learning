const express = require("express");
const socketio = require("socket.io");

const app = express();
// anything inside the public folder will render if somebody gets to the filenames.html
app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8000);
const io = socketio(expressServer);
