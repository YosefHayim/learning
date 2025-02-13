const joinNs = (el, nsData) => {
  const nsEndpoint = el?.getAttribute("ns");

  const clickedNs = nsData.find((row) => row.endpoint === nsEndpoint);
  const rooms = clickedNs.rooms;
  let roomList = document.querySelector(".room-list");
  // Clear it out
  roomList.innerHTML = "";
  // Loop through each room, and add it to the DOM
  rooms.forEach((room) => {
    roomList.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.roomTitle}</li>
`;
  });
  if (nsEndpoint) localStorage.setItem("lastNs", nsEndpoint);
};
