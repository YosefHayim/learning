const joinRoom = (roomTitle, namespaceId) => {
  console.log(roomTitle, namespaceId);
  //acknowledgement callback
  namespaceSockets[namespaceId].emit("joinRoom", roomTitle, (ackResp) => {
    console.log(ackResp);
    document.querySelector(
      ".curr-room-num-users"
    ).innerHTML = `Users ${ackResp.numUsers}<span class="fa-solid fa-user"></span>`;
  });

  document.querySelector(".curr-room-text").innerHTML = roomTitle;
};
