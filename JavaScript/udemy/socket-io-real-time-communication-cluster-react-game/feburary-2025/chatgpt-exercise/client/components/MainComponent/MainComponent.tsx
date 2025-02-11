import React from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log(`${socket.id}, hi from the client`);
});

const MainComponent = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const message = formData.get("message");
    socket.emit("chatMessage", message);
    console.log(message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          placeholder="Send message to everyone"
        />
        <button type="submit">Send message</button>
      </form>
      <div id="messages" className="mb-[2em]"></div>
    </div>
  );
};

export default MainComponent;
