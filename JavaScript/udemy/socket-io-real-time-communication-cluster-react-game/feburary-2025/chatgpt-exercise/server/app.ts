// @ts-check
import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = createServer(app);

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    response: "Welcome to the chatgpt-socket-io exercise",
  });
});

io.on("connection", (socket) => {
  console.log("a user has been connected");

  // Listen for "chatMessage" events from clients
  socket.on("chatMessage", (message: string) => {
    console.log("Received message:", message);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(socket.id, "user disconnected");
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
