// The purpose of expressMain is to be the entrypoint for all express stuff
const app = require("../servers").app;
const io = require("../servers").io;

module.exports = app;
