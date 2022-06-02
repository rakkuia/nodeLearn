const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character(name) {
    this.name = name;
}

inherits(Character, EventEmitter);

const nyarlathotep = new Character('Nyarlathotep');

nyarlathotep.on('help', () => console.log(`And him: ${nyarlathotep.name}: As if beckoned by those who had gone before, I half floated\nbetween the titanic snowdrifts, quivering and afraid, into the sightless vortex of the unimaginable.`
))

console.log('quote:');
nyarlathotep.emit('help');