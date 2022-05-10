const fs = require('fs');

console.log("start");

fs.writeFileSync('file.txt', 'im always here');

console.log('End');