const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args);

const namex = args['name'];
const age = args['age'];

console.log(namex, age);

console.log(`Your name is ${namex} and your age is ${age}`);