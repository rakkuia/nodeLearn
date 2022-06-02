const { EventEmitter } = require("events");

const ev = new EventEmitter();

ev.on("hear", (message) => {
  console.log("I hear you", message);
});

ev.once("see", (message) => {
  console.log("I see you", message);
});

ev.emit("hear", "human");
ev.emit("hear", "creature");
ev.emit("hear", "monster");

ev.emit("see", "goo goo da da"); //once
ev.emit("see", "dont"); 
