//import modules

const fs = require('fs'); //require file system


fs.readFile('filetxt.txt', 'utf8', (err, data) => {

    if(err){
        console.log(err);
    }
    console.log(data);
});