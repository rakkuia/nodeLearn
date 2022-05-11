const path = require('path');


//absolute path
//console.log(path.resolve('test.txt'));


//form path
const midFolder = "report";
const fileName = "test.txt";

const finalPath = path.join("/", "files", midFolder, fileName);

console.log(finalPath);