const _ = require('lodash');


const a = [1, 2, 3];
const b = [1, 39, 4, 5, 6];

const diff = _.difference(a, b);

console.log(diff);