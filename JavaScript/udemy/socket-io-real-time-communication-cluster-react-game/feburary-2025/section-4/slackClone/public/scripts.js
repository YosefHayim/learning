// const username = prompt("what is your username?");
// const password = prompt("what is your password?");

// Instead of using the prompt with username and pd
const username = "Joseph";
const password = "x";

const clientOptions = {
  // query is used to pass data to the server that can be public not sensitive info!
  query: {
    username,
    password,
  },
  // here is the correct place to pass that sensitive info of username and password
  auth: {
    username,
    password,
  },
};

// always join the main namespace, because that's where the client gets the other namespaces from
const socket = io("http://localhost:9000", clientOptions);

// example to hardcoded namespace to join.
// const socket2 = io("http://localhost:9000/wiki");
// const socket3 = io("http://localhost:9000/mozilla");
// const socket4 = io("http://localhost:9000/linux");

// sockets will be put into this array, in the index of their ns.id
const namespaceSockets = [];
const listeners = {
  nsChange: [],
  messageToRoom: [],
};

// a global variable we can update when the user clicks on a namespace
// we will use it to broadcast across the app (redux will be great here...)
let selectedNsId = 0;

// add a submit handler for our form
document.querySelector("#message-form").addEventListener("submit", (e) => {
  // keep the browser from submitting
  e.preventDefault();

  // grab the value from the input box
  const newMessage = document.querySelector("#user-message").value;

  // send the new message to the server
  namespaceSockets[selectedNsId].emit("newMessageToRoom", {
    newMessage,
    date: Date.now(),
    avatar: "https://via.placeholder.com/30",
    username,
    selectedNsId,
  });

  document.querySelector("#user-message").value = "";
});

// addListeners job is to manage all listeners added to all namespaces.
// this prevents listeners being added multiple times.

const addListeners = (nsId) => {
  // nameSpaceSockets[ns.id] = thisNs
  if (!listeners.nsChange[nsId]) {
    namespaceSockets[nsId].on("nsChange", (data) => {
      console.log(" namespace changed", data);
    });
    listeners.nsChange[nsId] = true;
  }

  if (!listeners.messageToRoom[nsId]) {
    // add the nsId listener to this namespace!
    namespaceSockets[nsId].on("messageToRoom", (messageObj) => {
      console.log("messageObj received: ", messageObj);
      document.querySelector("#messages").innerHTML +=
        buildMessageHtml(messageObj);
    });
    listeners.messageToRoom[nsId] = true;
  }
};

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

    // initialize thisNs as its index in namespaceSockets
    // if the connection is new, this will be null
    // if the connection has already been established,  it will reconnect and remain in its spot
    // let thisNs = namespaceSockets[ns.id];

    if (!namespaceSockets[ns.id]) {
      // there is no socket at this nsId. so make a new connection
      // join this namespace with io()
      namespaceSockets[ns.id] = io(`http://localhost:9000${ns.endpoint}`);
    }

    addListeners(ns.id);
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
