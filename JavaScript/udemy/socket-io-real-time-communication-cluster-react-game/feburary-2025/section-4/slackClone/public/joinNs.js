// we could ask the server for fresh info on this NS. BAD!!
// we have socket.io/ws and the server will tell us when something has happened!

const joinNs = (el, nsData) => {
  const nsEndpoint = el?.getAttribute("ns");

  const clickedNs = nsData.find((row) => row.endpoint === nsEndpoint);
  // global so we can submit the new message to the right place
  selectedNsId = clickedNs.id;
  const rooms = clickedNs.rooms;
  let roomList = document.querySelector(".room-list");
  // Clear it out
  roomList.innerHTML = "";

  // init first room var
  let firstRoom;

  // Loop through each room, and add it to the DOM
  rooms.forEach((room, i) => {
    if (i === 0) {
      firstRoom = room.roomTitle;
    }

    roomList.innerHTML += `<li class="room" namespaceId=${
      room.namespaceId
    }><span class="fa-solid fa-${room.privateRoom ? "lock" : "globe"}"></span>${
      room.roomTitle
    }</li>
`;

    // after we done with the loop init join the first room
    joinRoom(firstRoom, clickedNs.id);

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
