const getFlag = require('./function');

console.log(`Name: ${getFlag('--name')} Age: ${getFlag('--age')}`);