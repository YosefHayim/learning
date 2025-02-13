// const username = prompt("what is your username?");
// const password = prompt("what is your password?");

// Instead of using the prompt with username and pd
const username = "Joseph";
const password = "x";

// always join the main namespace, because that's where the client gets the other namespaces from
const socket = io("http://localhost:9000");

// example to hardcoded namespace to join.
// const socket2 = io("http://localhost:9000/wiki");
// const socket3 = io("http://localhost:9000/mozilla");
// const socket4 = io("http://localhost:9000/linux");

socket.on("connect", () => {
  console.log("Connected!");
  socket.emit("clientConnect");
});

// listen for the nsList event from the server which give us the namespaces
socket.on("nsList", (nsData) => {
  const lastNs = localStorage.getItem("lastNs");
  const nameSpacesDiv = document.querySelector(".namespaces");
  nameSpacesDiv.innerHTML = "";
  nsData.forEach((ns) => {
    // console.log(ns);
    // update the HTML with each ns
    nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.endpoint}"><img src="${ns.image}"></div>`;
    // join this namespace with io()
    io(`http://localhost:9000${ns.endpoint}`);
  });

  Array.from(document.getElementsByClassName("namespace")).forEach((el) => {
    // console.log(el);
    el.addEventListener("click", () => {
      joinNs(el, nsData);
    });
  });

  // if lastNs is set, grab that element instead of 0.
  const chosenNs = lastNs
    ? document.querySelector(`.namespace[ns="${lastNs}"]`)
    : document.querySelector(".namespace");

  if (chosenNs) {
    joinNs(chosenNs, nsData);
  }

  joinNs(document.getElementsByClassName("namespace")[0], nsData);
});

socket.on("welcome", (data) => {
  console.log(data);
});
