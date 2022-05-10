const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('Start', () =>{
    console.log("Now");
});

console.log('Before');
eventEmitter.emit('Start');
console.log('After');