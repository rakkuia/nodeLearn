//name

console.log(process.argv);

const args= process.argv.slice(2);

console.log(args);

const namex = args[0].split('=')[1];
const age = args[1].split('=')[1];


console.log(`Your name is ${namex} and your age is ${age}`);