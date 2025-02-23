"use strict";
// set height and width of canvas = window

let wHeight = window.innerHeight;
let wWidth = window.innerWidth;
const player = {}; // This will be all things "this" player

// canvas element needs to be in a variable
const canvas = document.querySelector("#the-canvas");

// context is how we draw! we will be drawing in 2 d
const context = canvas.getContext("2d");

// Set the canvas height and width to = window height and width
canvas.height = wHeight;
canvas.width = wWidth;

// Put the modals in variables so we can interact with them.
window.addEventListener("load", () => {
  const loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
  const spawnModel = new bootstrap.Modal(document.querySelector("#spawnModal"));
  loginModal.show();
});

document.querySelector(".name-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("Submitted!");
  player.name = document.querySelector("#name-input").value;
  loginModal.hide();
  spawnModal.show();
});
