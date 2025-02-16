const joinRoom = (roomTitle, namespaceId) => {
  console.log(roomTitle, namespaceId);
  namespaceSockets[namespaceId].emit("joinRoom", roomTitle);
};
