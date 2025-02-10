const socket = io("http://localhost:9000");

// const username = prompt("what is your username?");
// const password = prompt("what is your password?");

socket.on("connect", () => {
  console.log("connected");
  socket.emit("clientConnect");
});

// listen for the nsList event from the server which give us the namespaces
socket.on("nsList", (nsData) => {
  const nameSpacesDiv = document.querySelector(".namespaces");
  nsData.forEach((ns) => {
    console.log(ns.image);
    console.log(ns.name);

    // update the HTML with each ns
    nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.name}"><img src="${ns.image}"></div>
`;
  });
});

socket.on("welcome", (data) => {
  console.log(data);
});
