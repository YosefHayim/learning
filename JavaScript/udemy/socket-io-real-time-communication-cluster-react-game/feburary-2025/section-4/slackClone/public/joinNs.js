// we could ask the server for fresh info on this NS. BAD!!
// we have socket.io/ws and the server will tell us when something has happened!

const joinNs = (el, nsData) => {
  const nsEndpoint = el?.getAttribute("ns");

  const clickedNs = nsData.find((row) => row.endpoint === nsEndpoint);
  const rooms = clickedNs.rooms;
  let roomList = document.querySelector(".room-list");
  // Clear it out
  roomList.innerHTML = "";
  // Loop through each room, and add it to the DOM
  rooms.forEach((room) => {
    // console.log(room);

    roomList.innerHTML += `<li class="room" namespaceId=${
      room.namespaceId
    }><span class="fa-solid fa-${room.privateRoom ? "lock" : "globe"}"></span>${
      room.roomTitle
    }</li>
`;

    // add click listener to each room so the client can tell the server it wants to join
    const roomNodes = document.querySelectorAll(".room");
    Array.from(roomNodes).forEach((elem) => {
      elem.addEventListener("click", (e) => {
        const roomName = e.target.innerText;
        const namespaceId = elem.getAttribute("namespaceId");
        // console.log("clicked on ", roomName);
        joinRoom(roomName, namespaceId);
      });
    });
  });

  if (nsEndpoint) localStorage.setItem("lastNs", nsEndpoint);
};
