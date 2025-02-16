const joinRoom = async (roomTitle, namespaceId) => {
  // console.log(roomTitle, namespaceId);
  //acknowledgement callback
  const ackResp = await namespaceSockets[namespaceId].emitWithAck("joinRoom", {
    roomTitle,
    namespaceId,
  });

  document.querySelector(
    ".curr-room-num-users"
  ).innerHTML = `Users ${ackResp.numUsers}<span class="fa-solid fa-user"></span>`;
  document.querySelector(".curr-room-text").innerHTML = roomTitle;

  // we get back the ackResp.thisRoomsHistory from the server
  document.querySelector("#messages").innerHTML = "";

  ackResp.thisRoomsHistory.forEach((message) => {
    document.querySelector("#messages").innerHTML += buildMessageHtml(message);
  });

  console.log(ackResp);
};

// namespaceSockets[namespaceId].emit("joinRoom", roomTitle, (ackResp) => {
//   console.log(ackResp);
//   document.querySelector(
//     ".curr-room-num-users"
//   ).innerHTML = `Users ${ackResp.numUsers}<span class="fa-solid fa-user"></span>`;
// });

// document.querySelector(".curr-room-text").innerHTML = roomTitle;
