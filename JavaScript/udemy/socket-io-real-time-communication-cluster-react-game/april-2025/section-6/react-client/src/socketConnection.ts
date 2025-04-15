import io from "socket-io.client";

console.log("File loaded");
const socket = io.connect("http://localhost:3000"); // our server is at :3000
socket.on("welcome", (data) => {
  console.log(data);
});
