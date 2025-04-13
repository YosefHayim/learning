// Where all our socket stuff will go
const io = require("../servers").io;
// oh... we need express, get app , but only put what we need to inside of our socket stuff
const app = require("../servers").app;

const Orb = require("./classes/Orb");
const PlayerConfig = require("./classes/PlayerConfig");
const PlayerData = require("./classes/PlayerData");
// Make an orbs array that will host all 500/5000 NOT PLAYER orbs.
// every time one is absorb, the server will make a new one

const orbs = [];
const settings = {
  defaultNumberOfOrbs: 500, // Number of orbs on the map
  defaultSpeed: 6, // Default player speed
  defaultZoom: 1.5, // As the player gets bigger zoom needs to go out
  worldWidth: 500,
  worldHeight: 500,
  defaultGenericOrbSize: 5, // Smaller than player orbs
};

// on server start, to make our initial defaultNumberOfOrbs
initGame();
// console.log(orbs);

io.on("connect", (socket) => {
  // A player hs been connected
  // event that runs on join that does init game stuff
  // Make a playerConfig object - the data specific to this player that only the player needs to know
  const playerConfig = new PlayerConfig(settings);
  const playerData = new PlayerData(settings);
  // Make a playerData object - the data specific to this player that everyone needs to know
  // a Master player object to house both
  socket.emit("init", {
    orbs,
  });
});

function initGame() {
  // loop defaultNumberOfOrbs times, and push a new Orb() onto our array
  for (let i = 0; i < settings.defaultNumberOfOrbs; i++) {
    orbs.push(new Orb(settings));
  }
}
