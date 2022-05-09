//import modules

const fs = require('fs'); //require file system


fs.readFile('blake.txt', 'utf8', (err, poem) => {

    if(err){
        console.log(err);
    }
    console.log(poem);
});