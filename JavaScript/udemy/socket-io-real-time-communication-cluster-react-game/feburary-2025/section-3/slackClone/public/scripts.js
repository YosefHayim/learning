// const username = prompt("what is your username?");
// const password = prompt("what is your password?");

// Instead of using the prompt with username and pd
const username = "Joseph";
const password = "x";

const socket = io("http://localhost:9000");

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
    nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.endpoint}"><img src="${ns.image}"></div>
`;
  });

  Array.from(document.getElementsByClassName("namespace")).forEach((el) => {
    // console.log(el);
    el.addEventListener("click", (e) => {
      joinNs(el, nsData);
    });
  });

  // if lastNs is set, grab that element instead of 0.
  joinNs(lastNs || document.getElementsByClassName("namespace")[0], nsData);
});

socket.on("welcome", (data) => {
  console.log(data);
});
