import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log(`${socket.id}, hi from the client`);
});

const MainComponent = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const message = formData.get("message");
    socket.emit("chatMessage", message);
  };

  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // Listen for messages from the server
    socket.on("everyone", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("everyone");
    };
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">First name</label>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your first name..."
          />
          <input type="text" name="message" placeholder="Send message..." />
          <button type="submit">Send message</button>
        </div>
      </form>
      <div id="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
