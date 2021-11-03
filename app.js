/*var events = require("events");
var util = require("util");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("clicked", function (button) {
  console.log(button + " is clicked");
});

eventEmitter.emit("clicked", "button 1");
var Students = function (name) {
  this.name = name;
};

util.inherits(Students, events.EventEmitter);*/

const EventEmitter = require("events");
const emitter = new EventEmitter();
// Register a Listener
emitter.on("Message Logged", function () {
  console.log("Listener Called");
});

// Raise event
emitter.emit("Message Logged");
